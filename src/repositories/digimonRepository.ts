import client from "../../database/database.ts";
import type { Digimon } from "../types.ts";

const now = new Date()

class DigimonRepository {
  create(digimon: Digimon) {
    return client.query(
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
  selectAll() {
    return client.query("SELECT * FROM digimon ORDER BY id");
  }
  selectByName(name: string) {
    return client.query(`SELECT * FROM digimon WHERE name == $1`, name);
  }
  update(name: string, digimon: Digimon) {
    const getDigimon = this.selectByName(name);
    const updateQuery = client.query(
      `UPDATE digimon SET name = $1, level = $2, type = $3, attribute = $4, field = $5, group = $6, abilities = $7, profile = $8, profile_url $9 WHERE name = $1`,
    );
    return client.query(
      updateQuery,
      digimon.name !== undefined ? digimon.name : getDigimon.name,
      digimon.level !== undefined ? digimon.level : getDigimon.level,
      digimon.type !== undefined ? digimon.type : getDigimon.type,
      digimon.attribute !== undefined
        ? digimon.attribute
        : getDigimon.attribute,
      digimon.field !== undefined ? digimon.field : getDigimon.field,
      digimon.group !== undefined ? digimon.group : getDigimon.group,
      digimon.abilities !== undefined ? digimon.abilities
      : getDigimon.abilities,
      digimon.profile !== undefined ? digimon.profile : getDigimon.profile,
      digimon.profile_img !== undefined ? digimon.profile_img
        : getDigimon.profile_img,
    );
  }
  delete(name: string, digimon: Digimon) {
    const getDigimon = this.selectByName(name);
    const deleteQuery = client.query(
      `UPDATE digimon SET deleted_at = $1`,
      now,
    );
  }
}
