import { learnsets } from "data/learnsets";
import { moves } from "data/moves";
import { IMove } from "types/imove";
import * as Constants from "../constants";
import { pokemon } from "../data/pokemon";
import * as Functions from "../functions";
import { IPokemon } from "../types/ipokemon";
import { IPokemonDetails } from "../types/ipokemondetails";
import { Move } from "./move";

function getDefaultMoves(pkmn: IPokemon): IMove[] {
    const learnset = learnsets[pkmn.name];

    if (!learnset) {
        throw new Error(`Pokemon name ${pkmn.name} not a key in \`learnsets\``);
    }

    return learnset
        .filter((x) => {
            const [, learnedAt] = x;
            return learnedAt <= pkmn.level;
        })
        .slice(0, 4)
        .map((x) => {
            const [moveName] = x;
            const move = moves.find((m) => m.name === moveName);

            if (!move) {
                throw new Error(`Move ${moveName} not found in \`moves\``);
            }

            return move;
        });
}

function createMoves(player: Pokemon, opponent?: Pokemon): Move[] {
    if (opponent) {
        const defaultMoves = getDefaultMoves(player.state.peek());

        return [0, 0, 0, 0].map(() =>
            new Move(player, opponent, defaultMoves.shift()));
    }

    return [];
}

export class Pokemon {
    public id: KnockoutObservable<number> = ko.observable(1);
    public level: KnockoutObservable<number> = ko.observable(Constants.defaultLevel);
    public details: KnockoutComputed<IPokemonDetails>;
    public state: KnockoutComputed<IPokemon>;
    public type: KnockoutComputed<string>;
    public moves: KnockoutComputed<Move[]>;
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

        const stateId = ko.pureComputed(() => this.state().id);

        this.moves = ko.pureComputed(() => {
            // Subscribe to Pokemon or level change only:
            stateId();
            this.level();
            return createMoves(this, opponent);
        });

        this.move = ko.pureComputed(() =>
            this.moves().find((m, i) => i === this.moveIndex())!);
    }
}
