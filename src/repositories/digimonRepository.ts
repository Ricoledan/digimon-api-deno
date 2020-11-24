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

  // deno-lint-ignore no-explicit-any
  async create(profile: Profile): Promise<any> {
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
      const create = await db.collection("profile").insertOne(createQuery);

      return create;
    } catch (error) {
      log.error(error);
    }
  }

  // deno-lint-ignore no-explicit-any
  async update(profile: Profile): Promise<any> {
    const db = client.database("digimon");
    const documentObj = await db.collection("profile").findOne(
      { "name": profile.name },
    );
    const getCreatedTimestamp = documentObj.timestamp.created_at;
    const getDeletedTimestamp = documentObj.timestamp.deleted_at;

    try {
      const update = await db.collection("profile").updateOne(
        { "name": profile.name },
        {
          $set: {
            level: profile.level,
            type: profile.type,
            attribute: profile.attribute,
            field: profile.field ? profile.field : null,
            group: profile.group ? profile.group : null,
            technique: profile.technique,
            artwork: profile.artwork,
            profile: profile.profile,
            timestamp: {
              created_at: getCreatedTimestamp,
              updated_at: now,
              deleted_at: getDeletedTimestamp,
            },
          },
        },
      );

      return update;
    } catch (error) {
      log.error(error);
    }
  }

  // deno-lint-ignore no-explicit-any
  async delete(name: string): Promise<any> {
    const db = client.database("digimon");
    const documentObj = await db.collection("profile").findOne(
      { "name": name },
    );
    const getCreatedTimestamp = documentObj.timestamp.created_at;

    try {
      const deleteDocument = await db.collection("profile").updateOne(
        { "name": name },
        {
          $set: {
            timestamp: {
              created_at: getCreatedTimestamp,
              deleted_at: now,
              updated_at: now,
            },
          },
        },
      );

      return deleteDocument;
    } catch (error) {
      log.error(error);
    }
  }
}

export default new DigimonRepository();
