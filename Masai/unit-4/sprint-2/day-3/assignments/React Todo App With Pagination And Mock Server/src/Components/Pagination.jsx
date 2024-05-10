import React from 'react';

function Pagination({ currentPage, todosPerPage, totalTodos, onPageChange }) {
  const totalPages = Math.ceil(totalTodos / todosPerPage);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePreviousPage = () => {
    if (!isFirstPage) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (!isLastPage) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div data-testid="pagination">
      <button onClick={handlePreviousPage} disabled={isFirstPage}>
        PREVIOUS
      </button>
      <div>{currentPage}</div>
      <button onClick={handleNextPage} disabled={isLastPage}>
        NEXT
      </button>
    </div>
  );
}

export default Pagination;
