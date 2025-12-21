import styles from "./Home.module.css";
import { useFetchHome } from "../../hooks/useFetch";
import { useState } from "react";
//components
import Pagination from "./components/Pagination/Pagination";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import ListFlights from "../../components/ListFlights";

interface HomeProps {
  url: string;
}
const Home = ({ url }: HomeProps) => {

  const [currentPage, setCurrentPage] = useState(1);

  const { data: apiResponse, loading, error } = useFetchHome(`${url}?limit=5&page=${currentPage}`);

  return (
    <main className="sm md lg container">
      <article className={`d-flex flex-column ${styles.home_first_article}`}>
        <h2>Histórico de Voos</h2>
        <h6>Visualize seu histórico completo de voos realizados</h6>
      </article>
      {loading && <Loading />}
      {error && <Error />}
      {!loading && apiResponse &&
        <ul className="componenstHomeStyles">
          {apiResponse.data.map((flight) => (
            <ListFlights id={flight.id} aircraft={flight.aircraft} airline={flight.airline} data={flight.date} from={flight.from} to={flight.to} registration={flight.registration} sold={flight.sold} />
          ))}

        </ul>}

      {!loading && apiResponse && <Pagination currentPage={currentPage} hasNextPage={apiResponse.hasNextPage} totalPages={apiResponse.totalPages} setCurrentPage={setCurrentPage} />}

    </main>
  )
}

export default Home