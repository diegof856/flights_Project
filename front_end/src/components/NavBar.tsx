import style from "./NavBar.module.css";
const NavBar = () => {
  return (
    <nav className="sm md lg">
      <div className={style.nav_images}>
      <img src="/logo.svg" alt="Logotipo da pagina" />
      <img src="/text.svg" alt="Texto com o nome da pilops" />
      </div>
      <p>Your virtual pilot career for Flight Simulator</p>

    </nav>
  )
}

export default NavBar