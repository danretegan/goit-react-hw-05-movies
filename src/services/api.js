import axios from 'axios';
import { API_KEY, API_BASE_URL } from './const';

axios.defaults.baseURL = API_BASE_URL;

const params = {
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`trending/movie/day`, params);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error; // Rethrow the error to propagate it to the caller
  }
};

export const handleSearch = async movieName => {
  try {
    const response = await axios.get(
      `/search/movie?query=${movieName}`,
      params
    );
    return response.data.results;
  } catch (error) {
    console.error(`Error searching for "${movieName}":`, error);
    throw error;
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}`, params);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export const fetchMovieCast = async movieId => {
  try {
    const response = await axios.get(`movie/${movieId}/credits?`, params);
    return response.data.cast;
  } catch (error) {
    console.error('Error fetching movie cast:', error);
    throw error;
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    const response = await axios.get(`movie/${movieId}/reviews?`, params);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    throw error;
  }
};
