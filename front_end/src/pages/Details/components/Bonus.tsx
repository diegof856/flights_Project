//svgs
import BonusIcon from "../../../assets/bonus_star.svg";
//css
import style from "./Bonus.module.css";
interface BonusProps{
  bonus:string
}
const Bonus = ({bonus}:BonusProps) => {
  return (
  <div className="d-flex gap-4 align-items-center text-nowrap">
  <img src={BonusIcon} alt="icone de um bonus para ganho a mais de experiencia" />
          <div className={`d-flex flex-column ${style.star_gap}`}>
            <h6 className="fw-normal">Bônus de missão</h6>
            <h3 className="fw-bold">{bonus}</h3>
          </div>
        </div>
  )
}

export default Bonus