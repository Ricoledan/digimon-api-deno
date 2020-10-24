import { desc, run, sh, task } from "https://deno.land/x/drake@v1.2.6/mod.ts";

desc("Run Deno Dev Server");
task("run", [], async function () {
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

desc("Run Heroku Logs");
task("h-logs", [], async function () {
  await sh("heroku logs --tail --app digital-monster-api");
});

desc("Test Heroku Procfile");
task("h-local", [], async function () {
  await sh("heroku local web");
});

run();
