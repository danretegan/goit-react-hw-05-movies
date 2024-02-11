import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import styles from './SharedLayout.module.css';

const SharedLayout = () => {
  const location = useLocation();

  const isMoviesPage = location.pathname === '/movies';
  const isHomePage = location.pathname === '/';

  return (
    <>
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
      <Outlet />
    </>
  );
};

export default SharedLayout;
