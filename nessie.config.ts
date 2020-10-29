import {
  ClientOptions,
  ClientPostgreSQL,
} from "https://deno.land/x/nessie/mod.ts";

const clientOptions: ClientOptions = {
  migrationFolder: "./database/migrations",
  seedFolder: "./database/seeds",
  experimental: true,
};

const clientPg = new ClientPostgreSQL(clientOptions, {
  database: "postgres",
  hostname: "localhost",
  port: 32769,
  user: "docker",
  password: "docker",
});

const config = {
  client: clientPg,
  // Defaults to false, if you want the query builder exposed in migration files, set this to true.
  exposeQueryBuilder: false,
};

export default config;
