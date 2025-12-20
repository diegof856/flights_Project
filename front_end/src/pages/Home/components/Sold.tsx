import style from "./Sold.module.css";
interface Sold{
    sold:string
}

const Sold = (props: Sold) => {
  const isNegative = props.sold.startsWith('-');
  const textColor = isNegative ? style.danger : style.success;
  const displayValue = isNegative ? props.sold.replace('-', '') : props.sold;
  return (
    <div className="d-flex flex-column align-items-center gap-3 w-100">
        <h4 className="fs-6">Saldo</h4>
        <h3 className={`${textColor} fs-6 fw-semibold`}>{`${isNegative ? "-":""} P$ ${displayValue}`}</h3>
    </div>
  )
}

export default Sold