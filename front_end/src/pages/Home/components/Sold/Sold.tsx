import {Utils} from "../../../../utlis/Utils"
interface SoldProps{
    sold:string
}

const Sold = ({sold}:SoldProps) => {
    const {textColor, displayValue, isNegative} = Utils(sold);

  return (
    <div className="d-flex flex-column align-items-center gap-3 w-100">
        <h4 className="fs-6">Saldo</h4>
        <h3 className={`${textColor} fs-6 fw-semibold`}>{`${isNegative ? "-":""} P$ ${displayValue}`}</h3>
    </div>
  )
}

export default Sold