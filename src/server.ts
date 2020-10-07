import { Application, config, parse } from "./deps.ts";
import router from "./routes.ts";

const env = config();
const { args } = Deno;
const port = parse(args).port ? Number(parse(args).port) : 3030;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`デジタルモンスター ${port} 🦕`);

await app.listen({ port });
