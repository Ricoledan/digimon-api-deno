import client from "../../src/pgConfig.ts";
import type { DigimonProfile } from "../types.ts"
const now = new Date();

class DigimonRepository {
  async selectAll(): Promise<any> {
    return await client.query("SELECT * FROM digimon ORDER BY id");
  }

  async selectByName(name: string): Promise<any> {
    return await client.query(`SELECT * FROM digimon WHERE name == $1`, name);
  }

  async create(digimon: DigimonProfile): Promise<any> {
    return await client.query(
      `INSERT INTO digimon (name, level, type, attribute, field, group, abilities, profile, profile_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      digimon.name,
      digimon.level,
      digimon.type,
      digimon.attribute,
      digimon.field,
      digimon.group,
      digimon.abilities,
      digimon.profile,
      digimon.profile_img,
    );
  }

  async update(digimon: DigimonProfile): Promise<any> {
    return await client.query(
      `UPDATE digimon SET level = $1, type = $2, attribute = $3, field = $4, group = $5, abilities = $6, profile = $7, profile_url $8 WHERE name = $9`,
      digimon.level,
      digimon.type,
      digimon.attribute,
      digimon.field,
      digimon.group,
      digimon.abilities,
      digimon.profile,
      digimon.profile_img,
      digimon.name,
    );
  }

  async delete(name: string): Promise<any> {
    return await client.query(`UPDATE digimon SET deleted_at = $1`, now);
  }
}

export default new DigimonRepository();
