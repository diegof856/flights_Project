import e, { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import {createError } from "./IError";
import { AppError } from "../errors/AppError";


export const errorHandler= (err:Error,req: Request, res: Response,next: NextFunction) => {
    
 if (err instanceof AppError) {
    const personError =createError(err.message,err.statusCode) 
    return res.status(err.statusCode).json(personError);
    }
    const defaultError = createError("Erro interno do servidor, contacte o administrador.",StatusCodes.INTERNAL_SERVER_ERROR) 
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(defaultError);

}