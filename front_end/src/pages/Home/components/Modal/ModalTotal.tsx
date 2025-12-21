import Error from "../../../../components/Error";
import Loading from "../../../../components/Loading";
import styles from "./ModalTotal.module.css"
interface ModalTotalProps {
    totalBalance: string;
    totalFlights: number;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    isLoading: boolean;
    isError: any
}

const ModalTotal = ({ totalBalance, totalFlights, setShowModal, isLoading, isError }: ModalTotalProps) => {
    const isNegative = totalBalance.startsWith('-');
    const textColor = isNegative ? styles.danger : styles.success;
    const displayValue = isNegative ? totalBalance.replace('-', '') : totalBalance;
    return (
        <>
            {/* Div do Fundo Escuro (Backdrop) */}
            <div className="modal-backdrop fade show" onClick={() => setShowModal(false)} style={{ cursor: 'pointer' }}></div>

            {/* Estrutura do Modal */}
            <div className="modal d-block fade show" tabIndex={-1} role="dialog" onClick={() => setShowModal(false)}>
                <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-content shadow-lg">
                        {/*HEADER */}
                        <div className={`${styles.modalHeaderPerson} modal-header`}>
                            <h5 className="modal-title">Resumo do Histórico</h5>
                            <button type="button" className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
                        </div>
                        {/*HEADER */}
                        {/* Lógica de loading,erro e corpo */}
                        <div className="modal-body text-center py-4">

                            {isLoading ? (
                                <Loading />
                            ) : isError ? (
                                <Error />
                            ) : (
                                <>
                                    <div className="mb-3">
                                        <small className="text-muted d-block">QUANTIDADE DE VOOS</small>
                                        <h3 className="fw-bold">{totalFlights}</h3>
                                    </div>
                                    <hr />
                                    <div>
                                        <small className="text-muted d-block">SALDO ACUMULADO</small>
                                        <h2 className={`text-success fw-bold ${textColor}`}>{displayValue}</h2>
                                    </div>
                                </>
                            )}
                        </div>
                        {/* Lógica de loading,erro e corpo */}
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