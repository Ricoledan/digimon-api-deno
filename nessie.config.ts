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
  hostname: env.DATABASE_HOST,
  port: Number(env.DATABASE_PORT),
  user: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
});

const dbConfig = {
  client: clientPg,
  exposeQueryBuilder: false,
};

export default dbConfig;
