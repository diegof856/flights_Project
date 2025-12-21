import style from "./TotalEarnings.module.css"
interface TotalEarningsProps{
    totalEarnings:string,
}
const TotalEarnings = ({totalEarnings}:TotalEarningsProps) => {
  const isNegative = totalEarnings.startsWith('-');
  const textColor = isNegative ? style.danger : style.success;
  const displayValue = isNegative ? totalEarnings.replace('-', '') : totalEarnings;
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