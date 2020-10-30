import { Client, config, log } from "../src/deps.ts";

const env = config();

class Database {
  client: any;
  constructor() {
    this.connect();
  }

  async connect() {
    this.client = new Client({
      user: env.DATABASE_USER,
      database: env.DATABASE_NAME,
      hostname: env.DATABASE_HOST,
      password: env.DATABASE_PASSWORD,
      port: Number(env.DATABASE_PORT),
    });

    await this.client.connect();
    const result = await this.client.query("SELECT * FROM digimon;");
    log.info(result.rows);
    await this.client.end();
  }
}

export default new Database().client;
