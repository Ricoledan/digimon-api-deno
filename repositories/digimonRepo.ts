import client from '../database/database.js'
import { Digimon } from '../types'
import { moment } from 'https://deno.land/x/moment/moment.ts'

class DigimonRepo {
  create(digimon: Digimon) {
    return client.query(
      `INSERT INTO digimon (type, level, name, description, image_url, added) VALUES ($1, $2, $3, $4, $5, $6)`,
      digimon.type,
      digimon.level,
      digimon.name,
      digimon.description,
      digimon.image_url,
      moment().format('dddd, MMMM Do YYYY, h:mm:ss a')
    )
  }
  selectAll() {
    return client.query('SELECT * FROM digimon ORDER BY id')
  }
  selectById(id) {
    return client.query(`SELECT * FROM digimon WHERE id == $1`, id)
  }
  update(id, digimon) {
    return client.query(``)
  }
}
