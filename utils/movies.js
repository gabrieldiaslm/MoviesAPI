'use client'
import { useState, useEffect } from "react";

export const getTrendingMovies = async (page = 1) => {
  const res = await fetch(
    `${BASE_URL}/trending/movie/day?language=pt-BR&api_key=${API_KEY}&page=${page}`
  );
  const data = await res.json();
  return data.results;
};

const TrendingMovies = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (page) => {
    const movies = await getTrendingMovies(page);
    setMovies(movies);
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const incrementPage = () => setPage((prevPage) => prevPage + 1);
  const decrementPage = () =>
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));

  return (
    <div>
      <button onClick={decrementPage} disabled={page === 1}>
        Anterior
      </button>
      <button onClick={incrementPage}>Próxima</button>
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </div>
    </div>
  );
};

export default TrendingMovies;
