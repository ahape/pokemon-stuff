import * as Constants from "../constants";
import { moves } from "../data/moves";
import { pokemon } from "../data/pokemon";
import * as Functions from "../functions";
import { IMove } from "../types/imove";
import { IPokemon } from "../types/ipokemon";
import { Move } from "./move";

export class Pokemon {
    public id: KnockoutObservable<number> = ko.observable(1);
    public level: KnockoutObservable<number> = ko.observable(15);
    public pokemon: KnockoutComputed<IPokemon>;
    public pokemonTypes: KnockoutComputed<string>;
    public moves: Move[];
    public hp: KnockoutObservable<number>;
    public attack: KnockoutObservable<number>;
    public defense: KnockoutObservable<number>;
    public speed: KnockoutObservable<number>;
    public special: KnockoutObservable<number>;

    public constructor(opponent?: Pokemon) {
        const getPokemon = () =>
            Functions.find(pokemon, (x) => x.id === this.id())!;

        this.moves = opponent ? [0, 0, 0, 0].map((i) =>
            new Move(this, opponent)) : [];
        this.pokemon = ko.pureComputed(getPokemon);
        this.pokemonTypes = ko.pureComputed(() =>
            this.pokemon().type.join("/"));

        const pok = ko.ignoreDependencies(getPokemon);
        const level = this.level.peek();

        this.hp = ko.observable(Functions.getHpFromOpponentPokemon(pok, level));
        this.attack = ko.observable(Functions.getStatFromOpponentPokemon(
            pok, level, "attack"));
        this.defense = ko.observable(Functions.getStatFromOpponentPokemon(
            pok, level, "defense"));
        this.speed = ko.observable(Functions.getStatFromOpponentPokemon(
            pok, level, "speed"));
        this.special = ko.observable(Functions.getStatFromOpponentPokemon(
            pok, level, "special"));
    }
}
