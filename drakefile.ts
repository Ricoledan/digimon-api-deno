import { desc, run, sh, task } from "./src/deps.ts";

desc("Run Deno Dev Server");
task("dev", [], async function () {
  await sh("denon run --allow-net --allow-env --allow-read src/server.ts");
});

desc("Format Deno Project");
task("fmt", [], async function () {
  await sh("deno fmt");
});

desc("Test Deno Project");
task("test", [], async function () {
  await sh("deno test");
});

desc("Lock Deno Dependencies");
task("lock", [], async function () {
  await sh("deno cache --lock=lock.json --lock-write src/deps.ts");
});

desc("Build Postgres Development Database Container");
task("db-create", [], async function () {
  await sh(
    "docker-compose up",
  );
});

desc("Migrate Postgres Development Data");
task("db-migrate", [], async function () {
  await sh(
    "deno run --allow-net --allow-read https://deno.land/x/nessie/cli.ts migrate -c ./nessie.config.ts -d",
  );
});

desc("Seed Postgres Development Data");
task("db-seed", [], async function () {
  await sh(
    "deno run --allow-net --allow-read https://deno.land/x/nessie/cli.ts seed database/seeds/create_digimon.ts -d",
  );
});

desc("Rollback Postgres Development Data");
task("db-rollback", [], async function () {
  await sh(
    "deno run --allow-net --allow-read https://deno.land/x/nessie/cli.ts rollback all",
  );
});

desc("Run Heroku Logs");
task("h-logs", [], async function () {
  await sh("heroku logs --tail --app digital-monster-api");
});

desc("Test Heroku Procfile");
task("h-local", [], async function () {
  await sh("heroku local web");
});

run();
