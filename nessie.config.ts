import {
  ClientOptions,
  ClientPostgreSQL,
} from "https://deno.land/x/nessie/mod.ts";
import { config } from "./src/deps.ts";

const env = config();

const clientOptions: ClientOptions = {
  migrationFolder: "./database/migrations",
  seedFolder: "./database/seeds",
  experimental: true,
};

const clientPg = new ClientPostgreSQL(clientOptions, {
  user: env.DATABASE_USER,
  database: env.DATABASE_NAME,
  hostname: env.DATABASE_HOST,
  password: env.DATABASE_PASSWORD,
  port: Number(env.DATABASE_PORT),
});

const dbConfig = {
  client: clientPg,
  exposeQueryBuilder: false,
};

export default dbConfig;
