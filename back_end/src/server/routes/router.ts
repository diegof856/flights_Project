import { Router } from "express";
import { flightController } from "../../infra/container";

const router = Router();
router.get("/flights/total",flightController.getCalculateBalance)
router.get("/flights/:id",flightController.getById)
router.get("/flights",flightController.getAll)


export{router}