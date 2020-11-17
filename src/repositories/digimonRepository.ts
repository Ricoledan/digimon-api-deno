import client from "../../src/helpers/dbConfig.ts";
import type { profile } from "../types.ts";

const now = new Date();

class DigimonRepository {
  async selectAll(): Promise<any> {
    const db = client.database("digimon");
    const profile = db.collection("profile").find();

    return await profile;
  }

  async selectByName(name: string): Promise<any> {
    return "selectByName";
  }

  async create(digimon: profile): Promise<any> {
    return "create";
  }

  async update(digimon: profile): Promise<any> {
    return "update";
  }

  async delete(name: string): Promise<any> {
    return "delete";
  }
}

export default new DigimonRepository();
