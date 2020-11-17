import client from "../../src/helpers/dbConfig.ts";
import type { Profile, ProfileSchema } from "../types.ts";

class DigimonRepository {
  async selectAllProfiles(): Promise<any> {
    const db = client.database("digimon");
    const allProfiles = await db.collection("profile").find();

    return allProfiles as ProfileSchema[];
  }

  async selectProfileByName(name: string): Promise<any> {
    const db = client.database("digimon");
    const oneProfile = await db.collection("profile").findOne({ "name": name });

    return oneProfile as ProfileSchema;
  }

  async create(digimon: Profile): Promise<any> {
    return "create";
  }

  async update(digimon: Profile): Promise<any> {
    return "update";
  }

  async delete(name: string): Promise<any> {
    return "delete";
  }
}

export default new DigimonRepository();
