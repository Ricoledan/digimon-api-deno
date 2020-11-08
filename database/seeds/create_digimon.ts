import { Seed } from "https://deno.land/x/nessie/mod.ts";

export const run: Seed = () => {
  return "INSERT INTO digimon(name, level, type, attribute, field, abilities, profile, profile_img) VALUES ('agumon', 'child', 'reptile', 'vaccine', 'Metal Empire, Nature Spirits, Virus Busters, Unknown', '{ 'name': 'Baby Flame', 'description': 'Releases a stream of fire from its mouth' }', 'A Reptile Digimon which has grown and become able to walk on two legs', 'https://digimon.net/cimages/digimon/agumon.jpg')";
};
