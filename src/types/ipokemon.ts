import { TypeName } from "./typeName"

export interface IPokemon {
    // statModifier: number
    attack: number;
    defense: number;
    ev: number;
    hp: number;
    id: number;
    iv: number;
    level: number;
    name: string;
    special: number;
    speed: number;
    type: TypeName[];
}