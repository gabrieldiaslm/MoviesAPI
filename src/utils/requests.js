const API_KEY = process.env.PUBLIC_API_KEY;
const BASE_URL = process.env.PUBLIC_BASE_URL;

export const getTrendingMovies = async () => {
  const res = await fetch(
    `${BASE_URL}/trending/movie/day?language=pt-BR&api_key=${API_KEY}&page=1`
  );
  const data = await res.json();
  return data.results;
};

export const getMovies = async (query) => {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const data = await res.json();
  return data.results;
};

export const getMovieDetails = async (id) => {
  const res = await fetch(
    `${BASE_URL}/movie/${id}?language=pt-BR&api_key=${API_KEY}`
  );
  const data = await res.json();
  return data;
};

// DA PRA TIRAR ESSE AQUI SEM NECESSIDADE
export const getSimilarMovies = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

// SERIES
export const getTvShows = async () => {
  const res = await fetch(
    `${BASE_URL}/trending/tv/day?language=pt-BR&api_key=${API_KEY}&page=1`
  );
  const data = await res.json();
  return data.results;
};

// SERIES DETAILS
export const getTvDetails = async (id) => {
  const res = await fetch(
    `${BASE_URL}/tv/${id}?language=pt-BR&api_key=${API_KEY}`
  );
  const data = await res.json();
  return data;
};

// não usei
export const getTvSearch = async (query) => {
  const res = await fetch(
    `${BASE_URL}/search/tv?api_key=${API_KEY}&query=${query}`
  );
  const data = await res.json();
  return data.results;
};

// pegar generos dos filmes
export const getGenres = async () => {
  try {
    const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}`);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    return data.genres;
  } catch (error) {
    console.error("Failed to fetch genres:", error);
    return [];
  }
};
