import * as Constants from "./constants";
import { typeEffectMap } from "./data/typeEffectMap";
import { types } from "./data/types";
import { IMove } from "./types/imove";
import { IPokemon } from "./types/ipokemon";
import { TypeName } from "./types/typeNames";
import { Pokemon } from "./viewmodels/pokemon";

export function find<T>(arr: T[], cb: (e: T, i: number) => boolean): T | undefined {
    return arr.filter(cb)[0];
}

export function getEffectModifier(a: TypeName, b: IPokemon): number {
    const ta = types[a];
    const tbs = b.type.map((typeName) => {
        const typeValue = types[typeName];
        const o = find(typeEffectMap[ta], (m) => m[typeValue] != null);
        return o ? o[typeValue] : 1;
    });
    return tbs.reduce((p, c) => p * c, 1);
}

export function damageRng(): number {
    return Math.floor(Math.random() *
        (Constants.damageRangeMax - Constants.damageRangeMin)) +
        Constants.damageRangeMin;
}

export function getDamage(
    a: Pokemon,
    d: Pokemon,
    m: IMove,
    random = damageRng())
    : number {
    const aBase = a.pokemon();
    const dBase = d.pokemon();

    if (m.category === "status") { return 0; }

    const attackOrSpec = m.category === "special" ?
        a.special() :
        a.attack();
    const attackPower = m.power;
    const defenseOrSpec = m.category === "special" ?
        d.special() :
        d.defense();
    const STAB = aBase.type.indexOf(m.type) !== -1 ? 1.5 : 1;
    const modifier = getEffectModifier(m.type, dBase) * 10;
    // Shoutout to https://www.math.miami.edu/~jam/azure/compendium/battdam.htm
    // for the helpful formula:
    // ((((((((((2*A)/5+2)*B*C)/D)/50)+2)*X)*Y/10)*Z)/255);
    return Math.floor((((((((((2 * a.level()) / 5 + 2) * attackOrSpec * attackPower) / defenseOrSpec) /
        50) + 2) * STAB) * modifier / 10) * random) / 255);
}

// Lifted logic from https://www.serebii.net/rb/evtraining.shtml
// floor((((Base Stat+IV)*2+(√(EV)/4))*Level)/100)+ Level + 10
export function getHpFromOpponentPokemon(pokemon: IPokemon, level: number): number {
    return Math.floor(((pokemon.hp + Constants.defaultIv) * 2 +
        (Math.sqrt(Constants.defaultEv) / 4) * level) / 100) + level + 10;
}

// Lifted logic from https://www.serebii.net/rb/evtraining.shtml
// floor((((Base Stat+IV)*2+(√(EV)/4))*Level)/100)+ 5
export function getStatFromOpponentPokemon(
    pokemon: IPokemon,
    level: number,
    stat: ("attack" | "speed" | "defense" | "special"))
    : number {
    return Math.floor((((pokemon[stat] + Constants.defaultIv) * 2 +
        (Math.sqrt(Constants.defaultEv) / 4)) * level) / 100) + 5;
}
