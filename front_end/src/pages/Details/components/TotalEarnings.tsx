import style from "./TotalEarnings.module.css"
import {Utils} from "../../../utlis/Utils";
interface TotalEarningsProps{
    totalEarnings:string,
}
const TotalEarnings = ({totalEarnings}:TotalEarningsProps) => {
const {textColor, displayValue, isNegative} =Utils(totalEarnings)
  return (
  <div className="d-flex gap-4">
    <span className={style.circleTotalEarnings}>P$</span>
          <div className={`gapDetails ${style.earnings_secondary_div}`}>
            <h6 className="fw-normal">Ganhos totais</h6>
            <h3 className={`${textColor} fw-bold`}>{`${isNegative ? "-":""} P$ ${displayValue}`}</h3>
          </div>
        </div>
  )
}

export default TotalEarnings