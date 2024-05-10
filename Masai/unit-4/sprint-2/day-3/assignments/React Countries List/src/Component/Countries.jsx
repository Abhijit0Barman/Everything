import { useState, useEffect } from 'react';
import LoadingIndicator from './LoadingIndicator';
import CountriesRow from './CountriesRow';
import Pagination from './Pagination';

function Countries() {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchCountries(currentPage);
  }, [currentPage]);

  const fetchCountries = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10&orderBy=desc`
      );
      const data = await response.json();
      setCountries(data.data);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <div>
          <h1 data-testid="countries-header">Countries List</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>COUNTRY</th>
                <th>POPULATION</th>
                <th>RANK</th>
              </tr>
            </thead>
            <tbody data-testid="countries-container">
              {countries.map((country) => (
                <CountriesRow
                  key={country.id}
                  country={country.name}
                  population={country.population}
                />
              ))}
            </tbody>
          </table>
          <Pagination
            current={currentPage}
            onChange={(page) => setCurrentPage(page)}
            total={totalPages}
          />
        </div>
      )}
    </div>
  );
}

export default Countries;
