import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../services/api';
import Loader from '../components/Loader';

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
        setLoading(false); // Setează loading pe false indiferent de rezultat
      }
    };

    movieCast();
  }, [movieId]);

  return (
    <>
      {loading ? (
        <Loader /> // Afișează Loader cât timp se încarcă datele
      ) : (
        <>
          {cast.length !== 0 && (
            <div>
              <h2>Movie Cast</h2>
              {cast.map(actor => (
                <div key={actor.id}>
                  <img
                    width="200px"
                    height="300px"
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                        : `https://i.imgur.com/p3MsT9t.jpg`
                    }
                    alt={actor.original_name}
                  />
                  <p>{actor.name}</p>
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
