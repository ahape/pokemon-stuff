import * as Constants from "../constants";
import { moves } from "../data/moves";
import * as Functions from "../functions";
import { IMove } from "../types/imove";
import { Pokemon } from "./pokemon";

export class Move {
    public name: KnockoutObservable<string> = ko.observable(moves[0].name);
    public move: KnockoutComputed<IMove> = ko.pureComputed(() =>
        Functions.find(moves, (m) => m.name === this.name())!);
    public effectiveness: KnockoutComputed<number>;
    public damageMin: KnockoutComputed<number>;
    public damageMax: KnockoutComputed<number>;
    public damageAvg: KnockoutComputed<number>;
    public opponentHp: KnockoutComputed<number>;
    public hitsUntilKo: KnockoutComputed<number>;

    public constructor(player: Pokemon, opponent: Pokemon) {
        this.effectiveness = ko.pureComputed(() =>
            Functions.getEffectModifier(this.move().type, opponent.pokemon().type));
        this.damageMin = ko.pureComputed(() =>
            Functions.getDamage(
                player.pokemonJson(),
                opponent.pokemonJson(),
                this.move(),
                Constants.damageRangeMin));
        this.damageMax = ko.pureComputed(() =>
            Functions.getDamage(
                player.pokemonJson(),
                opponent.pokemonJson(),
                this.move(),
                Constants.damageRangeMax));
        this.damageAvg = ko.pureComputed(() =>
            (this.damageMax() + this.damageMin()) / 2);
        this.opponentHp = ko.pureComputed(() =>
        Functions.getHpFromOpponentPokemon(
            opponent.pokemon(),
            opponent.level()));
        this.hitsUntilKo = ko.pureComputed(() =>
            Math.ceil(this.opponentHp() / this.damageAvg()));
    }
}
