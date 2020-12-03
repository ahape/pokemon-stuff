import { TypeName } from "./typename";

export interface IPokemonDetails {
    attack: number;
    average: number;
    defense: number;
    id: number;
    hp: number;
    name: string;
    special: number;
    speed: number;
    total: number;
    type: TypeName[];
}
