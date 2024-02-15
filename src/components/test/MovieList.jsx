import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MovieList.module.css';

const MovieList = ({ films }) => {
  const location = useLocation();

  return (
    <ul className={styles.movieList}>
      {films.map(movie => (
        <li key={movie.id} className={styles.movieListItem}>
          🎬 {''}
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            cover={movie.poster_path}
            className={styles.linkStyle}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default MovieList;
