import { Router } from "./deps.ts";
import DigimonController from "./controllers/digimonController.ts";

const router = new Router();

router
  .get("/", DigimonController.root)
  .get("/digimon", DigimonController.getAllDigimon)
  .get("/digimon/:name", DigimonController.getDigimonByName)
  .post("/digimon", DigimonController.createDigimon);
// .put("/digimon/:name", DigimonController.updateDigimon)
// .delete("/digimon/:name", DigimonController.deleteDigimon);

export default router;
