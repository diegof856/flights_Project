

interface Registration{
    registration:string;
}

const Registration = (props: Registration) => {
  return (
    <div className="d-flex flex-column gap-3">
        <h4 className="fs-6">Matricula</h4>
        <h3 className="fs-6 fw-semibold">{props.registration}</h3>

    </div>
  )
}

export default Registration