import { Router } from "./deps.ts";
import {
  addDigimon,
  deleteDigimon,
  getAllDigimon,
  getDigimon,
  updateDigimon,
} from "../controllers/digimon.ts";

const router = new Router();

router
  .get("/", ({ response }: { response: any }) => {
    response.body = {
      message: "YERR!!!",
    };
  })
  .get("/api/v1/digimon", getAllDigimon)
  .get("/api/v1/digimon/:name", getDigimon)
  .post("/api/v1/digimon", addDigimon)
  .put("/api/v1/digimon/:name", updateDigimon)
  .delete("/api/v1/digimon/:name", deleteDigimon);

export default router;
