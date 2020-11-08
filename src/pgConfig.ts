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
    await this.client.query(`
    CREATE TABLE IF NOT EXISTS digimon (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    level VARCHAR(10) NOT NULL,
    type VARCHAR(50) NOT NULL,
    attribute VARCHAR(8) NOT NULL,
    field VARCHAR(100),
    group_theme VARCHAR(25),
    abilities JSONB,
    profile VARCHAR(255),
    profile_img VARCHAR(100),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ,
    deleted_at VARCHAR(100) 
    )`);
    await this.client.query(`INSERT INTO digimon (name, level, type, attribute, field, abilities, profile, profile_img) VALUES ('agumon', 'child', 'reptile', 'vaccine', 'Metal Empire, Nature Spirits, Virus Busters, Unknown', '{ "name": "Baby Flame", "description": "Releases a stream of fire from its mouth" }', 'A Reptile Digimon which has grown and become able to walk on two legs', 'https://digimon.net/cimages/digimon/agumon.jpg');`)

    const result = await this.client.query("SELECT * FROM digimon;");
    log.info(result.rows);
    await this.client.end();
  }
}

export default new Database().client;
