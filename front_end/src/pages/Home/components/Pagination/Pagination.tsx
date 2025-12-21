import style from "./Pagination.module.css";

interface Pagination {
    currentPage: number;
    totalPages: number;
    hasNextPage: boolean;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
const Pagination = ({ currentPage, totalPages, hasNextPage, setCurrentPage }: Pagination) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    const visiblePages = pageNumbers.filter(page =>
        page === 1 ||
        page === totalPages ||
        (page >= currentPage - 1 && page <= currentPage + 1)
    );
    const handleNextPage = () => {
        if (hasNextPage) {
            setCurrentPage(prev => prev + 1);
        }
    };
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    return (
        <nav>
            <ul className={style.pagination}>
                <li className={`${currentPage === 1 ? `${style.disabledPerson} ` : ''}`}>
                    <button className="page-link" onClick={handlePrevPage}>
                        Anterior
                    </button>
                </li>
                <li>
                    {visiblePages.map((number) => (

                        <button
                            key={number}
                            className={`${style.pageLink} ${currentPage === number ? style.active : ''}`}
                            onClick={() => setCurrentPage(number)}
                        >
                            {number}
                        </button>

                    ))}
                </li>
                <li className={`${hasNextPage ? '' : `${style.disabledPerson} `}`}>
                    <button className="page-link" onClick={handleNextPage}>
                        Próximo
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination