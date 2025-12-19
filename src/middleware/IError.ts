
interface IError {
    status: number,
    error: string;
}
export const createError = (message: string, status: number): IError => ({
    status: status,
    error: message
});