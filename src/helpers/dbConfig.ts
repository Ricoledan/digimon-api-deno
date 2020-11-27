import { config, MongoClient } from "../deps.ts";

const env = config();

class Database {
  client: any;

  constructor() {
    this.connect();
  }

  async connect() {
    this.client = new MongoClient();
    const connectionUri = env.QOVERY_DATABASE_MY_MONGO_CONNECTION_URI ||
      `mongodb+srv://${env.DATABASE_USER}:${env.DATABASE_PASSWORD}@yggdrasil.ug5tw.mongodb.net/digimon?retryWrites=true&w=majority`;

    await this.client.connectWithUri(connectionUri);
  }
}

export default new Database().client;
