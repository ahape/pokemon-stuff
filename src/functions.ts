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

// Lifted logic from https://www.serebii.net/rb/evtraining.shtml
// floor((((Base Stat+IV)*2+(√(EV)/4))*Level)/100)+ Level + 10
export function getHpFromOpponentPokemon(pokemon: IPokemonDetails, level: number): number {
    return Math.floor(((pokemon.hp + Constants.defaultIv) * 2 +
        (Math.sqrt(Constants.defaultEv) / 4) * level) / 100) + level + 10;
}

// Lifted logic from https://www.serebii.net/rb/evtraining.shtml
// floor((((Base Stat+IV)*2+(√(EV)/4))*Level)/100)+ 5
export function getStatFromOpponentPokemon(
    pokemon: IPokemonDetails,
    level: number,
    stat: ("attack" | "speed" | "defense" | "special"))
    : number {
    return Math.floor((((pokemon[stat] + Constants.defaultIv) * 2 +
        (Math.sqrt(Constants.defaultEv) / 4)) * level) / 100) + 5;
}
