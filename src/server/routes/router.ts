import { Router } from "express";
import{StatusCodes} from 'http-status-codes';
const router = Router();

router.get("/flights",(_,res)=>{
    return res.status(StatusCodes.OK).json({"Diego":"oi"})
})
export{router}