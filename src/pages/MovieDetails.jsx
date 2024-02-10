import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await fetchMovieDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  // Calculate rounded popularity percentage
  const roundedPopularity = Math.round(movieDetails.vote_average * 10);
  const releaseYear = movieDetails.release_date.split('-')[0];

  return (
    <div>
      <img
        src={
          movieDetails.poster_path
            ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            : `https://i.imgur.com/p3MsT9t.jpg`
        }
        alt={movieDetails.title}
      />
      <div>
        <h1>{`${movieDetails.title} (${releaseYear})`}</h1>
        <h4>User score: {roundedPopularity}%</h4>
        <h2>Overview</h2>
        <p>{movieDetails.overview}</p>
        <h2>Genres</h2>
        <p>
          {movieDetails.genres.map(genre => (
            <span key={genre.id}> {genre.name}</span>
          ))}
        </p>
      </div>
      <hr />
      <h3>Additional information</h3>
      <nav>
        <Link to={`cast`}>Cast</Link>
        <Link to={`reviews`}>Reviews</Link>
      </nav>
      <hr />
      <Outlet />
      <hr />
    </div>
  );
};

export default MovieDetails;
