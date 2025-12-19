
 interface IRoute {
    from: string;
    to: string;
}
interface IAircraft {
    name: string;
    registration: string;
    airline: string;
}
 export interface IFlight {
    id: string;
    aircraft: IAircraft;
    flightData: IFlightData;
}
interface IFlightData {
    date: string;
    balance: number;
    route: IRoute;
    xp: number;
    missionBonus: number;
}
export interface IFlights {
    flights: IFlight[];
}