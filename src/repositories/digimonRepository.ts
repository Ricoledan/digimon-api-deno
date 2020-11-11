import client from "../../src/helpers/mongoConfig.ts";
import type { DigimonProfile } from "../types.ts";
const now = new Date();

class DigimonRepository {
  async selectAll(): Promise<any> {
    return "selectAll";
  }

  async selectByName(name: string): Promise<any> {
    return "selectByName";
  }

  async create(digimon: DigimonProfile): Promise<any> {
    return "create";
  }

  async update(digimon: DigimonProfile): Promise<any> {
    return "update";
  }

  async delete(name: string): Promise<any> {
    return "delete";
  }
}

export default new DigimonRepository();
