import { Router } from "./deps.ts";
import DigimonController from "./controllers/digimon.ts";

const router = new Router();

router
  .get("/", DigimonController.root)
  .get("/digimon", DigimonController.getAll)
  .get("/digimon/:name", DigimonController.getByName)
  .post("/digimon:name", DigimonController.create)
  .patch("/digimon/:name", DigimonController.update)
  .delete("/digimon/:name", DigimonController.delete);

export default router;
