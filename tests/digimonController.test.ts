import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { getAll } from "../src/controllers/digimon.ts";
import { Digimon } from "../src/types.ts";

// const allDigimon: Digimon = {
//   id: '1',
//   type: 'Vaccine',
//   level: 'III',
//   name: 'Agumon',
//   description: null,
//   image_url: 'https://humulos.com/digimon/images/art/dm20/agu.jpg',
// }

Deno.test("get all digimon", () => {
  const results = getAll();
  assertEquals(results, {
    message: "GET all digimon",
  });
});
