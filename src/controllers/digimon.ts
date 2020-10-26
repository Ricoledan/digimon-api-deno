import { log } from "../deps.ts";
import type { Digimon } from "../types.ts";

export function getAll(): Digimon[] {
  log.info("GET all digimon");
  return [{
    type: "reptile",
    level: "child",
    name: "agumon",
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
      profile_img: "https://digimon.net/cimages/digimon/agumon.jpg",
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
}
export function getSingle(name: string) {
  log.info(`GET one ${name}`);
  return { message: `GET one ${name}` };
}
export function addSingle(name: string) {
  log.info(`ADD one ${name}`);
  return { message: `ADD one ${name}` };
}
export function updateSingle(name: string) {
  log.info(`UPDATE an existing ${name}`);
  return { message: `UPDATE an existing ${name}` };
}
export function deleteSingle(name: string) {
  log.info(`DELETE a ${name}`);
  return { message: `DELETE a ${name}` };
}
