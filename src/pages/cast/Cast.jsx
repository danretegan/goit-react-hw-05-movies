import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/api';
import Loader from '../../components/Loader';
import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const movieCast = async () => {
      try {
        const response = await fetchMovieCast(movieId);
        setCast(response);
      } catch (error) {
        console.error(error);
      } finally {
        // Simulăm o întârziere de 1 secundă înainte de a marca încărcarea ca fiind completă
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    movieCast();
  }, [movieId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2>Movie Cast:</h2>
          {cast.length !== 0 && (
            <div className={styles.castContainer}>
              {cast.map(actor => (
                <div key={actor.id} className={styles.actorContainer}>
                  <img
                    className={styles.actorImage}
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                        : `https://i.imgur.com/p3MsT9t.jpg`
                    }
                    alt={actor.original_name}
                  />
                  <div className={styles.actorTextContainer}>
                    <p>{actor.name}</p>
                    <p>Character: {actor.character}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {cast.length === 0 && (
            <div>We don't have any cast for this movie.</div>
          )}
        </>
      )}
    </>
  );
};

export default Cast;
