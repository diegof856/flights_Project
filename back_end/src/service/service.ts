import { StatusCodes } from "http-status-codes";
import { IFlights } from "../mappers/MapperFlights"
import { AppError } from "../errors/AppError";

import { ICreateSold, IFlightResponse, IFlightTransformer, IHomePage, IPaginatedResponse, ISoldTotal, ICreateFlightResponse } from "./factory/factory"

export class FlightService {
    private transformer: IFlightTransformer;
    private calculateSold: ICreateSold;
    private createFlightResponse: ICreateFlightResponse;

    constructor(transformer: IFlightTransformer, calculateSold: ICreateSold, createFlightResponse: ICreateFlightResponse) {
        this.transformer = transformer;
        this.calculateSold = calculateSold;
        this.createFlightResponse = createFlightResponse;
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

    public getFlightById = (data: IFlights, id: string): IFlightResponse => {
        const flight = data.flights.find(f => f.id === id);
        if (!flight) {
            throw new AppError("Voo não encontrado!", StatusCodes.NOT_FOUND);
        }
        return this.createFlightResponse.createResponse(flight);
    };
    public getCalculateFlights = (data: IFlights): ISoldTotal => {
        let total = 0;
        for (let i = 0; i < data.flights.length; i++) {
            total += data.flights[i].flightData.balance
        }
        return this.calculateSold.createSoldTotal(total, data.flights.length);
    }
    // helper methods
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

}
