import { Request, Response } from "express";
import fs from 'fs';
import path from 'path';
import { IFlights } from "../mappers/MapperFlights";
import { FlightService } from "../../service/service";

const dataPath = path.join(process.cwd(), 'src', 'data', 'data.json');
export class FlightController {
    private service: FlightService;
    constructor(service: FlightService) {
        this.service = service;
    }
    public getAll = (req: Request, res: Response) => {

        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const rawData = fs.readFileSync(dataPath, 'utf-8');
        const flightsData = JSON.parse(rawData) as IFlights;
        res.json(this.service.getPaginated(flightsData, page, limit))
    }


}