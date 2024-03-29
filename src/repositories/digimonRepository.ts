import client from "../../src/helpers/dbConfig.ts";
import type {
  CreateDocumentResponse,
  GetProfileResponse,
  ModifiedDocumentResponse,
  Profile,
  ProfileSchema,
} from "../types.ts";
import { log, time } from "../deps.ts";

const now = time().tz("America/New_york").t.toISOString();

class DigimonRepository {
  async selectAllProfiles(): Promise<GetProfileResponse[] | undefined> {
    const db = client.database("digimon");

    try {
      const allProfiles = await db.collection("profile").find(
        { "timestamp.deleted_at": { $eq: null } },
      );

      return allProfiles;
    } catch (error) {
      log.error(error);
    }
  }

  async selectProfileByName(
    name: string,
  ): Promise<GetProfileResponse | undefined> {
    const db = client.database("digimon");
    try {
      const oneProfile = await db.collection("profile").findOne(
        { "name": name },
      );

      return oneProfile;
    } catch (error) {
      log.error(error);
    }
  }

  async create(profile: Profile): Promise<CreateDocumentResponse | undefined> {
    const db = client.database("digimon");
    const createQuery: ProfileSchema = {
      __v: 0,
      name: profile.name,
      level: profile.level,
      type: profile.type,
      attribute: profile.attribute,
      field: profile.field ?? null,
      group: profile.group ?? null,
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

  async update(
    profile: Profile,
  ): Promise<ModifiedDocumentResponse | undefined> {
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
            field: profile.field ?? null,
            group: profile.group ?? null,
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

  async delete(name: string): Promise<ModifiedDocumentResponse | undefined> {
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
