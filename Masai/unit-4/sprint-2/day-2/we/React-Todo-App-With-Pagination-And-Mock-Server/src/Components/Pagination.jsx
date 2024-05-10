function Pagination({ pagination, page, totalPage }) {

  return (
    <div data-testid="pagination">
      {/* add PREVIOUS button and div with current page number and NEXT button */}
      <button onClick={() => pagination(-1)} disabled={page === 1}>PREVIOUS</button>
      <div>{page}</div>
      <button onClick={() => pagination(+1)} disabled={page === totalPage}>NEXT</button>
    </div>
  );
}

export default Pagination;
