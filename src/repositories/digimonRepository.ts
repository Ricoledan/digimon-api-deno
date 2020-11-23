import client from "../../src/helpers/dbConfig.ts";
import type { Profile, ProfileSchema } from "../types.ts";
import { time } from "../deps.ts";

const now = time().tz("America/New_york").t.toISOString();

class DigimonRepository {
  async selectAllProfiles(): Promise<ProfileSchema[]> {
    const db = client.database("digimon");
    const allProfiles = await db.collection("profile").find(
      { "timestamp.deleted_at": { $eq: null } },
    );

    return allProfiles;
  }

  async selectProfileByName(name: string): Promise<ProfileSchema> {
    const db = client.database("digimon");
    const oneProfile = await db.collection("profile").findOne({ "name": name });

    return oneProfile;
  }

  async create(profile: Profile): Promise<string> {
    const db = client.database("digimon");
    const createQuery: ProfileSchema = {
      __v: 0,
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
        created_at: now,
        updated_at: null,
        deleted_at: null,
      },
    };
    await db.collection("profile").insertOne(createQuery) as ProfileSchema;

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
