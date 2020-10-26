import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { getAll } from "../src/controllers/digimon.ts";
import { Digimon } from "../src/types.ts";

const allDigimon: Digimon[] = [{
  type: "reptile",
  level: "child",
  name: "Agumon",
  attribute: "vaccine",
  profile:
    "A Reptile Digimon which has grown and become able to walk on two legs. Its strength is weak as it is still in the process of growing, but it has a fearless and rather ferocious personality. It spits a fiery breath from its mouth to attack the opponent (Baby Flame).",
  field: [
    "metal empire",
    "nature spirits",
    "virus busters",
    "unknown",
  ],
  assets: {
    profile_img: "",
  },
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
}];

Deno.test("get all digimon", () => {
  const results = getAll();
  assertEquals(results, allDigimon);
});
