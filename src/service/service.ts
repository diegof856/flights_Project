import { StatusCodes } from "http-status-codes";
import { IFlights, IFlight } from "../controller/mappers/MapperFlights"
import { AppError } from "../errors/AppError";

import { IFlightTransformer, IHomePage, IPaginatedResponse } from "./factory/factoryGet"

export class FlightService {
    private transformer: IFlightTransformer;
    constructor(transformer: IFlightTransformer) {
        this.transformer = transformer;
    }
    public getPaginated = (data: IFlights, page: number, limit: number): IPaginatedResponse<IHomePage> => {
        const allTransformed = this.transformAll(data);
        const { paginatedItems, total, currentPage, totalPages, hasNextPage } =
            this.calculatePages(allTransformed, page, limit);
        return {
            data: paginatedItems,
            total: total,
            page: currentPage,
            totalPages,
            hasNextPage
        };
    }
    private transformAll = (data: IFlights): IHomePage[] => {
        return data.flights.map(flight => this.transformer.transformSingle(flight));
    }
    private calculatePages(data: IHomePage[], page: number, limit: number) {
        const total = data.length;
        const totalPages = Math.ceil(total / limit);
        const currentPage = Math.max(1, page);
        let hasNextPage = currentPage < totalPages
        const startIndex = (currentPage - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedItems = data.slice(startIndex, endIndex);

        return {
            paginatedItems,
            total,
            currentPage,
            totalPages,
            hasNextPage

        }
    }
    public getFlightById = (data: IFlights, id: string): IFlight => {
        const flight = data.flights.find(f => f.id === id);
        if (!flight) {
            throw new AppError("Voo não encontrado!", StatusCodes.NOT_FOUND);
        }
        return flight;
    };
    public getCalculateFlights =(data: IFlights)=>{
        
    }

}
