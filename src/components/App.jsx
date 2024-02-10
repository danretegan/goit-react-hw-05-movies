import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/movieDetail/MovieDetails';
import Cast from '../pages/Cast';
import Reviews from '../pages/Reviews';
import SharedLayout from './sharedLayout/SharedLayout';
import NotFoundPage from '../pages/NotFoundPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
