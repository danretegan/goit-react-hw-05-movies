import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styles from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.navLink}>
          Home
        </Link>
        <Link to="/movies" className={styles.navLink}>
          Movies
        </Link>
      </nav>
      <div className={styles.shadowLine} />
      <Outlet />
    </>
  );
};

export default SharedLayout;
