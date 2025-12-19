import { StatusCodes } from "http-status-codes";

export interface IError{
status:number,
error:string;
}
export const createError = (message: string): IError => ({
    status: StatusCodes.BAD_REQUEST,
    error: message
});