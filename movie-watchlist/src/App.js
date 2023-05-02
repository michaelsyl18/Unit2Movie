import "./App.css";
import Header from "./components/Header";
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import MovieScreen from "./components/MovieScreen";
import Watchlist from "./components/WatchList";


function App() {
  const [movieList, setMovieList] = useState([]);
  const [list, setWatchList] = useState([]);
  const [page, setPage] = useState(1);

  const addMovie = (movie) => setWatchList([...list, movie]);
  const removeMovie = (movie) => {
    const newState = list.filter((mov) => {
      return mov !== movie;
    });
    setWatchList(newState);
  };

  const getData = useCallback(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
      .then((res) => {
        setMovieList(res.data.results);
      });
  }, [page]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          addMovie={addMovie}
          movieList={movieList}
          page={page}
          setPage={setPage}
          list={list}
          removeMovie={removeMovie}
        />
        <Watchlist list={list} removeMovie={removeMovie}></Watchlist>
      </main>
    </div>
  );
}

export default App;
