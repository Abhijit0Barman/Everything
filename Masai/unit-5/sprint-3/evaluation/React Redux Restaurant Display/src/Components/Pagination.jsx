import React from 'react';

const Pagination = ({ currentPage, totalPages, updatePage }) => {
  const pages = [...Array(totalPages).keys()].map((page) => page + 1);

  return (
    <div className="pagination_wrapper">
      {pages.map((page) => (
        <button
          key={page}
          className={`pagination_button ${currentPage === page ? 'current_page' : ''}`}
          onClick={() => updatePage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
