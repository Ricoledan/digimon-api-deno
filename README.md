# deno-digimon-api

## Run Server

```CLI
deno run -A drakefile.ts run
```

## Run Development Environment

```CLI
deno run -A drakefile.ts run-dev
```

## Heroku Logs

```CLI
deno run -A drakefile.ts h-logs
```

## Heroku Procfile

```CLI
deno run -A drakefile.ts h-local
```

## Lock Dependencies

```CLI
deno run -A drakefile.ts lock
```

## Routes

```REST
GET      /api/v1/digimon
GET      /api/v1/digimon/:id
POST     /api/v1/digimon
PUT      /api/v1/digimon/:id
DELETE   /api/v1/digimon/:id
```
