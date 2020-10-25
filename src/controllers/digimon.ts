import { log } from "../deps.ts";
import type { Digimon } from "../types.ts";

export function getAll(): Digimon[] {
  log.info("GET all digimon");
  return [{
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
