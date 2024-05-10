import { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import Pagination from "./Pagination";
import CountriesCard from "./CountriesRow";
// import CountriesRow from "./CountriesRow"

function Countries() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };

  async function fetchdata() {
    try {
      setLoading(true);
      let res = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10&orderBy=desc`
      );

      let country = await res.json();
      console.log(country.totalPages);
      setTotalPage(country.totalPages);

      setData(country.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchdata();
  }, [page]);

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <div style={{ textAlign: "center", }}>
          <h1 data-testid="countries-header">Countries List</h1>
          <table style={{ margin: "auto" }}>
            <thead style={{backgroundColor:"yellow"}}>
              <tr>
                <th>ID</th>
                <th>COUNTRY</th>
                <th>POPULATION</th>
                <th>RANK</th>
              </tr>
            </thead>
            <tbody data-testid="countries-container">
              {
                data.map((item) => (
                  <CountriesCard key={item.id} {...item} />
                ))
              }
              {/* Show the CountriesRow here  */}
              {/* <CountriesRow/> */}
            </tbody>
          </table>
          <div>
            <Pagination
              handleNext={handleNext}
              handlePrev={handlePrev}
              page={page}
              totalPage={totalPage}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Countries;