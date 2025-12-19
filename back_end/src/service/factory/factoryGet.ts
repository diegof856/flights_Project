import { IFlight } from "../../controller/mappers/MapperFlights";

export interface IHomePage{
    id:string,
    aeronave:string,
    linhaAerea:string
    matricula:string,
    ondeEsta:string,
    paraOndeVai:string
    data:string
}
export interface IPaginatedResponse<IHomePage> {
    data: IHomePage[];
    total: number;
    page: number;
    totalPages: number;
    hasNextPage: boolean;
}
export interface IFlightTransformer {

    transformSingle(flight:IFlight): IHomePage;

}
export interface ISoldTotal{
    saldoTotal:number
    quantidadeVoosSomados:number
   
}
export interface ICreateSold{
    createSoldTotal(total:number,quantityObj:number):ISoldTotal;
}