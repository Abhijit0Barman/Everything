import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Loading from "./Loading";

const MovieList = () => {
  const [apiData, setApiData] = useState([])
  const [loading, setLoading] = useState(false)
  const [sortOrder, setSortOrder] = useState("")
  const [filterCriteria, setFilterCriteria] = useState("")


  const getUrl = (url, sortOrder, filterCriteria) => {
    if (sortOrder) {
      url = url + `?_sort=year&_order=${sortOrder}`
    }
    if (filterCriteria) {
      let query = sortOrder ? `&type=${filterCriteria}` : `?type=${filterCriteria}`
      url = url + query
    }
    return url
  }

  const getData = async (url) => {
    try {
      let res = await fetch(url)
      let data = await res.json()
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  const fetchData = async (url) => {
    setLoading(true)
    try {
      let res = await getData(url)
      setApiData(res)
      setLoading(false)
    } catch (error) {
      setLoading(false)

    }

  }
  useEffect(() => {

    let url = getUrl(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies`, sortOrder, filterCriteria)
    // console.log(url);
    fetchData(url)
  }, [sortOrder, filterCriteria])



  // console.log(apiData)
  return (
    <div data-testid="movie-list">
      <h1>Movies List</h1>
      <div>
        <label>Sort By Year </label>
        <select data-testid="sort" value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}>
          <option value="">-----------------</option>
          <option value="asc">Oldest first</option>
          <option value="desc">Newest first</option>
        </select>
      </div>
      <div>
        <label>Filter By Type </label>
        <select data-testid="filter" value={filterCriteria}
          onChange={(e) => setFilterCriteria(e.target.value)}>
          <option value="">---------------</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="game">Game</option>
        </select>
      </div>
      {/* Either Loading component or below div with `data-testid="movie-container"` should exist on DOM at a time */}
      <div data-testid="movie-container"
        style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "10px", margin: "20px", padding: "10px" }}
      >
        {/* render all the movies data with the help of MovieCard component here */}
        {loading ? <Loading /> : (
          apiData.map((item) => (
            <MovieCard key={item.id} {...item} />
          ))
        )
        }
      </div>
    </div>
  );
};

export default MovieList;
