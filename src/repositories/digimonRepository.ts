import client from "../../database/database.ts";
import type { Digimon } from "../types.ts";

const now = new Date();

class DigimonRepository {
  async selectAll(): Promise<any> {
    return await client.query("SELECT * FROM digimon ORDER BY id");
  }

  async selectByName(name: string): Promise<any> {
    return await client.query(`SELECT * FROM digimon WHERE name == $1`, name);
  }

  async create(digimon: Digimon): Promise<any> {
    return await client.query(``);
  }

  async update(name: string, digimon: Digimon): Promise<any> {
    return await client.query(``);
  }

  async delete(name: string, digimon: Digimon) {
    return await client.query(``);
  }
}

export default new DigimonRepository();
