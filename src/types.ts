/*
Documentation
TODO: add to readme
[attribute](https://wikimon.net/Attribute) - refers to type of computer file a Digimon represents 
[type](https://wikimon.net/Type) - indicates what sort of category a Digimon's specific species belongs to. 

*/

// Interfaces
export interface Digimon {
  name: string;
  level: Level;
  type: string;
  attribute: Attribute;
  field?: string;
  abilities: Array<object>;
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

type Attribute = "vaccine" | "data" | "virus" | "free" | "variable" | "unknown";

type Field =
  | "Nature Spirits"
  | "Deep Savers"
  | "Nightmare Soldiers"
  | "Wind Guardians"
  | "Metal Empire"
  | "Unknown"
  | "Dark Area"
  | "Virus Busters"
  | "Dragon's Roar"
  | "Jungle Troopers";
