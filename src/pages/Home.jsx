import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList/MovieList';
import { fetchTrendingMovies } from '../services/api';
import Loader from '../components/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
        // Așteaptă 1 secundă înainte de a actualiza starea cu filmele
        setTimeout(() => {
          setTrendingMovies(movies);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Trending today:</h2>
      {loading ? <Loader /> : <MovieList films={trendingMovies} />}
      {/* Utilizarea MovieList pentru afișarea listei de filme */}
    </div>
  );
};

export default Home;
