import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import { fetchTrendingMovies } from '../services/api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      {/* Utilizarea MovieList pentru afișarea listei de filme */}
      <MovieList films={trendingMovies} />
    </div>
  );
};

export default Home;
