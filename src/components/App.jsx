import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import Cast from '../pages/Cast';
import Reviews from '../pages/Reviews';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:movieId" element={<MovieDetails />} />
      <Route path="/movies/:movieId/cast" element={<Cast />} />
      <Route path="/movies/:movieId/reviews" element={<Reviews />} />
    </Routes>
  );
};

export default App;
