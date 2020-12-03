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
    public hp: KnockoutObservable<number>;
    public attack: KnockoutObservable<number>;
    public defense: KnockoutObservable<number>;
    public speed: KnockoutObservable<number>;
    public special: KnockoutObservable<number>;

    public constructor(opponent?: Pokemon) {
        const getPokemonDetails = () =>
            Functions.find(pokemon, (x) => x.id === this.id())!;
        const details = ko.ignoreDependencies(getPokemonDetails);
        const level = this.level.peek();
        const stats = Functions.getStats(details, level);

        this.hp = ko.observable(stats.hp!);
        this.attack = ko.observable(stats.attack!);
        this.defense = ko.observable(stats.defense!);
        this.speed = ko.observable(stats.speed!);
        this.special = ko.observable(stats.special!);

        this.details = ko.pureComputed(getPokemonDetails);
        this.state = ko.pureComputed(() => {
            return {
                ...this.details(),
                attack: this.attack(),
                defense: this.defense(),
                dv: Constants.defaultDv,
                ev: Constants.defaultEv,
                hp: this.hp(),
                level: this.level(),
                special: this.special(),
                speed: this.speed(),
            };
        });

        this.type = ko.pureComputed(() =>
            this.details().type.join("/"));
        this.moves = opponent ? [0, 0, 0, 0].map((i) =>
            new Move(this, opponent)) :
            [];
    }
}
