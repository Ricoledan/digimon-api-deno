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

desc("Build Postgres Development Database");
task("docker", [], async function () {
  await sh(
    "docker run --name digimonpgsql -e POSTGRES_USER=digi_admin_user -e POSTGRES_PASSWORD=admin_password -p 5432:5432 -v /docker/data:/var/lib/postgresql/data -d postgres",
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
