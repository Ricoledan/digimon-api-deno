FROM hayd/alpine-deno:1.5.2

EXPOSE 3030

WORKDIR /app

COPY . .

USER deno

CMD ["run", "--allow-net", "--allow-env", "--allow-read", "--allow-write", "--allow-plugin", "--unstable", "src/server.ts"]