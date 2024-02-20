import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/movieDetails/MovieDetails';
import SharedLayout from './sharedLayout/SharedLayout';
import NotFoundPage from '../pages/NotFoundPage';

//  Importurile dinamice (lazy()) trebuie facute DUPA importurile statice!

const Cast = lazy(() => import('../pages/cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));

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
