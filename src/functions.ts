import * as Constants from "./constants";
import { typeEffectMap } from "./data/typeeffectmap";
import { IMove } from "./types/imove";
import { IPokemon } from "./types/ipokemon";
import { IPokemonDetails } from "./types/ipokemondetails";
import { TypeName } from "./types/typename";

export function find<T>(arr: T[], cb: (e: T, i: number) => boolean): T | undefined {
    return arr.filter(cb)[0];
}

export function getEffectModifier(
    moveType: TypeName,
    defendingPokemonType: TypeName[])
    : number {
    const modifiers = defendingPokemonType.map((typeName) =>
        (typeEffectMap[typeName] && typeEffectMap[typeName]![moveType]) ?? 1);
    return modifiers.reduce((p, c) => p * c, 1);
}

export function damageRng(): number {
    return Math.floor(Math.random() *
        (Constants.damageRangeMax - Constants.damageRangeMin)) +
        Constants.damageRangeMin;
}

export function getDamage(
    a: IPokemon,
    d: IPokemon,
    m: IMove,
    random = damageRng())
    : number {
    if (m.category === "status") { return 0; }

    const attackOrSpec = m.category === "special" ? a.special : a.attack;
    const defenseOrSpec = m.category === "special" ? d.special : d.defense;
    const stab = a.type.indexOf(m.type) !== -1 ? 1.5 : 1;
    const modifier = getEffectModifier(m.type, d.type) * 10;
    // Shoutout to https://www.math.miami.edu/~jam/azure/compendium/battdam.htm
    // for the helpful formula:
    // ((((((((((2*A)/5+2)*B*C)/D)/50)+2)*X)*Y/10)*Z)/255);
    return Math.floor((((((((((2 * a.level) / 5 + 2) * attackOrSpec * m.power) / defenseOrSpec) /
        50) + 2) * stab) * modifier / 10) * random) / 255);
}

const { min, max, sqrt } = Math;
const int = Math.floor;

// Lifted logic from https://www.serebii.net/rb/evtraining.shtml
// floor((((Base Stat+IV)*2+(√(EV)/4))*Level)/100)+ Level + 10
export function getHpStat(pokemon: IPokemonDetails, level: number): number {
    return Math.floor(((pokemon.hp + Constants.defaultIv) * 2 +
        (Math.sqrt(Constants.defaultEv) / 4) * level) / 100) + level + 10;
}

/**
 * Stolen formula from:
 * https://gamefaqs.gamespot.com/gameboy/907714-pokemon-blue-version/faqs/64175
 * Section [M03].
 * @param L Level of your Pokemon.
 * @param B The base stat of the Pokemon for that stat.
 * @param D The DV value of that Pokemon for that stat.
 * @param S The Stat Experience, aka EV, of that Pokemon for that stat.
 */
export function getHpStat2(
    L: number,
    B: number,
    D: number,
    S: number)
    : number {
    return int((2 * B + 2 * D + min(int((int(sqrt(max(S - 1, 0))) + 1) / 4), 63)) * L / 100) + L + 10;
}

(window as any).getHpStat2 = getHpStat2;

// Lifted logic from https://www.serebii.net/rb/evtraining.shtml
// floor((((Base Stat+IV)*2+(√(EV)/4))*Level)/100)+ 5

/**
 * Stolen formula from:
 * https://gamefaqs.gamespot.com/gameboy/907714-pokemon-blue-version/faqs/64175
 * Section [M03].
 * @param L Level of your Pokemon.
 * @param B The base stat of the Pokemon for that stat.
 * @param D The DV value of that Pokemon for that stat.
 * @param S The Stat Experience, aka EV, of that Pokemon for that stat.
 */
export function getNonHpStat2(
    L: number,
    B: number,
    D: number,
    S: number)
    : number {
    return int((2 * B + 2 * D + min(int((int(sqrt(max(S - 1, 0))) + 1) / 4), 63)) * L / 100) + 5;
}

(window as any).getNonHpStat2 = getNonHpStat2;

export function getStats(pokemon: IPokemonDetails, level: number): Partial<IPokemonDetails> {
    const defense = getNonHpStat2(level, pokemon.defense, 8, 0);
    const attack = getNonHpStat2(level, pokemon.attack, 8, 0);
    const special = getNonHpStat2(level, pokemon.special, 8, 0);
    const speed = getNonHpStat2(level, pokemon.speed, 8, 0);
    const hp = getHpStat2(level, pokemon.hp, 8, 0);
    return { attack, defense, hp, special, speed };
}

export function getNonHpStat(
    pokemon: IPokemonDetails,
    level: number,
    stat: ("attack" | "speed" | "defense" | "special"))
    : number {
    return Math.floor((((pokemon[stat] + Constants.defaultIv) * 2 +
        (Math.sqrt(Constants.defaultEv) / 4)) * level) / 100) + 5;
}
