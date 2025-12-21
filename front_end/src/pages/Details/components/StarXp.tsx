//svgs
import StarXpIcon from "../../../assets/star_xp.svg";
//css
import style from "./StarXp.module.css"
interface StarXpProps{
  xp:number
}
const StarXp = ({xp}:StarXpProps) => {
  return (
    <div className="d-flex gap-4 align-items-center text-nowrap">
  <img src={StarXpIcon} alt="icone de estrela para ganho de experiencia" />
          <div className={`d-flex flex-column ${style.star_gap}`}>
            <h6 className="fw-normal">XP CONQUISTADOS</h6>
            <h3 className="fw-bold">{xp}</h3>
          </div>
        </div>
  )
  
}
export default StarXp;