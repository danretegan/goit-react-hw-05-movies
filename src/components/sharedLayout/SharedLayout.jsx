import React, { Suspense } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import styles from './SharedLayout.module.css';

const SharedLayout = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isMoviesPage = location.pathname.startsWith('/movies');

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <Link
          to="/"
          className={`${styles.navLink} ${isHomePage ? styles.homePage : ''}`}
        >
          Home
        </Link>
        <Link
          to="/movies"
          className={`${styles.navLink} ${
            isMoviesPage ? styles.moviesPage : ''
          }`}
        >
          Movies
        </Link>
      </nav>
      <div className={styles.shadowLine} />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
