import { log } from "../deps.ts";
// import type { Digimon } from '../src/types.ts'

export function getAll() {
  log.info("GET all digimon");
  return [{}];
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
