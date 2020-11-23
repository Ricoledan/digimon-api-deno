import client from "../../src/helpers/dbConfig.ts";
import type { Profile, ProfileSchema } from "../types.ts";
import { log, time } from "../deps.ts";

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
      field: profile.field ? profile.field : null,
      group: profile.group ? profile.group : null,
      technique: profile.technique,
      artwork: profile.artwork,
      profile: profile.profile,
      timestamp: {
        created_at: now,
        updated_at: null,
        deleted_at: null,
      },
    };

    try {
      await db.collection("profile").insertOne(createQuery);
    } catch (error) {
      log.error(error);
    }

    return "digimon profile successfully added";
  }

  async update(profileData: Profile): Promise<string> {
    const db = client.database("digimon");

    try {
      await db.collection("profile").updateOne(
        { "name": profileData.name },
        {
          $set: {
            level: profileData.level,
            type: profileData.type,
            attribute: profileData.attribute,
            field: profileData.field ? profileData.field : null,
            group: profileData.group ? profileData.group : null,
            technique: profileData.technique,
            artwork: profileData.artwork,
            profile: profileData.profile,
          },
        },
      );
    } catch (error) {
      log.error(error);
    }

    return "digimon profile successfully updated";
  }

  // async delete(name: string): Promise<any> {
  //   return "delete";
  // }
}

export default new DigimonRepository();
