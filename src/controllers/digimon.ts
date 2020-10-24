import { log } from "../deps.ts";
// import type { Digimon } from '../src/types.ts'

const getAllDigimon = () => {
  log.info("GET all digimon");
};
const getSingleDigimon = () => {
  log.info("GET one digimon");
};
const addSingleDigimon = () => {
  log.info("ADD one digimon");
};
const updateSingleDigimon = () => {
  log.info("UPDATE an existing digimon");
};
const deleteSingleDigimon = () => {
  log.info("DELETE a digimon");
};

export {
  addSingleDigimon,
  deleteSingleDigimon,
  getAllDigimon,
  getSingleDigimon,
  updateSingleDigimon,
};
