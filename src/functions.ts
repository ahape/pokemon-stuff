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
        (typeEffectMap[moveType] && typeEffectMap[moveType]![typeName]) ?? 1);
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
    const modifier = getEffectModifier(m.type, d.type);
    return getDamage2(
        a.level,
        undefined,
        attackOrSpec,
        undefined,
        m.power,
        defenseOrSpec,
        undefined,
        stab,
        modifier,
        random);
    /*
    return Math.floor((((((((((2 * a.level) / 5 + 2) * attackOrSpec * m.power) / defenseOrSpec) /
        50) + 2) * stab) * modifier / 10) * random) / 255);
    */
}

const { min, max, sqrt } = Math;
const int = Math.floor;

// Other formulae:
//
// 1. https://www.serebii.net/rb/evtraining.shtml
// HP:
//  floor((((Base Stat+IV)*2+(√(EV)/4))*Level)/100)+ Level + 10
// Stat:
//  floor((((Base Stat+IV)*2+(√(EV)/4))*Level)/100)+ 5
//
// 2. https://www.math.miami.edu/~jam/azure/compendium/battdam.htm
// Damage:
//  ((((((((((2*A)/5+2)*B*C)/D)/50)+2)*X)*Y/10)*Z)/255)

/**
 * Stolen formula from:
 * https://gamefaqs.gamespot.com/gameboy/907714-pokemon-blue-version/faqs/64175
 * Section [M03].
 * @param L Level of your Pokemon.
 * @param B The base stat of the Pokemon for that stat.
 * @param D The DV value of that Pokemon for that stat.
 * @param S The Stat Experience, aka EV, of that Pokemon for that stat.
 */
export function getHpStat(
    L: number,
    B: number,
    D: number,
    S: number)
    : number {
    return int((2 * B + 2 * D + min(int((int(sqrt(max(S - 1, 0))) + 1) / 4), 63)) * L / 100) + L + 10;
}

(window as any).getHpStat = getHpStat;

// Lifted logic from https://www.serebii.net/rb/evtraining.shtml

/**
 * Stolen formula from:
 * https://gamefaqs.gamespot.com/gameboy/907714-pokemon-blue-version/faqs/64175
 * Section [M03].
 * @param L Level of your Pokemon.
 * @param B The base stat of the Pokemon for that stat.
 * @param D The DV value of that Pokemon for that stat.
 * @param S The Stat Experience, aka EV, of that Pokemon for that stat.
 */
export function getNonHpStat(
    L: number,
    B: number,
    D: number,
    S: number)
    : number {
    return int((2 * B + 2 * D + min(int((int(sqrt(max(S - 1, 0))) + 1) / 4), 63)) * L / 100) + 5;
}

(window as any).getNonHpStat = getNonHpStat;

export function getStats(pokemon: IPokemonDetails, level: number): Partial<IPokemonDetails> {
    const defense = getNonHpStat(level, pokemon.defense, Constants.defaultDv, Constants.defaultEv);
    const attack = getNonHpStat(level, pokemon.attack, Constants.defaultDv, Constants.defaultEv);
    const special = getNonHpStat(level, pokemon.special, Constants.defaultDv, Constants.defaultEv);
    const speed = getNonHpStat(level, pokemon.speed, Constants.defaultDv, Constants.defaultEv);
    const hp = getHpStat(level, pokemon.hp, Constants.defaultDv, Constants.defaultEv);
    return { attack, defense, hp, special, speed };
}

/**
 * Stolen formula from
 * https://gamefaqs.gamespot.com/gameboy/907714-pokemon-blue-version/faqs/64175
 * Section [M06]
 * @param L Level of attacking Pokemon.
 * @param C Critical hit modifier: 2 if a critical hit is scored, 1 otherwise.
 * @param A Attack/Special value of the attacking Pokemon dependant on move type as
 *  described above. To calculate A, please see above.
 * @param B 0.25 if Reflect (for physical attacks) or Light Screen (for special attacks)
 *  is up on the opponent, 1 otherwise. Yes, it quarters your Attack, but it
 *  also halves the opponent's Defense, for some reason.
 * @param P Base power of the attacking move.
 * @param D Defense/Special value of the defending Pokemon.
 * @param E 0.5 if Reflect (for physical attacks) or Light Screen (for special attacks)
 *  is up on the opponent, 1 otherwise.
 * @param S Same-Type-Attack-Bonus (STAB). 1.5 if the attacker uses a move of the same
 *  type as itself, 1 otherwise.
 * @param T The type effectiveness of the move; super effective = 2, neutral = 1, etc.
 * @param R A randomly determined number between 217 and 255. R is always 255 if the
 *  formula up to this point is strictly greater than 767.
 */
export function getDamage2(
    L: number,
    C: number = 1,
    A: number,
    B: number = 1,
    P: number,
    D: number,
    E: number = 1,
    S: number,
    T: number,
    R: number = damageRng())
    : number {
    return int(int(int((min(int(int((int((L * C % 256) * 0.4) + 2) *
        min(int(A * B), 1) * P / min(int(D * E), 1)) / 50), 997) + 2) * S) * T) * R / 255);
}

(window as any).getDamage = getDamage2;
