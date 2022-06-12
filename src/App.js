import { useEffect, useState } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./components/MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=3809d6a";

const movie1 = {
  Title: "The Batman",
  Year: "2022",
  imdbID: "tt1877830",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg",
};

function App() {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("batman");
  }, []);
  return (
    <div className="App">
      <h1>Stream Go</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />
        <img src={searchIcon} alt="search" onClick={() => {}} />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            <MovieCard movie={movie} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
