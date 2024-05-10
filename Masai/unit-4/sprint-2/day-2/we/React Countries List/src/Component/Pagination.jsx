function Pagination({ handlePrev, handleNext, page, totalPage }) {
  const prev = (
    <button
      data-testid="prev-page"
      disabled={page == 1}
      onClick={() => handlePrev(-1)}
    >
      Prev
    </button>
  );
  const currentPage = <button data-testid="current-page">{page}</button>;
  const next = (
    <button
      data-testid="next-page"
      disabled={page==totalPage}
      onClick={() => handleNext(+1)}
    >
      Next
    </button>
  );
  return (
    <div data-testid="page-container">
      <div>
        {prev}
        {currentPage}
        {next}
      </div>
      <div>
        Total Pages: <b data-testid="total-pages">{totalPage}</b>
      </div>
    </div>
  );
}

export default Pagination;