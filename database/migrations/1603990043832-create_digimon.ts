import { AbstractMigration, Info } from "https://deno.land/x/nessie/mod.ts";
// import Dex from "https://deno.land/x/dex/mod.ts";

export default class ExperimentalMigration extends AbstractMigration {
  async up(info: Info): Promise<void> {
    this.client.query(
      "CREATE TABLE IF NOT EXISTS digimon (id SERIAL PRIMARY KEY, name VARCHAR(50) NOT NULL, level VARCHAR(10) NOT NULL, type VARCHAR(50) NOT NULL, attribute VARCHAR(8) NOT NULL, field VARCHAR(100), group_theme VARCHAR(25), abilities JSONB, profile VARCHAR(255), profile_img VARCHAR(100), created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), updated_at TIMESTAMPTZ, deleted_at VARCHAR(100))",
    );
  }

  async down(info: Info): Promise<void> {
    this.client.query("DROP TABLE digimon");
  }
}
