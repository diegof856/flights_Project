import styles from "./FlightRoute.module.css"

interface FlightRoute {
    from: string;
    to: string;

}

const FlightRoute = (props: FlightRoute) => {
    return (
        <div className="d-flex align-items-center flex-column w-100 ">
            <h4 className="fs-6 r">Trajeto</h4>
            <div className={`d-flex align-items-center justify-content-between ${styles.flightRouteContainer}`}>
                <span className={styles.circle}></span>
                <span className={styles.line}></span>
                <span className={styles.circle}></span>
            </div>
            <div className="d-flex w-100 justify-content-between" >
                <h3 className="fs-6">{props.to}</h3>
                <h3 className="fs-6 ">{props.from}</h3>
            </div>
        </div>
    )
}

export default FlightRoute