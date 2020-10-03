import { desc, run, task, sh } from 'https://deno.land/x/drake@v1.2.6/mod.ts'

desc('Run Deno Server')
task('run', [], async function () {
  await sh('denon run --allow-net --allow-env --allow-read server.ts')
})

desc('Lock Deno Dependencies')
task('lock', [], async function () {
  await sh('deno cache --lock=lock.json --lock-write deps.ts')
})

run()
