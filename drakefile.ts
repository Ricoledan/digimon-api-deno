import { desc, run, task, sh } from 'https://deno.land/x/drake@v1.2.6/mod.ts'

desc('Run Deno Server')
task('run', [], async function () {
  console.log('Runnning Application')
  await sh('denon run --allow-net --allow-env --allow-read server.ts')
})

run()
