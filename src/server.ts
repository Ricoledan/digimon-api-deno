import { Application, config, flags, log } from "./deps.ts";
import router from "./routes.ts";

const env = config();
const { args } = Deno;
const port = flags.parse(args).port ? Number(flags.parse(args).port) : 3030;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

log.info(`デジタルモンスター ${port} 🦕`);

await app.listen({ port: port });
