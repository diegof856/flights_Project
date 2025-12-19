import { IFlights } from "../controller/dto/IFlights"

import { IFlightTransformer, IHomePage, IPaginatedResponse } from "./factory/factoryGet"

export class FlightService {
    private transformer: IFlightTransformer;
    constructor(transformer: IFlightTransformer) {
        this.transformer = transformer;
    }
    private transformAll = (data: IFlights): IHomePage[] => {

        return data.flights.map(flight => this.transformer.transformSingle(flight));
    }
    public getPaginated = (data: IFlights, page: number, limit: number): IPaginatedResponse<IHomePage> => {
        const allTransformed = this.transformAll(data);
        const total = allTransformed.length;
        //Math.ceil arredonda para o numero inteiro mais proximo
        const totalPages = Math.ceil(this.transformAll(data).length / limit);
        const currentPage = Math.max(1, page);
        const startIndex = (currentPage - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedItems = allTransformed.slice(startIndex, endIndex);
        return {
            data: paginatedItems,
            total: total,
            page: currentPage,
            totalPages,
            hasNextPage: currentPage < totalPages
        };
    }

}
