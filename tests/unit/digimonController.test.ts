import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { allDigimon } from "../fixtures/digimonFixtures.ts";
import { getAll } from "../../src/controllers/digimon.ts";

Deno.test("get all digimon returns all digimon with the appropriate schema", () => {
  const results = getAll();
  assertEquals(results, allDigimon);
});
