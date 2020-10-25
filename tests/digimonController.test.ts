import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { getAll } from "../src/controllers/digimon.ts";
import { Digimon } from "../src/types.ts";

const allDigimon: Digimon[] = [{
  type: "reptile",
  level: "child",
  name: "Agumon",
  attribute: "vaccine",
  profile: null,
  field: [
    "metal empire",
    "virus busters",
  ],
  artwork: "https://humulos.com/digimon/images/art/dm20/agu.jpg",
  abilities: [
    { name: "attack1", description: "lorem ipsum" },
    { name: "attack2", description: null },
  ],
}, {
  type: "reptile",
  level: "child",
  name: "Agumon",
  attribute: "vaccine",
  profile: null,
  field: [
    "metal empire",
    "virus busters",
  ],
  artwork: "https://humulos.com/digimon/images/art/dm20/agu.jpg",
  abilities: [
    { name: "attack1", description: "lorem ipsum" },
    { name: "attack2", description: null },
  ],
}];

Deno.test("get all digimon", () => {
  const results = getAll();
  assertEquals(results, allDigimon);
});
