import * as Constants from "../constants";
import { pokemon } from "../data/pokemon";
import * as Functions from "../functions";
import { IPokemon } from "../types/ipokemon";
import { IPokemonDetails } from "../types/ipokemondetails";
import { Move } from "./move";

export class Pokemon {
    public id: KnockoutObservable<number> = ko.observable(1);
    public level: KnockoutObservable<number> = ko.observable(Constants.defaultLevel);
    public details: KnockoutComputed<IPokemonDetails>;
    public state: KnockoutComputed<IPokemon>;
    public type: KnockoutComputed<string>;
    public moves: Move[];
    public moveIndex: KnockoutObservable<number> = ko.observable(0);
    public move: KnockoutComputed<Move>;
    // public hp: KnockoutObservable<number>;
    // public attack: KnockoutObservable<number>;
    // public defense: KnockoutObservable<number>;
    // public speed: KnockoutObservable<number>;
    // public special: KnockoutObservable<number>;

    public constructor(opponent?: Pokemon) {
        this.details = ko.pureComputed(() =>
            pokemon.find((x) => x.id === this.id())!);
        this.state = ko.pureComputed(() => {
            const details = this.details();
            const level = this.level();

            return {
                ...details,
                ...Functions.getStats(details, level),
                dv: Constants.defaultDv,
                ev: Constants.defaultEv,
                level,
            };
        });
        this.type = ko.pureComputed(() =>
            this.details().type.join("/"));
        this.moves = opponent ? [0, 0, 0, 0].map((i) =>
            new Move(this, opponent)) :
            [];
        this.move = ko.pureComputed(() =>
            this.moves.find((m, i) => i === this.moveIndex())!);
    }
}
