import styles from "./Home.module.css";
import { useFetchHome, useFetchTotal } from "../../hooks/useFetch";
import { useState } from "react";
//components
import Pagination from "./components/Pagination/Pagination";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import ListFlights from "../../components/ListFlights";
import ModalTotal from "./components/Modal/ModalTotal";

interface HomeProps {
  url: string;
}
const Home = ({ url }: HomeProps) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const { data: apiResponse, loading, error } = useFetchHome(`${url}?limit=5&page=${currentPage}`);
  const{data:apiResponseTotal,loading:loadingTotal,error:errorTotal} = useFetchTotal(`${url}/total`);
  return (
    <main className="sm md lg container">
      <article className="d-flex justify-content-between d-flex align-items-center" >
        <div className={`w-100 d-flex flex-column ${styles.home_first_article}`}> 
          <h2>Histórico de Voos</h2>
        <h6>Visualize seu histórico completo de voos realizados</h6>
        </div>
       
        <div className="p-2 flex-shrink-1">
          <button className="btnModal page-link" onClick={() => setShowModal(true)}>
            Total de Saldo
          </button>
        </div>
      </article>
    {showModal && apiResponseTotal && (
     <>
      <ModalTotal setShowModal={setShowModal} totalBalance={apiResponseTotal.totalBalance} totalFlights={apiResponseTotal.totalFlights} isLoading={loadingTotal} isError={errorTotal}/>
       </>
   )}

      {loading && <Loading />}
      {error && <Error />}
      {!loading && apiResponse &&
        <ul className="componenstHomeStyles">
          {apiResponse.date.map((flight) => (
            <ListFlights key= {flight.id} id={flight.id} aircraft={flight.aircraft} airline={flight.airline} data={flight.date} from={flight.from} to={flight.to} registration={flight.registration} sold={flight.sold} />
          ))}

        </ul>}

      {!loading && apiResponse && <Pagination currentPage={currentPage} hasNextPage={apiResponse.hasNextPage} totalPages={apiResponse.totalPages} setCurrentPage={setCurrentPage} />}

    </main>
  )
}

export default Home