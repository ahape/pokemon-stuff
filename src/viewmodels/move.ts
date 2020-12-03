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
    public hitsUntilKo: KnockoutComputed<number>;

    public constructor(player: Pokemon, opponent: Pokemon) {
        this.effectiveness = ko.pureComputed(() =>
            Functions.getEffectModifier(this.move().type, opponent.details().type));
        this.damageMin = ko.pureComputed(() =>
            Functions.getDamage(
                player.state(),
                opponent.state(),
                this.move(),
                Constants.damageRangeMin));
        this.damageMax = ko.pureComputed(() =>
            Functions.getDamage(
                player.state(),
                opponent.state(),
                this.move(),
                Constants.damageRangeMax));
        this.damageAvg = ko.pureComputed(() =>
            (this.damageMax() + this.damageMin()) / 2);
        this.hitsUntilKo = ko.pureComputed(() =>
            Math.ceil(opponent.state().hp / this.damageAvg()));
    }
}
