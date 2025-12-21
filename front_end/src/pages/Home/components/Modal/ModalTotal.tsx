import Error from "../../../../components/Error";
import Loading from "../../../../components/Loading";
import styles from "./ModalTotal.module.css"
//utils
import { Utils } from "../../../../utlis/Utils";
interface ModalTotalProps {
    totalBalance: string;
    totalFlights: number;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    isLoading: boolean;
    isError: any
}

const ModalTotal = ({ totalBalance, totalFlights, setShowModal, isLoading, isError }: ModalTotalProps) => {
    const { textColor, displayValue } = Utils(totalBalance)
    return (
        <>

            <div className="modal-backdrop fade show" onClick={() => setShowModal(false)} style={{ cursor: 'pointer' }}></div>


            <div className="modal d-block fade show" tabIndex={-1} role="dialog" onClick={() => setShowModal(false)}>
                <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-content shadow-lg">

                        <header className={`${styles.modalHeaderPerson} modal-header`}>
                            <h5 className="modal-title">Resumo do Histórico</h5>
                            <button type="button" className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
                        </header>


                        <section className="modal-body text-center py-4">

                            {isLoading ? (
                                <Loading />
                            ) : isError ? (
                                <Error />
                            ) : (
                                <>
                                    <article className="mb-3">
                                        <small className="text-muted d-block">QUANTIDADE DE VOOS</small>
                                        <h3 className="fw-bold">{totalFlights}</h3>
                                    </article>
                                    <hr />
                                    <article>
                                        <small className="text-muted d-block">SALDO ACUMULADO</small>
                                        <h2 className={`text-success fw-bold ${textColor}`}>{displayValue}</h2>
                                    </article>
                                </>
                            )}
                        </section>

                        <div className="modal-footer">
                            <button className="btn btn-outline-secondary w-100" onClick={() => setShowModal(false)}>
                                Fechar Relatório
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ModalTotal