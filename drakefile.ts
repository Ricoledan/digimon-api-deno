import { desc, run, sh, task } from "https://deno.land/x/drake@v1.2.6/mod.ts";

desc("Run Deno Server");
task("run", [], async function () {
  await sh(
    "deno run --allow-net=:${PORT} --allow-env --allow-read --cached-only src/server.ts --port=${PORT}",
  );
});

desc("Run Deno Dev Server");
task("run-dev", [], async function () {
  await sh("denon run --allow-net --allow-env --allow-read src/server.ts");
});

// desc("Test Deno Project");
// task("test", [], async function () {
//   await sh("");
// });

desc("Lock Deno Dependencies");
task("lock", [], async function () {
  await sh("deno cache --lock=lock.json --lock-write src/deps.ts");
});

run();
