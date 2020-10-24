import client from "../../database/database.ts";
import { moment } from "../deps.ts";
import type { Digimon } from "../types.ts";

class DigimonRepo {
  create(digimon: Digimon) {
    return client.query(
      `INSERT INTO digimon (type, level, name, description, image_url, added) VALUES ($1, $2, $3, $4, $5, $6)`,
      digimon.type,
      digimon.level,
      digimon.name,
      digimon.description,
      digimon.image_url,
      moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
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
      `UPDATE digimon SET type = $1, level = $2, name = $3, description = $4, image_url = $5 WHERE name = $3`,
    );
    return client.query(
      updateQuery,
      digimon.type !== undefined ? digimon.type : getDigimon.type,
      digimon.level !== undefined ? digimon.level : getDigimon.level,
      digimon.name !== undefined ? digimon.name : getDigimon.name,
      digimon.description !== undefined
        ? digimon.description
        : getDigimon.description,
      digimon.image_url !== undefined ? digimon.image_url
      : getDigimon.image_url,
    );
  }
}
