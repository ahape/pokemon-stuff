import { TypeName } from "./typeNames";

export interface IMove {
    accuracy: number;
    category: "special" | "status" | "physical";
    name: string;
    power: number;
    pp: number;
    type: TypeName;
}
