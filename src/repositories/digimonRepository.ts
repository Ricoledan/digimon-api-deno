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

  async create(profile: Profile): Promise<string> {
    const db = client.database("digimon");
    await db.collection("profile").insertOne({
      __v: 0, // hardcoded 0 for now due to this being a pre-production schema build.
      name: profile.name,
      level: profile.level,
      type: profile.type,
      attribute: profile.attribute,
      field: profile.field,
      group: profile.group,
      technique: profile.technique,
      artwork: profile.artwork,
      profile: profile.profile,
      timestamp: {
        created_at: "", // TODO: create timestamp
        updated_at: null,
        deleted_at: null, // update query to exclude documents that are not null
      },
    });

    return "digimon profile successfully added to database";
  }

  // async update(profile: Profile): Promise<any> {
  //   return "update";
  // }

  // async delete(name: string): Promise<any> {
  //   return "delete";
  // }
}

export default new DigimonRepository();
