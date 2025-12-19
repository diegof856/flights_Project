import { Router } from "express";
import { flightController } from "../../infra/container";

const router = Router();

router.get("/flights",flightController.getAll)
router.get("/flights/:id",flightController.getById)
router.get("/flights/total-balance",flightController.getCalculateBalance)
export{router}