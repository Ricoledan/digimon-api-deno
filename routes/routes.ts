import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getAllDigimon, getDigimon, addDigimon, updateDigimon, deleteDigimon } from './controllers/digimon.ts'

const router = new Router()

router.get('/api/v1/digimon', getAllDigimon)
      .get('/api/v1/digimon/:id', getDigimon)
      .post('/api/v1/digimon', addDigimon)
      .put('/api/v1/digimon/:id', updateDigimon)
      .delete('/api/v1/digimon/:id', deleteDigimon)

export default router