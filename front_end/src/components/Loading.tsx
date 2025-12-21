const Loading = () => {
  return (
   <div className="d-flex justify-content-center my-5">
          <div className="spinner-border text-warning" role="status" style={{width: '3rem', height: '3rem'}}>
            <span className="visually-hidden">Carregando...</span>
          </div>
        </div>
  )
}

export default Loading