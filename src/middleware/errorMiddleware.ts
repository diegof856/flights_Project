import { Request, Response, NextFunction } from "express";

import { StatusCodes } from "http-status-codes";
import { IError,createError } from "./IError";


export const validationPagination = (req: Request, res: Response, next: NextFunction) => {
    
 const { page, limit } = req.query;

    if (page && isNaN(Number(page))) {
        return res.status(StatusCodes.BAD_REQUEST).json(createError("O parâmetro 'page' deve ser um número válido"));
    }
if (limit && isNaN(Number(limit))) {
        return res.status(StatusCodes.BAD_REQUEST).json( createError("O parâmetro 'limit' deve ser um número."));
    }
 next();
}