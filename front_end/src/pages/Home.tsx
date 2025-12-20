import styles from "./Home.module.css";
const Home = () => {
  return (
   <main className="sm md lg container">
    <article className={`d-flex flex-column ${styles.home_first_article}`}>
      <h2>Histórico de Voos</h2>
      <h6>Visualize seu histórico completo de voos realizados</h6>
    </article>
   </main>
  )
}

export default Home