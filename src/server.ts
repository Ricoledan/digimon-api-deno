import { Application, config, flags, log } from "./deps.ts";
import router from "./routes.ts";

const env = config();
const { args } = Deno;
const port = flags.parse(args).port ? Number(flags.parse(args).port) : 3030;

const app = new Application();

await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("INFO"),
  },
  loggers: {
    default: {
      level: "INFO",
      handlers: ["console"],
    },
  },
});

app.addEventListener("error", (event: any) => {
  log.error(event.error);
});

app.use(async (ctx: any, next: any) => {
  try {
    await next();
  } catch (error) {
    log.error(error);
    ctx.response.body = "Internal Server Error";
    throw error;
  }
});

app.use(async (ctx: any, next: any) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  log.info(`${ctx.request.method} ${ctx.request.url} - response-time: ${rt}`);
});

app.use(async (ctx: any, next: any) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

app.use(async (ctx: any, next: any) => {
  ctx.response.headers.set("Access-Control-Allow-Origin", "*");
  ctx.response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE",
  );
  ctx.response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  await next();
});

app.use(router.routes());
app.use(router.allowedMethods());

if (import.meta.main) {
  log.info(`デジタルモンスター ${port} 🦕`);
  await app.listen({ port: port });
}
