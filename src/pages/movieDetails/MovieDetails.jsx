import React, { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/api';
import styles from './MovieDetails.module.css';
import Loader from '../../components/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await fetchMovieDetails(movieId);
        // Așteaptă 1 secundă înainte de a actualiza starea cu detaliile filmului
        setTimeout(() => {
          setMovieDetails(details);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      }
    };

    fetchDetails();
  }, [movieId]);

  if (loading) {
    return <Loader />;
  }

  const roundedPopularity = Math.round(movieDetails.vote_average * 10);
  const releaseYear = movieDetails.release_date.split('-')[0];

  return (
    <div className={styles.container}>
      <div>
        <button className={styles.goBackButton} onClick={() => navigate('/')}>
          &#129104; Go back
        </button>
      </div>
      <div className={styles.main}>
        <img
          className={styles.movieImage}
          src={
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
              : `https://i.imgur.com/p3MsT9t.jpg`
          }
          alt={movieDetails.title}
        />
        <div>
          <h1
            className={styles.movieTitle}
          >{`${movieDetails.title} (${releaseYear})`}</h1>
          <h4 className={styles.userScore}>User score: {roundedPopularity}%</h4>
          <h2>Overview</h2>
          <p className={styles.movieOverview}>{movieDetails.overview}</p>
          <h2>Genres</h2>
          <p className={styles.genres}>
            {movieDetails.genres.map(genre => (
              <span key={genre.id}> {genre.name}</span>
            ))}
          </p>
        </div>
      </div>
      <hr />
      <h3 className={styles.additionalInfo}>Additional information</h3>
      <nav className={styles.navLinks}>
        <Link to={`cast`} className={styles.navLink}>
          Cast
        </Link>
        <Link to={`reviews`} className={styles.navLink}>
          Reviews
        </Link>
      </nav>
      <hr />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
