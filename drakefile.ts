import { desc, run, sh, task } from "./src/deps.ts";

desc("Run Deno Dev Server");
task("dev", [], async function () {
  await sh(
    "denon run --allow-net --allow-env --allow-read --allow-write --allow-plugin --unstable --cached-only src/server.ts",
  );
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
  await sh("deno cache --lock=lock.json --lock-write --unstable src/deps.ts");
});

desc("Build Docker Image");
task("dbuild", [], async function () {
  await sh("docker build -t ricoledan/digimon-api .");
});

desc("Run Docker Container");
task("drun", [], async function () {
  await sh("docker run -it -p 3030:3030 ricoledan/digimon-api");
});

desc("Push Docker Repository to Registry");
task("dpush", [], async function () {
  await sh("docker push ricoledan/digimon-api:latest");
});

run();
