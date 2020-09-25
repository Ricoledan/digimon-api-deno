import { Application } from 'https://deno.land/x/oak/mod.ts'
import { config } from 'https://deno.land/x/dotenv/mod.ts'
import router from './routes.ts'

const env = config()
const HOST = env.HOST || '127.0.0.1'
const PORT = env.PORT || 3030

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`デジタルモンスター ${HOST}:${PORT} 🦕`)

await app.listen(`${HOST}:${PORT}`)
