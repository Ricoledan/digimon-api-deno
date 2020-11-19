import client from "../../src/helpers/dbConfig.ts";
import type { Profile, ProfileSchema } from "../types.ts";

class DigimonRepository {
  async selectAllProfiles(): Promise<ProfileSchema[]> {
    const db = client.database("digimon");
    const allProfiles = await db.collection("profile").find();

    return allProfiles;
  }

  async selectProfileByName(name: string): Promise<ProfileSchema> {
    const db = client.database("digimon");
    const oneProfile = await db.collection("profile").findOne({ "name": name });

    return oneProfile;
  }

  async create(digimon: Profile): Promise<ProfileSchema> {
    const db = client.database("digimon");
    const createProfile = await db.collection("profile").insertOne({
      __v: 0, // hardcoded 0 for now due to this being a pre-production schema build.
      name: digimon.name,
      level: digimon.level,
      type: digimon.type,
      attribute: digimon.attribute,
      field: digimon.field,
      group: digimon.group,
      technique: digimon.technique,
      artwork: digimon.artwork,
      profile: digimon.profile,
      created_at: "",
      updated_at: "",
      deleted_at: "",
    });

    return createProfile;
  }

  async update(digimon: Profile): Promise<any> {
    return "update";
  }

  async delete(name: string): Promise<any> {
    return "delete";
  }
}

export default new DigimonRepository();
