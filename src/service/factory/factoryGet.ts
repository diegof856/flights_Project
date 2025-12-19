import { IFlight } from "../../controller/dto/IFlights";

export interface IHomePage{
    id:string,
    aeronave:string,
    linhaAerea:string
    matricula:string,
    ondeEsta:string,
    paraOndeVai:string
    data:string
}
export interface IPaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    totalPages: number;
    hasNextPage: boolean;
}
export interface IFlightTransformer {

    transformSingle(flight:IFlight): IHomePage;

}