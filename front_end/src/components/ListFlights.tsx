import { NavLink } from "react-router-dom";
import styles from "./ListFlights.module.css";
//components
import NameAircraftAirline from "../pages/Home/components/NameAircraftAirline/NameAircraftAirline";
import FlightRoute from "../pages/Home/components/FlightRoute/FlightRoute";
import Registration from "../pages/Home/components/Registration/Registration";
import Data from "../pages/Home/components/Data/Data";
import Sold from "../pages/Home/components/Sold/Sold";
import type { FetchResponse } from "../hooks/useFetch";
interface ListFlightsProp{
    data:FetchResponse
}
const ListFlights = ({ data:apiResponse }: ListFlightsProp) => {
  return (
   <ul className={`${styles.componenstStyles}`}>
          {apiResponse.data.map((flight) => (
            <NavLink to={`/flights/${flight.id}`} className="d-flex page-link justify-content-between align-items-center flex-row"key={flight.id} style={{ cursor: 'pointer' }}>
              <NameAircraftAirline aircraft={flight.aeronave} airline={flight.linhaAerea} />
              <FlightRoute from={flight.ondeEsta} to={flight.paraOndeVai}/>
              <Registration registration={flight.matricula}/>
              <Data data={flight.data}/>
              <Sold sold={flight.saldo}/>
            </NavLink>
          ))}

        </ul>
  )
}

export default ListFlights