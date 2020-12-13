import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { allProfiles } from "../fixtures/digimonFixtures.ts";
import digimonRepository from "../../src/repositories/digimonRepository.ts";

Deno.test("get all digimon profiles with appropriate schema", async () => {
  const results = await digimonRepository.selectAllProfiles();
  assertEquals(results, allProfiles);
});
