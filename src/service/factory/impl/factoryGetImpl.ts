import { IFlight} from "../../../controller/mappers/MapperFlights";
import { IFlightTransformer, IHomePage } from "../factoryGet";

export class factoryGetImpl implements IFlightTransformer {
    transformSingle(flight: IFlight): IHomePage {
        return {
            id: flight.id,
            aeronave: flight.aircraft.name,
            matricula: flight.aircraft.registration,
            linhaAerea: flight.aircraft.airline,
            ondeEsta: flight.flightData.route.from,
            paraOndeVai: flight.flightData.route.to,
            data: flight.flightData.date
        }
    }

}