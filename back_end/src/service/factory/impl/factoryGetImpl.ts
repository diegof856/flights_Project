import { IFlight} from "../../../controller/mappers/MapperFlights";
import { IFlightTransformer, IHomePage,ICreateSold, ISoldTotal } from "../factoryGet";

export class factoryGetImpl implements IFlightTransformer,ICreateSold {
    createSoldTotal(total: number,quantityObj:number): ISoldTotal {
        return{
            saldoTotal:total,
           quantidadeVoosSomados:quantityObj
        }
    }
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