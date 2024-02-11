import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { handleSearch } from '../services/api';
import { SearchForm } from '../components/SearchForm';
import MovieList from '../components/MovieList';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') || '';
  const [loading, setLoading] = useState(false);

  const updateQueryString = query => {
    const nextParams = query !== '' && { query };
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const search = async () => {
      try {
        setLoading(true);
        const movies = await handleSearch(movieName);
        setSearchResults(movies);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    search();
  }, [movieName]);

  return (
    <div>
      <SearchForm value={movieName} onChange={updateQueryString} />
      {loading ? (
        <h2>Loading...</h2>
      ) : searchResults.length === 0 && movieName ? (
        <h2>No movie with this name</h2>
      ) : (
        <MovieList films={searchResults} />
      )}
    </div>
  );
};

export default Movies;
