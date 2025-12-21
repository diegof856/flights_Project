import { IFlight } from "../../mappers/MapperFlights";


export interface IHomePage {
    id: string,
    aircraft: string,
    airline: string
    registration: string,
    from: string,
    to: string
    date: string
    sold: string
}
export interface IPaginatedResponse<IHomePage> {
    date: IHomePage[];
    total: number;
    page: number;
    totalPages: number;
    hasNextPage: boolean;
}
export interface IFlightResponse {
    id: string,
    totalEarnings: string,
    xp: number
    bonus: string,
    airline: string,
    aircraft: string,
    from: string,
    to: string
    registration: string,
    date: string

}
export interface ISoldTotal {
    totalBalance: string
    totalFlights: number

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