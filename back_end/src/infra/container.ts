//padrão Singleton
import { factoryImpl } from "../service/factory/impl/factoryImpl";
import { FlightService } from "../service/service";
import { FlightController } from "../controller/flights/Controller";

const flightFactory = new factoryImpl();
const flightService = new FlightService(flightFactory,flightFactory,flightFactory);
const flightController = new FlightController(flightService);
export { flightController, flightService };