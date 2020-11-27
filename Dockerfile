FROM frolvlad/alpine-glibc:alpine-3.11_glibc-2.31

ENV DENO_VERSION=1.1.1

RUN apk add --virtual .download --no-cache curl \
    && curl -fsSL https://github.com/denoland/deno/releases/download/v${DENO_VERSION}/deno-x86_64-unknown-linux-gnu.zip \
    --output deno.zip \
    && unzip deno.zip \
    && rm deno.zip \
    && chmod 777 deno \
    && mv deno /bin/deno \
    && apk del .download

RUN addgroup -g 1993 -S deno \
    && adduser -u 1993 -S deno -G deno \
    && mkdir /deno-dir/ \
    && chown deno:deno /deno-dir/

ENV DENO_DIR /deno-dir/
ENV APP_DIR /app

WORKDIR ${APP_DIR}
COPY src .
RUN deno install --allow-plugin --unstable src/server.ts

ENTRYPOINT ["deno"]

EXPOSE 8080

CMD ["run", "--allow-net", "--allow-env", "--allow-read", "--allow-write", "--allow-plugin", "--cached-only", "--unstable", "src/server.ts"]