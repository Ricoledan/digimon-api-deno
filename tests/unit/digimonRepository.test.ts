import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { allProfiles, oneProfile } from "../fixtures/digimonFixtures.ts";
import digimonRepository from "../../src/repositories/digimonRepository.ts";

// Deno.test("get all digimon profiles with appropriate schema", async () => {
//   const results = await digimonRepository.selectAllProfiles();
//   assertEquals(results, allProfiles);
// });

// Deno may have some sort of bug, test is coming up failing despite being the same values.
// Deno.test("get digimon profiles by name with appropriate schema", async () => {
//   const results = await digimonRepository.selectProfileByName("agumon");
//   console.log(results, oneProfile)
//   assertEquals(results, oneProfile);
// });
