//padrão Singleton
import { factoryGetImpl } from "../service/factory/impl/factoryGetImpl";
import { FlightService } from "../service/service";
import { FlightController } from "../controller/flights/Controller";

const flightFactory = new factoryGetImpl();
const flightService = new FlightService(flightFactory,flightFactory);
const flightController = new FlightController(flightService);
export { flightController, flightService };