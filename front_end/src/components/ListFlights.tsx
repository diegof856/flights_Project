import { NavLink } from "react-router-dom";

//components
import NameAircraftAirline from "../pages/Home/components/NameAircraftAirline/NameAircraftAirline";
import FlightRoute from "../pages/Home/components/FlightRoute/FlightRoute";
import Registration from "../pages/Home/components/Registration/Registration";
import Data from "../pages/Home/components/Data/Data";
import Sold from "../pages/Home/components/Sold/Sold";

interface ListFlightsProp {
  id: string;
  aircraft: string;
  airline: string;
  to: string;
  from: string;
  registration: string;
  data: string;
  sold?: string;
}
const ListFlights = ({ id, aircraft, airline, to, from, registration, data, sold }: ListFlightsProp) => {
  return (
    <NavLink to={`/flights/${id}`} className="d-flex page-link justify-content-between align-items-center flex-row" key={id} style={{ cursor: sold ? 'pointer' : 'default' }}>
      <NameAircraftAirline aircraft={aircraft} airline={airline} />
      <FlightRoute from={to} to={from} />
      <Registration registration={registration} />
      <Data data={data} />
      {sold && <Sold sold={sold} />}
    </NavLink>
  )
}

export default ListFlights