import { Digimon } from "../../src/types.ts";

const allDigimon: Digimon[] = [{
  name: "Agumon",
  level: "child",
  type: "reptile",
  attribute: "vaccine",
  field: [
    "Metal Empire",
    "Nature Spirits",
    "Virus Busters",
    "Unknown",
  ],
  abilities: [
    {
      name: "Baby Flame",
      description: "Releases a stream of fire from its mouth",
    },
    {
      name: "Baby Burner",
      description:
        "Accumulates Baby Flame in its mouth and then spits it out all at once as a much more powerful blast.",
    },
  ],
  profile:
    "A Reptile Digimon which has grown and become able to walk on two legs. Its strength is weak as it is still in the process of growing, but it has a fearless and rather ferocious personality. It spits a fiery breath from its mouth to attack the opponent (Baby Flame).",

  profile_img: "https://digimon.net/cimages/digimon/agumon.jpg",
}];

export { allDigimon };