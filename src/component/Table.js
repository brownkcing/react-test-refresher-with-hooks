import React, { useState } from "react";
import { getMovies } from "../services/fakeMovieService";

function Table1() {
  const [movies, setMovies] = useState(getMovies());
  const removeItem = (movieItem) => {
    console.log(movieItem);
    const newArr = movies.filter((m) => m._id !== movieItem._id);
    setMovies(newArr);
  };
  const itemCheck = movies.length;
  if (itemCheck === 0) return <p>There are no movies in the database.</p>;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movieItem) => (
          <tr key={movieItem._id}>
            <td>{movieItem.title}</td>
            <td>{movieItem.genre.name}</td>
            <td>{movieItem.numberInStock}</td>
            <td>{movieItem.dailyRentalRate}</td>
            <td
              className="btn btn-outline-danger btn-sm"
              onClick={() => removeItem(movieItem)}
            >
              Delete
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Table1;
