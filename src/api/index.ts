import axios from "axios";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
const BASE_URL = process.env.REACT_APP_MOVIE_API_BASE_URL;

export const getTrendingMovies = () => {
  const url = `${BASE_URL}/trending/all/day?api_key=${API_KEY}`;
  return axios.get(url);
};

export const getSearchMovies = (query: string) => {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
  return axios.get(url);
};
