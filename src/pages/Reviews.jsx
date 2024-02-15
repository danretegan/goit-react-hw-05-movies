import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../services/api';
import Loader from '../components/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const movieReviews = async () => {
      try {
        const response = await fetchMovieReviews(movieId);
        setReviews(response);
      } catch (error) {
        console.error(error);
      } finally {
        // Simulăm o întârziere de 1 secundă înainte de a marca încărcarea ca fiind completă
        setTimeout(() => {
          setLoading(false);
        }, 750);
      }
    };

    movieReviews();
  }, [movieId]);

  return (
    <>
      {loading ? (
        <Loader /> // Afișează Loader cât timp se încarcă datele
      ) : (
        <>
          {reviews.length !== 0 && (
            <div>
              <h2>Movie Reviews</h2>
              <ul>
                {reviews.map(review => (
                  <li key={review.id}>
                    <p>{review.author}</p>
                    <p>{review.content}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {reviews.length === 0 && (
            <div>We don't have any reviews for this movie.</div>
          )}
        </>
      )}
    </>
  );
};

export default Reviews;
