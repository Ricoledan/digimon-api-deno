import { Router } from "./deps.ts";
import DigimonController from "./controllers/digimonController.ts";

const router = new Router();

router
  .get("/", DigimonController.root)
  .get("/digimon", DigimonController.getAllDigimon)
  .get("/digimon/:name", DigimonController.getDigimonByName)
  .post("/digimon:name", DigimonController.createDigimon)
  .patch("/digimon/:name", DigimonController.updateDigimon)
  .delete("/digimon/:name", DigimonController.deleteDigimon);

export default router;
