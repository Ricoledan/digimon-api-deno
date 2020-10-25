/*
Documentation
TODO: add to readme
[type](https://wikimon.net/Type) - indicates what sort of category a Digimon's specific species belongs to.
[attribute](https://wikimon.net/Attribute) - refers to type of computer file a Digimon represents. 
[field](https://wikimon.net/Field) - overall branching group of Digimon that each one belongs to.
*/

// Interfaces
export interface Digimon {
  name: string;
  level: Level;
  type: string;
  attribute: Attribute;
  field?: Field[];
  abilities: Abilities[];
  profile: string | null;
  artwork: string;
}

// Types
type Level =
  | "I"
  | "II"
  | "III"
  | "IV"
  | "V"
  | "VI"
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
  | "";

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
