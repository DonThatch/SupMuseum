function Pagination({ currentPage, itemsPerPage, totalItems, handleNextPage, handlePreviousPage }) {
    return (
        <div className="pagination">
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
            <button onClick={handleNextPage} disabled={currentPage * itemsPerPage >= totalItems}>Next</button>
        </div>
    );
}

export default Pagination;
