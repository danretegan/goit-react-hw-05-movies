import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { handleSearch } from '../services/api';
import { SearchForm } from '../components/searchForm/SearchForm';
import MovieList from '../components/MovieList/MovieList';
import Loader from '../components/Loader';


const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') || '';
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const updateQueryString = query => {
    setSearchParams({ query });
  };

  const performSearch = async query => {
    try {
      setLoading(true);

      // Introduce o întârziere de 1 secunda:
      await new Promise(resolve => setTimeout(resolve, 750));

      const movies = await handleSearch(query);
      setSearchResults(movies);

      if (movies.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Efectul va fi declanșat doar când se schimbă `movieName`
  useEffect(() => {
    const performSearchEffect = async () => {
      if (movieName !== '') {
        performSearch(movieName);
      } else {
        // Dacă câmpul de căutare este gol, putem decide cum să gestionăm situația.
        setSearchResults([]);
        setNoResults(false);
      }
    };

    performSearchEffect();
  }, [movieName]);

  const handleSearchSubmit = async query => {
    performSearch(query);
  };

  return (
    <div>
      <SearchForm
        value={movieName}
        onChange={updateQueryString}
        onSubmit={handleSearchSubmit}
      />
      {loading ? (
        <Loader />
      ) : noResults ? (
        <h3>No movie with this name. Try something else.</h3>
      ) : (
        <MovieList films={searchResults} />
      )}
      {/* Utilizarea MovieList pentru afișarea listei de filme */}
    </div>
  );
};

export default Movies;
