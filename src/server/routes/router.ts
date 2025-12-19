import { Router } from "express";
import{StatusCodes} from 'http-status-codes';
import { flightController } from "../../infra/container";
import { validationPagination } from "../../middleware/errorMiddleware";

const router = Router();

router.get("/flights",validationPagination,flightController.getAll)
router.get("/flight:id",(_,res)=>{
    return res.status(StatusCodes.OK).json({"Diego":"oi"})
})
export{router}