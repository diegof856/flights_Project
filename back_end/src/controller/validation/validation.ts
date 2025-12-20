import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { StatusCodes } from "http-status-codes";
export const validatePageAndLimit = (req: Request) => {
    const { page, limit } = req.query;
    if (page && isNaN(Number(page))) {
        throw new AppError("O parâmetro 'page' deve ser um número válido.", StatusCodes.BAD_REQUEST);

    }
    if (page && isNaN(Number(limit))) {
        throw new AppError("O parâmetro 'limit' deve ser um número.", StatusCodes.BAD_REQUEST);

    }
    return {
        page: parseInt(page as string) || 1,
        limit: parseInt(limit as string) || 5
    };
}
export const validationId = (id:string)=>{
if(id.length<3 || id.length>6){
            throw new AppError("O parâmetro 'id' invalido.", StatusCodes.BAD_REQUEST);

}
if(!id.toUpperCase().startsWith("FL-")){
                throw new AppError("O parâmetro 'id' invalido ele conter as iniciais 'FL-'.", StatusCodes.BAD_REQUEST);

}


}