import styles from "./Details.module.css"
import { NavLink, useParams } from "react-router-dom"
import { useFetchById } from "../../hooks/useFetch";
//svgs
import Arrow from "../../assets/arrow-back-ios.svg";
import Trophy from "../../assets/trophy.svg";
//components
import TotalEarnings from "./components/TotalEarnings";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import StarXp  from "./components/StarXp";
import Bonus from "./components/Bonus";
interface DetailsProps {
  url: string;
}
const Details = ({ url }: DetailsProps) => {
  const { id } = useParams();
    const { data:apiResponse, loading,error } = useFetchById(`${url}/${id}`);
  
  return (
    <main className="sm md lg container">
      <NavLink to={`/`} className={`d-flex flex-row align-items-center
 ${styles.details_first_article}`}>
        <img src={Arrow} className={styles.imgDetails} alt="icone de retorno a pagina anterior" />
        <h3 className="fw-bold">Detalhes do voo</h3>
      </NavLink>
    <section className={styles.sectionRewards}>
      <article className="d-flex flex-row align-items-center gap-2">
        <img src={Trophy}  className={styles.imgDetails} alt="icone de um trofeu" />
        <h3 className="fw-bold">Recompensas</h3>
      </article>
      {loading && <Loading/>}
      {error && <Error/>}
      {!loading && apiResponse && 
      (
         <article className="d-flex justify-content-between">
          <TotalEarnings totalEarnings={apiResponse.ganhosTotais}/>
        <StarXp xp={apiResponse.xp}/>
         <Bonus bonus={apiResponse.bonus}/>
      </article>
      )
      
      }
     
    </section>
    </main>
  )
}

export default Details