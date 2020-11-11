import { config, MongoClient } from "../deps.ts";
import type { DigimonSchema } from "../types.ts";

const env = config();

class Database {
  client: any;
  constructor() {
    this.connect();
  }

  async connect() {
    this.client = new MongoClient();
    this.client.connectWithUri(
      `mongodb+srv://${env.DATABASE_USER}:${env.DATABASE_PASSWORD}@yggdrasil.ug5tw.mongodb.net?retryWrites=true&w=majority`,
    );
    const db = this.client.database("digimon-profile");
    const digimon = db.collection("digimon");
  }
}

export default new Database().client;
