import React from "react";
import MovieCard from "./MovieCard";

const MovieScreen = ({addMovie, movieList, page, setPage, list}) => {
  const decrement = () => setPage(page - 1);
  const increment = () => setPage(page + 1);

  const movieDisplay = movieList.map((movie, index) => {
    return <MovieCard addMovie={addMovie} movie={movie} />;
  });

  return (
    <div className="page">
      <h1> Michael's Movie Theatre</h1>
      <h3> Add a movie to your watchlist</h3>
      <div className="btn-container">
      <button onClick={() => (decrement(), page !== 1)}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
