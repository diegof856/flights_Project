

interface AircraftAirline{
    aircraft:string;
    airline:string;

}

const NameAircraftAirline = (props: AircraftAirline) => {
  return (
    <div className="d-flex flex-column gap-3" >
        <h3 className="fs-6 fw-semibold">{props.aircraft}</h3>
        <h4 className="fs-6">{props.airline}</h4>
    </div>
  )
}

export default NameAircraftAirline