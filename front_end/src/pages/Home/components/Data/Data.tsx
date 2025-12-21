
interface Data{
    data:string
}

const Data = (props: Data) => {
  return (
    <div className="d-flex flex-column align-items-center w-100 gap-3">

        <h4 className="fs-6">Data</h4>
        <h3 className= "fs-6 fw-semibold">{props.data}</h3>
    </div>
  )
}

export default Data