export interface Digimon {
  name: string;
  level: Level;
  type: Type;
  attribute: Attribute;
  field?: Field[];
  abilities: Abilities[];
  profile: string | null;
  artwork: string;
}

type Level =
  | "baby I"
  | "baby II"
  | "child"
  | "adult"
  | "perfect"
  | "ultimate"
  | "armor"
  | "hybrid"
  | "unknown";

type Type =
  | "9000"
  | "aerial assault"
  | "alien"
  | "amphibian"
  | "ancient"
  | "ancient aquatic beast man"
  | "ancient beast"
  | "ancient bird"
  | "ancient bird man"
  | "ancient crustacean"
  | "ancient dragon"
  | "ancient dragon man"
  | "ancient fish"
  | "ancient holy knight"
  | "ancient insect"
  | "ancient mutant"
  | "ancient mythical beast"
  | "ancient ore"
  | "ancient plant"
  | "angel"
  | "ankylosaur"
  | "aquatic"
  | "aquatic beast man"
  | "aquatic mammal"
  | "archangel"
  | "armed reconnaissance"
  | "armor"
  | "artificial fallen angel"
  | "avatar"
  | "baby dragon"
  | "base defense"
  | "beast"
  | "beast dragon"
  | "beast knight"
  | "beast man"
  | "bewitching beast"
  | "bewitching bird"
  | "bird"
  | "bird dragon"
  | "bird man"
  | "braun"
  | "bulb"
  | "card"
  | "ceratopsian"
  | "cherub"
  | "chick"
  | "commander"
  | "composite"
  | "crustacean"
  | "cyborg"
  | "dark dragon"
  | "dark knight"
  | "demon beast"
  | "demon dragon"
  | "demon god"
  | "demon lord"
  | "demon man"
  | "devil"
  | "dinosaur"
  | "dominion"
  | "dragon"
  | "dragon man"
  | "dragon warrior"
  | "earth dragon"
  | "enhancement"
  | "espionage"
  | "evil dragon"
  | "fairy"
  | "fallen angel"
  | "flame"
  | "flame dragon"
  | "food"
  | "galaxy"
  | "ghost"
  | "giant bird"
  | "god beast"
  | "god man"
  | "grappling"
  | "ground assault"
  | "holy beast"
  | "holy bird"
  | "holy dragon"
  | "holy knight"
  | "holy sword"
  | "hybrid"
  | "ice-snow"
  | "information gathering"
  | "insect"
  | "insectivorious plant"
  | "invade"
  | "larva"
  | "lcd"
  | "lesser"
  | "light dragon"
  | "machine"
  | "machine dragon"
  | "magic warrior"
  | "magic knight"
  | "major"
  | "mammal"
  | "marine animal"
  | "marine man"
  | "mine"
  | "mineral"
  | "minor"
  | "mollusk"
  | "monk"
  | "mother ship"
  | "musical instrument"
  | "mutant"
  | "mythical beast"
  | "mythical dragon"
  | "no data"
  | "ocean dragon"
  | "oni"
  | "ophan"
  | "ore"
  | "parasite"
  | "perfect"
  | "plant"
  | "plesiosaur"
  | "power"
  | "pterosaur"
  | "puppet"
  | "rare animal"
  | "reptile"
  | "reptile man"
  | "rock"
  | "rock dragon"
  | "seed"
  | "seraph"
  | "skeleton"
  | "sky dragon"
  | "slime"
  | "small angel"
  | "small bird"
  | "small devil"
  | "small dragon"
  | "smoke"
  | "spirit"
  | "stegosaur"
  | "super major"
  | "synthetic beast"
  | "tathāgata"
  | "toy"
  | "tropical fish"
  | "unbalanced"
  | "undead"
  | "unique"
  | "unanalyzable"
  | "unknown"
  | "virtue"
  | "warrior"
  | "weapon"
  | "wicked god";

type Attribute = "vaccine" | "data" | "virus" | "free" | "variable" | "unknown";

type Field =
  | "nature spirits"
  | "deep savers"
  | "nightmare soldiers"
  | "wind guardians"
  | "metal empire"
  | "unknown"
  | "dark area"
  | "virus busters"
  | "dragon's roar"
  | "jungle troopers";

type Abilities = {
  name: string;
  description: string | null;
};

type Assets = {
  profile_img: string;
};
