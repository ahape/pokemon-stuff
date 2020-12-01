import { TypeName } from "../types/typeName";

const noEffect = 0;
const notVeryEffective = 0.5;
const effective = 2;

type ObjectKeyedByTypeName<T> = { [k in TypeName]?: T };

export const typeEffectMap: ObjectKeyedByTypeName<ObjectKeyedByTypeName<number>> = {
    bug: {
        fighting: notVeryEffective,
        flying: notVeryEffective,
        poison: effective,
        ghost: notVeryEffective,
        fire: notVeryEffective,
        grass: effective,
        psychic: effective,
    },
    dragon: {
        dragon: effective
    },
    electric: {
        flying: effective,
        ground: noEffect,
        water: effective,
        grass: notVeryEffective,
        electric: notVeryEffective,
        dragon: notVeryEffective,
    },
    fairy: {},
    fighting: {
        normal: effective,
        flying: notVeryEffective,
        poison: notVeryEffective,
        rock: effective,
        bug: notVeryEffective,
        ghost: noEffect,
        psychic: notVeryEffective,
        ice: effective,
    },
    fire: {
        rock: notVeryEffective,
        bug: effective,
        fire: notVeryEffective,
        water: notVeryEffective,
        grass: effective,
        ice: effective,
        dragon: notVeryEffective,
    },
    flying: {
        fighting: effective,
        rock: notVeryEffective,
        bug: effective,
        grass: effective,
        electric: notVeryEffective,
    },
    ghost: {
        normal: noEffect,
        ghost: effective,
        psychic: noEffect,
    },
    grass: {
        flying: notVeryEffective,
        poison: notVeryEffective,
        ground: effective,
        rock: effective,
        bug: notVeryEffective,
        fire: notVeryEffective,
        water: effective,
        grass: notVeryEffective,
        dragon: notVeryEffective,
    },
    ground: {
        flying: noEffect,
        poison: effective,
        rock: effective,
        bug: notVeryEffective,
        fire: effective,
        grass: notVeryEffective,
        electric: effective,
    },
    ice: {
        flying: effective,
        ground: effective,
        water: notVeryEffective,
        grass: effective,
        ice: notVeryEffective,
        dragon: effective,
    },
    normal: {
        rock: notVeryEffective,
        ghost: noEffect,
    },
    poison: {
        poison: notVeryEffective,
        ground: notVeryEffective,
        rock: notVeryEffective,
        bug: effective,
        ghost: notVeryEffective,
        grass: effective,
    },
    psychic: {
        fighting: effective,
        poison: effective,
        psychic: notVeryEffective,
    },
    rock: {
        fighting: notVeryEffective,
        flying: effective,
        ground: notVeryEffective,
        bug: effective,
        fire: effective,
        ice: effective,
    },
    water: {
        ground: effective,
        rock: effective,
        fire: effective,
        water: notVeryEffective,
        grass: notVeryEffective,
        dragon: notVeryEffective,
    },
};
