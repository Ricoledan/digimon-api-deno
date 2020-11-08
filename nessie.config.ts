import {
  ClientOptions,
  ClientPostgreSQL,
} from "https://deno.land/x/nessie/mod.ts";
import type { ConnectionOptions } from "https://deno.land/x/postgres@v0.4.5/connection_params.ts";
import { config } from "./src/deps.ts";

const env = config();

const clientConfig: ClientOptions = {
  migrationFolder: "./database/migrations",
  seedFolder: "./database/seeds",
  experimental: true,
};

const connectionConfig: ConnectionOptions = {
  database: env.DATABASE_NAME,
  hostname: env.DATABASE_HOST,
  port: Number(env.DATABASE_PORT),
  user: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
};

export default {
  client: new ClientPostgreSQL(clientConfig, connectionConfig),
};
