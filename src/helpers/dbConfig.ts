import { config, MongoClient } from "../deps.ts";

const env = config();

class Database {
  client: any;

  constructor() {
    this.connect();
  }

  connect() {
    this.client = new MongoClient();
    this.client.connectWithUri(
      `mongodb+srv://${env.DATABASE_USER}:${env.DATABASE_PASSWORD}@yggdrasil.ug5tw.mongodb.net/?retryWrites=true&w=majority`,
    );
  }
}

export default new Database().client;
