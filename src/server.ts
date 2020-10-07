import { Application, config, parse } from "./deps.ts";
import router from "./routes.ts";

const env = config();
const { args } = Deno;
const host = "127.0.0.1";
const port = parse(args).port ? Number(parse(args).port) : 3030;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`デジタルモンスター ${host}:${port} 🦕`);

await app.listen({ port });
