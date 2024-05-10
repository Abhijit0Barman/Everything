import React, { useState } from "react";

let initData = {
  "title": "",
  "year": "",
  "imdbID": "",
  "type": "",
  "rating": "",
  "poster": "",
}

const AddMovie = () => {
  const [data, setData] = useState(initData);

  const { title, year, imdbID, type, rating, poster } = data

  const handleChange = (e) => {
    const value = e.target.type === "number" ? Number(e.target.value) : e.target.value
    setData({ ...data, [e.target.name]: value })
    /*    OR      */
    // const { name, value } = e.target;
    // setData((p) => ({..data, [name]: value,}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postRequest(data)
    setData(initData)
  }

  const postRequest = (d) => {
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(d)
    })
  }

  return (
    <div data-testid="add-movie" style={{ width: "50%", margin: "auto" }}
    >
      <h1>Add Movie</h1>
      <form data-testid="add-movie-form" onSubmit={handleSubmit}
        style={{
          border: "2px solid black",
          width: "60%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          marginTop: "20px",
          padding: "20px"
        }}
      >
        <label  >Title:
          <input type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </label>

        <label  >Year:
          <input type="text"
            name="year"
            value={year}
            onChange={handleChange}
          />
        </label>

        <label  >IMDB ID:
          <input type="text"
            name="imdbID"
            value={imdbID}
            onChange={handleChange}
          />
        </label>

        <label  >Type: </label>
        <select
          name="type"
          // id="type"
          value={type}
          onChange={handleChange}
        >
          <option value="">Select a type</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="game">Game</option>
        </select>


        <label  >Rating:
          <input type="text"
            name="rating"
            value={rating}
            onChange={handleChange}
          />
        </label>

        <label  >Poster:
          <input type="text"
            name="poster"
            value={poster}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Add Movie" />
        {/* <button type="submit" >Add Movie</button> */}
      </form>
    </div>
  );
};

export default AddMovie;
