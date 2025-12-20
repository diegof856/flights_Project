import { IFlight } from "../../mappers/MapperFlights";


export interface IHomePage {
    id: string,
    aeronave: string,
    linhaAerea: string
    matricula: string,
    ondeEsta: string,
    paraOndeVai: string
    data: string
    saldo:string
}
export interface IPaginatedResponse<IHomePage> {
    data: IHomePage[];
    total: number;
    page: number;
    totalPages: number;
    hasNextPage: boolean;
}
export interface IFlightResponse {
    id: string,
    ganhosTotais: string,
    xp: number
    bonus: string,
    linhaAerea: string,
    aeronave: string,
    ondeEsta: string,
    paraOndeVai: string
    matricula: string,
    data: string

}
export interface ISoldTotal {
    saldoTotal: string
    quantidadeVoosSomados: number

}
export interface ICreateSold {
    createSoldTotal(total: number, quantityObj: number): ISoldTotal;
}
export interface ICreateFlightResponse {
    createResponse(flight: IFlight): IFlightResponse
}
export interface IFlightTransformer {

    transformSingle(flight: IFlight): IHomePage;

}