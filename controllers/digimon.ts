// import type { Digimon } from '../src/types.ts'
import { log } from '../src/deps.ts'

const getAllDigimon = () => {
  log.info("GET all digimon");
};
const getDigimon = () => {
  log.info("GET one digimon");
};
const addDigimon = () => {
  log.info("ADD one digimon");
};
const updateDigimon = () => {
  log.info("UPDATE an existing digimon");
};
const deleteDigimon = () => {
  log.info("DELETE a digimon");
};

export { addDigimon, deleteDigimon, getAllDigimon, getDigimon, updateDigimon };
