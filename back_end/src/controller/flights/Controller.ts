import { NextFunction, Request, Response } from "express";
import fs from 'fs';
import path from 'path';
import { IFlights } from "../../mappers/MapperFlights";
import { FlightService } from "../../service/service";
import { validatePageAndLimit, validationId } from "../validation/validation";

const dataPath = path.join(process.cwd(), 'src', 'data', 'data.json');
export class FlightController {
    private service: FlightService;
    constructor(service: FlightService) {
        this.service = service;
    }
    public getAll = (req: Request, res: Response, next: NextFunction) => {
        try {
            const { page, limit } = validatePageAndLimit(req);
            res.json(this.service.getPaginated(this.processData(dataPath), page, limit))
        } catch (error) {
            next(error);
        }
    }
    public getById = (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            validationId(id)
            res.json(this.service.getFlightById(this.processData(dataPath), id))
        } catch (error) {
            next(error);
        }


    }
    public getCalculateBalance = (req: Request, res: Response, next: NextFunction) => {
        try {
            res.json(this.service.getCalculateFlights(this.processData(dataPath)))
        } catch (error) {
            next(error);
        }
    }
    // helper methods
    private processData(dataPath: string): IFlights {
        const rawData = fs.readFileSync(dataPath, 'utf-8');
        const flightsData = JSON.parse(rawData) as IFlights;
        return flightsData
    }


}