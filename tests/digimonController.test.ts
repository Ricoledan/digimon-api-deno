import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { getAll } from "../src/controllers/digimon.ts";
import { Digimon } from "../src/types.ts";

const allDigimon: Digimon = {
  type: "Vaccine",
  level: "III",
  name: "Agumon",
  attribute: "vaccine",
  description: null,
  artwork: "https://humulos.com/digimon/images/art/dm20/agu.jpg",
  abilities: [{ ability: "test1" }, { ability: "test2" }],
};

Deno.test("get all digimon", () => {
  const results = getAll();
  assertEquals(results, {
    message: "GET all digimon",
  });
});
