import { moves } from "../data/moves";
import { pokemon } from "../data/pokemon";
import { typeEffectMap } from "../data/typeeffectmap";
import { Pokemon } from "./pokemon";

class App {
    public pokemon = pokemon;
    public moves = moves;
    public possibleLevels = Array.from({ length: 100 }, (_, i) => i + 1);
    public typeEffectMap = typeEffectMap;
    public opponent = new Pokemon();
    public player = new Pokemon(this.opponent);
}

ko.applyBindings(new App());

// For Console access/debugging.
(window as any).app = ko.contextFor(document.body).$root;
