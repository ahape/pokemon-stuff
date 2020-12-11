import { TypeName } from "types/typename";
import * as Constants from "../constants";
import { moves } from "../data/moves";
import * as Functions from "../functions";
import { IMove } from "../types/imove";
import { Pokemon } from "./pokemon";

const noMove: IMove = {
    accuracy: 0,
    category: "status",
    name: "<empty>",
    power: 0,
    pp: 0,
    // We don't want this dummy move to show up as super effective.
    type: "" as any as TypeName,
};

export class Move {
    public name: KnockoutObservable<string>;
    public move: KnockoutComputed<IMove>;
    public effectiveness: KnockoutComputed<number>;
    public damageMin: KnockoutComputed<number>;
    public damageMax: KnockoutComputed<number>;
    public damageAvg: KnockoutComputed<number>;
    public critMaxPct: KnockoutComputed<number>;
    public damageAvgPct: KnockoutComputed<number>;
    public minHitsUntilKo: KnockoutComputed<number>;
    public maxHitsUntilKo: KnockoutComputed<number>;

    public constructor(player: Pokemon, opponent: Pokemon, defaultMove?: IMove) {
        this.name = ko.observable((defaultMove ?? noMove).name);
        this.move  = ko.pureComputed(() =>
            moves.find((m) => m.name === this.name()) ?? noMove);
        this.effectiveness = ko.pureComputed(() =>
            Functions.getEffectModifier(this.move().type, opponent.details().type));
        const damage = ko.pureComputed(() => Functions.getDamage(
            player.state(),
            opponent.state(),
            this.move()));
        this.damageMin = ko.pureComputed(() => damage().defMin);
        this.damageMax = ko.pureComputed(() => damage().defMax);
        this.damageAvg = ko.pureComputed(() => damage().defAvg);
        this.damageAvgPct = ko.pureComputed(() =>
            Math.min(this.damageAvg() / opponent.state().hp * 100, 100));
        this.minHitsUntilKo = ko.pureComputed(() =>
            Math.ceil(opponent.state().hp / this.damageMax()));
        this.maxHitsUntilKo = ko.pureComputed(() =>
            Math.ceil(opponent.state().hp / this.damageMin()));
        this.critMaxPct = ko.pureComputed(() =>
            Math.min(Math.round(damage().critMax / opponent.state().hp * 100), 100));
    }
}
