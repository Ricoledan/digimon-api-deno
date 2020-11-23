import { Router } from "./deps.ts";
import DigimonController from "./controllers/digimonController.ts";

const router = new Router();

router
  .get("/", DigimonController.root)
  .get("/digimon", DigimonController.getAllProfiles)
  .get("/digimon/:name", DigimonController.getProfileByName)
  .post("/digimon", DigimonController.createProfile);
// .put("/digimon/:name", DigimonController.updateProfile)
// .delete("/digimon/:name", DigimonController.deleteProfile);

export default router;
