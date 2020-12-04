import { moves } from "../data/moves";
import { pokemon } from "../data/pokemon";
import { typeEffectMap } from "../data/typeeffectmap";
import { Pokemon } from "./pokemon";

class App {
    public pokemon = pokemon;
    public moves = moves;
    public possibleLevels = ((start, stop) => {
        const range: number[] = [];
        while (range.length < stop) { range.push(start++); }
        return range;
    })(1, 100);
    public typeEffectMap = typeEffectMap;
    public opponent = new Pokemon();
    public player = new Pokemon(this.opponent);
}

ko.applyBindings(new App());

// For Console access/debugging.
(window as any).app = ko.contextFor(document.body).$root;
