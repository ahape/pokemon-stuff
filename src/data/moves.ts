/* tslint:disable:object-literal-sort-keys */
import { IMove } from "../types/imove";

export const moves: IMove[] = [{
    name: "absorb",
    type: "grass",
    category: "special",
    power: 20,
    accuracy: 100,
    pp: 25,
}, {
    name: "acid",
    type: "poison",
    category: "physical",
    power: 40,
    accuracy: 100,
    pp: 30,
}, {
    name: "acid-armor",
    type: "poison",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 20,
}, {
    name: "agility",
    type: "psychic",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 30,
}, {
    name: "amnesia",
    type: "psychic",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 20,
}, {
    name: "aurora-beam",
    type: "ice",
    category: "special",
    power: 65,
    accuracy: 100,
    pp: 20,
}, {
    name: "barrage",
    type: "normal",
    category: "physical",
    power: 15,
    accuracy: 85,
    pp: 20,
}, {
    name: "barrier",
    type: "psychic",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 20,
}, {
    name: "bide",
    type: "normal",
    category: "physical",
    power: 0,
    accuracy: 0,
    pp: 10,
}, {
    name: "bind",
    type: "normal",
    category: "physical",
    power: 15,
    accuracy: 85,
    pp: 20,
}, {
    name: "bite",
    type: "normal",
    category: "physical",
    power: 60,
    accuracy: 100,
    pp: 25,
}, {
    name: "blizzard",
    type: "ice",
    category: "special",
    power: 120,
    accuracy: 70,
    pp: 5,
}, {
    name: "body-slam",
    type: "normal",
    category: "physical",
    power: 85,
    accuracy: 100,
    pp: 15,
}, {
    name: "bone-club",
    type: "ground",
    category: "physical",
    power: 65,
    accuracy: 85,
    pp: 20,
}, {
    name: "bonemerang",
    type: "ground",
    category: "physical",
    power: 50,
    accuracy: 90,
    pp: 10,
}, {
    name: "bubble",
    type: "water",
    category: "special",
    power: 40,
    accuracy: 100,
    pp: 30,
}, {
    name: "bubble-beam",
    type: "water",
    category: "special",
    power: 65,
    accuracy: 100,
    pp: 20,
}, {
    name: "clamp",
    type: "water",
    category: "special",
    power: 35,
    accuracy: 85,
    pp: 15,
}, {
    name: "comet-punch",
    type: "normal",
    category: "physical",
    power: 18,
    accuracy: 85,
    pp: 15,
}, {
    name: "confuse-ray",
    type: "ghost",
    category: "status",
    power: 0,
    accuracy: 100,
    pp: 10,
}, {
    name: "confusion",
    type: "psychic",
    category: "special",
    power: 50,
    accuracy: 100,
    pp: 25,
}, {
    name: "constrict",
    type: "normal",
    category: "physical",
    power: 10,
    accuracy: 100,
    pp: 35,
}, {
    name: "conversion",
    type: "normal",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 30,
}, {
    name: "counter",
    type: "fighting",
    category: "physical",
    power: 0,
    accuracy: 100,
    pp: 20,
}, {
    name: "crabhammer",
    type: "water",
    category: "special",
    power: 90,
    accuracy: 90,
    pp: 10,
}, {
    name: "cut",
    type: "normal",
    category: "physical",
    power: 50,
    accuracy: 95,
    pp: 30,
}, {
    name: "defense-curl",
    type: "normal",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 40,
}, {
    name: "dig",
    type: "ground",
    category: "physical",
    power: 100,
    accuracy: 100,
    pp: 10,
}, {
    name: "disable",
    type: "normal",
    category: "status",
    power: 0,
    accuracy: 100,
    pp: 20,
}, {
    name: "dizzy-punch",
    type: "normal",
    category: "physical",
    power: 70,
    accuracy: 100,
    pp: 10,
}, {
    name: "double-kick",
    type: "fighting",
    category: "physical",
    power: 30,
    accuracy: 100,
    pp: 30,
}, {
    name: "double-edge",
    type: "normal",
    category: "physical",
    power: 100,
    accuracy: 100,
    pp: 15,
}, {
    name: "double-slap",
    type: "normal",
    category: "physical",
    power: 15,
    accuracy: 85,
    pp: 10,
}, {
    name: "double-team",
    type: "normal",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 15,
}, {
    name: "dragon-rage",
    type: "dragon",
    category: "special",
    power: 0,
    accuracy: 100,
    pp: 10,
}, {
    name: "dream-eater",
    type: "psychic",
    category: "special",
    power: 100,
    accuracy: 100,
    pp: 15,
}, {
    name: "drill-peck",
    type: "flying",
    category: "physical",
    power: 80,
    accuracy: 100,
    pp: 20,
}, {
    name: "earthquake",
    type: "ground",
    category: "physical",
    power: 100,
    accuracy: 100,
    pp: 10,
}, {
    name: "egg-bomb",
    type: "normal",
    category: "physical",
    power: 100,
    accuracy: 75,
    pp: 10,
}, {
    name: "ember",
    type: "fire",
    category: "special",
    power: 40,
    accuracy: 100,
    pp: 25,
}, {
    name: "explosion",
    type: "normal",
    category: "physical",
    power: 250,
    accuracy: 100,
    pp: 5,
}, {
    name: "fire-blast",
    type: "fire",
    category: "special",
    power: 120,
    accuracy: 85,
    pp: 5,
}, {
    name: "fire-punch",
    type: "fire",
    category: "special",
    power: 75,
    accuracy: 100,
    pp: 15,
}, {
    name: "fire-spin",
    type: "fire",
    category: "special",
    power: 15,
    accuracy: 85,
    pp: 15,
}, {
    name: "fissure",
    type: "ground",
    category: "physical",
    power: 0,
    accuracy: 30,
    pp: 5,
}, {
    name: "flamethrower",
    type: "fire",
    category: "special",
    power: 95,
    accuracy: 100,
    pp: 15,
}, {
    name: "flash",
    type: "normal",
    category: "status",
    power: 0,
    accuracy: 100,
    pp: 20,
}, {
    name: "fly",
    type: "flying",
    category: "physical",
    power: 70,
    accuracy: 95,
    pp: 15,
}, {
    name: "focus-energy",
    type: "normal",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 30,
}, {
    name: "fury-attack",
    type: "normal",
    category: "physical",
    power: 15,
    accuracy: 85,
    pp: 20,
}, {
    name: "fury-swipes",
    type: "normal",
    category: "physical",
    power: 18,
    accuracy: 80,
    pp: 15,
}, {
    name: "glare",
    type: "normal",
    category: "status",
    power: 0,
    accuracy: 100,
    pp: 30,
}, {
    name: "growl",
    type: "normal",
    category: "status",
    power: 0,
    accuracy: 100,
    pp: 40,
}, {
    name: "growth",
    type: "normal",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 20,
}, {
    name: "guillotine",
    type: "normal",
    category: "physical",
    power: 0,
    accuracy: 30,
    pp: 5,
}, {
    name: "gust",
    type: "normal",
    category: "physical",
    power: 40,
    accuracy: 100,
    pp: 35,
}, {
    name: "harden",
    type: "normal",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 30,
}, {
    name: "haze",
    type: "ice",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 30,
}, {
    name: "headbutt",
    type: "normal",
    category: "physical",
    power: 70,
    accuracy: 100,
    pp: 15,
}, {
    name: "high-jump-kick",
    type: "fighting",
    category: "physical",
    power: 85,
    accuracy: 90,
    pp: 10,
}, {
    name: "horn-attack",
    type: "normal",
    category: "physical",
    power: 65,
    accuracy: 100,
    pp: 25,
}, {
    name: "horn-drill",
    type: "normal",
    category: "physical",
    power: 0,
    accuracy: 30,
    pp: 5,
}, {
    name: "hydro-pump",
    type: "water",
    category: "special",
    power: 120,
    accuracy: 80,
    pp: 5,
}, {
    name: "hyper-beam",
    type: "normal",
    category: "physical",
    power: 150,
    accuracy: 90,
    pp: 5,
}, {
    name: "hyper-fang",
    type: "normal",
    category: "physical",
    power: 80,
    accuracy: 90,
    pp: 15,
}, {
    name: "hypnosis",
    type: "psychic",
    category: "status",
    power: 0,
    accuracy: 60,
    pp: 20,
}, {
    name: "ice-beam",
    type: "ice",
    category: "special",
    power: 95,
    accuracy: 100,
    pp: 10,
}, {
    name: "ice-punch",
    type: "ice",
    category: "special",
    power: 75,
    accuracy: 100,
    pp: 15,
}, {
    name: "jump-kick",
    type: "normal",
    category: "physical",
    power: 70,
    accuracy: 95,
    pp: 10,
}, {
    name: "karate-chop",
    type: "normal",
    category: "physical",
    power: 50,
    accuracy: 100,
    pp: 25,
}, {
    name: "kinesis",
    type: "psychic",
    category: "status",
    power: 0,
    accuracy: 80,
    pp: 15,
}, {
    name: "leech-life",
    type: "bug",
    category: "physical",
    power: 20,
    accuracy: 100,
    pp: 10,
}, {
    name: "leech-seed",
    type: "grass",
    category: "status",
    power: 0,
    accuracy: 90,
    pp: 10,
}, {
    name: "leer",
    type: "normal",
    category: "status",
    power: 0,
    accuracy: 100,
    pp: 30,
}, {
    name: "lick",
    type: "ghost",
    category: "physical",
    power: 20,
    accuracy: 100,
    pp: 30,
}, {
    name: "light-screen",
    type: "psychic",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 30,
}, {
    name: "lovely-kiss",
    type: "normal",
    category: "status",
    power: 0,
    accuracy: 75,
    pp: 10,
}, {
    name: "low-kick",
    type: "fighting",
    category: "physical",
    power: 50,
    accuracy: 100,
    pp: 20,
}, {
    name: "meditate",
    type: "psychic",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 40,
}, {
    name: "mega-drain",
    type: "grass",
    category: "special",
    power: 40,
    accuracy: 100,
    pp: 15,
}, {
    name: "mega-kick",
    type: "normal",
    category: "physical",
    power: 120,
    accuracy: 75,
    pp: 5,
}, {
    name: "mega-punch",
    type: "normal",
    category: "physical",
    power: 80,
    accuracy: 85,
    pp: 20,
}, {
    name: "metronome",
    type: "normal",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 10,
}, {
    name: "mimic",
    type: "normal",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 10,
}, {
    name: "minimize",
    type: "normal",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 10,
}, {
    name: "mirror-move",
    type: "flying",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 20,
}, {
    name: "mist",
    type: "ice",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 30,
}, {
    name: "night-shade",
    type: "ghost",
    category: "physical",
    power: 0,
    accuracy: 100,
    pp: 15,
}, {
    name: "pay-day",
    type: "normal",
    category: "physical",
    power: 40,
    accuracy: 100,
    pp: 20,
}, {
    name: "peck",
    type: "flying",
    category: "physical",
    power: 35,
    accuracy: 100,
    pp: 35,
}, {
    name: "petal-dance",
    type: "grass",
    category: "special",
    power: 70,
    accuracy: 100,
    pp: 10,
}, {
    name: "pin-missile",
    type: "bug",
    category: "physical",
    power: 14,
    accuracy: 95,
    pp: 20,
}, {
    name: "poison-gas",
    type: "poison",
    category: "status",
    power: 0,
    accuracy: 90,
    pp: 40,
}, {
    name: "poison-powder",
    type: "poison",
    category: "status",
    power: 0,
    accuracy: 75,
    pp: 35,
}, {
    name: "poison-sting",
    type: "poison",
    category: "physical",
    power: 15,
    accuracy: 100,
    pp: 35,
}, {
    name: "pound",
    type: "normal",
    category: "physical",
    power: 40,
    accuracy: 100,
    pp: 35,
}, {
    name: "psybeam",
    type: "psychic",
    category: "special",
    power: 65,
    accuracy: 100,
    pp: 20,
}, {
    name: "psychic",
    type: "psychic",
    category: "special",
    power: 90,
    accuracy: 100,
    pp: 10,
}, {
    name: "psywave",
    type: "psychic",
    category: "special",
    power: 0,
    accuracy: 100,
    pp: 15,
}, {
    name: "quick-attack",
    type: "normal",
    category: "physical",
    power: 40,
    accuracy: 100,
    pp: 30,
}, {
    name: "rage",
    type: "normal",
    category: "physical",
    power: 20,
    accuracy: 100,
    pp: 20,
}, {
    name: "razor-leaf",
    type: "grass",
    category: "special",
    power: 55,
    accuracy: 95,
    pp: 25,
}, {
    name: "razor-wind",
    type: "normal",
    category: "physical",
    power: 80,
    accuracy: 100,
    pp: 10,
}, {
    name: "recover",
    type: "normal",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 10,
}, {
    name: "reflect",
    type: "psychic",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 20,
}, {
    name: "rest",
    type: "psychic",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 10,
}, {
    name: "roar",
    type: "normal",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 20,
}, {
    name: "rock-slide",
    type: "rock",
    category: "physical",
    power: 75,
    accuracy: 90,
    pp: 10,
}, {
    name: "rock-throw",
    type: "rock",
    category: "physical",
    power: 50,
    accuracy: 90,
    pp: 15,
}, {
    name: "rolling-kick",
    type: "fighting",
    category: "physical",
    power: 60,
    accuracy: 85,
    pp: 15,
}, {
    name: "sand-attack",
    type: "ground",
    category: "status",
    power: 0,
    accuracy: 100,
    pp: 15,
}, {
    name: "scratch",
    type: "normal",
    category: "physical",
    power: 40,
    accuracy: 100,
    pp: 35,
}, {
    name: "screech",
    type: "normal",
    category: "status",
    power: 0,
    accuracy: 85,
    pp: 40,
}, {
    name: "seismic-toss",
    type: "fighting",
    category: "physical",
    power: 0,
    accuracy: 100,
    pp: 20,
}, {
    name: "self-destruct",
    type: "normal",
    category: "physical",
    power: 200,
    accuracy: 100,
    pp: 5,
}, {
    name: "sharpen",
    type: "normal",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 30,
}, {
    name: "sing",
    type: "normal",
    category: "status",
    power: 0,
    accuracy: 55,
    pp: 15,
}, {
    name: "skull-bash",
    type: "normal",
    category: "physical",
    power: 100,
    accuracy: 100,
    pp: 10,
}, {
    name: "sky-attack",
    type: "flying",
    category: "physical",
    power: 140,
    accuracy: 90,
    pp: 5,
}, {
    name: "slam",
    type: "normal",
    category: "physical",
    power: 80,
    accuracy: 75,
    pp: 20,
}, {
    name: "slash",
    type: "normal",
    category: "physical",
    power: 70,
    accuracy: 100,
    pp: 20,
}, {
    name: "sleep-powder",
    type: "grass",
    category: "status",
    power: 0,
    accuracy: 75,
    pp: 15,
}, {
    name: "sludge",
    type: "poison",
    category: "physical",
    power: 65,
    accuracy: 100,
    pp: 20,
}, {
    name: "smog",
    type: "poison",
    category: "physical",
    power: 20,
    accuracy: 70,
    pp: 20,
}, {
    name: "smokescreen",
    type: "normal",
    category: "status",
    power: 0,
    accuracy: 100,
    pp: 20,
}, {
    name: "soft-boiled",
    type: "normal",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 10,
}, {
    name: "solar-beam",
    type: "grass",
    category: "special",
    power: 120,
    accuracy: 100,
    pp: 10,
}, {
    name: "sonic-boom",
    type: "normal",
    category: "physical",
    power: 0,
    accuracy: 90,
    pp: 20,
}, {
    name: "spike-cannon",
    type: "normal",
    category: "physical",
    power: 20,
    accuracy: 100,
    pp: 15,
}, {
    name: "splash",
    type: "normal",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 40,
}, {
    name: "spore",
    type: "grass",
    category: "status",
    power: 0,
    accuracy: 100,
    pp: 15,
}, {
    name: "stomp",
    type: "normal",
    category: "physical",
    power: 65,
    accuracy: 100,
    pp: 20,
}, {
    name: "strength",
    type: "normal",
    category: "physical",
    power: 80,
    accuracy: 100,
    pp: 15,
}, {
    name: "string-shot",
    type: "bug",
    category: "status",
    power: 0,
    accuracy: 95,
    pp: 40,
}, {
    name: "struggle",
    type: "normal",
    category: "physical",
    power: 50,
    accuracy: 0,
    pp: Infinity,
}, {
    name: "stun-spore",
    type: "grass",
    category: "status",
    power: 0,
    accuracy: 75,
    pp: 30,
}, {
    name: "submission",
    type: "fighting",
    category: "physical",
    power: 80,
    accuracy: 80,
    pp: 20,
}, {
    name: "substitute",
    type: "normal",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 10,
}, {
    name: "super-fang",
    type: "normal",
    category: "physical",
    power: 0,
    accuracy: 90,
    pp: 10,
}, {
    name: "supersonic",
    type: "normal",
    category: "status",
    power: 0,
    accuracy: 55,
    pp: 20,
}, {
    name: "surf",
    type: "water",
    category: "special",
    power: 95,
    accuracy: 100,
    pp: 15,
}, {
    name: "swift",
    type: "normal",
    category: "physical",
    power: 60,
    accuracy: 100,
    pp: 20,
}, {
    name: "swords-dance",
    type: "normal",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 20,
}, {
    name: "tackle",
    type: "normal",
    category: "physical",
    power: 35,
    accuracy: 100,
    pp: 35,
}, {
    name: "tail-whip",
    type: "normal",
    category: "status",
    power: 0,
    accuracy: 100,
    pp: 30,
}, {
    name: "take-down",
    type: "normal",
    category: "physical",
    power: 90,
    accuracy: 85,
    pp: 20,
}, {
    name: "teleport",
    type: "psychic",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 20,
}, {
    name: "thrash",
    type: "normal",
    category: "physical",
    power: 90,
    accuracy: 100,
    pp: 10,
}, {
    name: "thunder",
    type: "electric",
    category: "special",
    power: 120,
    accuracy: 70,
    pp: 10,
}, {
    name: "thunder-punch",
    type: "electric",
    category: "special",
    power: 75,
    accuracy: 100,
    pp: 15,
}, {
    name: "thunder-shock",
    type: "electric",
    category: "special",
    power: 40,
    accuracy: 100,
    pp: 30,
}, {
    name: "thunder-wave",
    type: "electric",
    category: "status",
    power: 0,
    accuracy: 90,
    pp: 20,
}, {
    name: "thunderbolt",
    type: "electric",
    category: "special",
    power: 90,
    accuracy: 100,
    pp: 15,
}, {
    name: "toxic",
    type: "poison",
    category: "status",
    power: 0,
    accuracy: 90,
    pp: 10,
}, {
    name: "transform",
    type: "normal",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 10,
}, {
    name: "tri-attack",
    type: "normal",
    category: "physical",
    power: 80,
    accuracy: 100,
    pp: 10,
}, {
    name: "twineedle",
    type: "bug",
    category: "physical",
    power: 25,
    accuracy: 100,
    pp: 20,
}, {
    name: "vine-whip",
    type: "grass",
    category: "special",
    power: 35,
    accuracy: 100,
    pp: 25,
}, {
    name: "vise-grip",
    type: "normal",
    category: "physical",
    power: 55,
    accuracy: 100,
    pp: 30,
}, {
    name: "water-gun",
    type: "water",
    category: "special",
    power: 40,
    accuracy: 100,
    pp: 25,
}, {
    name: "waterfall",
    type: "water",
    category: "special",
    power: 80,
    accuracy: 100,
    pp: 15,
}, {
    name: "whirlwind",
    type: "normal",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 20,
}, {
    name: "wing-attack",
    type: "flying",
    category: "physical",
    power: 35,
    accuracy: 100,
    pp: 35,
}, {
    name: "withdraw",
    type: "water",
    category: "status",
    power: 0,
    accuracy: 0,
    pp: 40,
}, {
    name: "wrap",
    type: "normal",
    category: "physical",
    power: 15,
    accuracy: 90,
    pp: 20,
}];
