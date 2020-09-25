import { Client } from 'https://deno.land/x/postgres@v0.3.11/mod.ts'
import { config } from 'https://deno.land/x/dotenv/mod.ts'

const env = config()

class Database {
  client: any
  constructor() {
    this.connect()
  }

  async connect() {
    this.client = new Client({
      user: env.DATABASE_USER,
      database: env.DATABASE_NAME,
      host: env.DATABASE_HOST,
      password: env.DATABASE_PASSWORD,
      port: env.DATABASE_PORT,
    })

    await this.client.connect()
  }
}

export default new Database().client
