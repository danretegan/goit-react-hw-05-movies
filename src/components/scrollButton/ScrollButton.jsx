import React, { useEffect, useState } from 'react';
import styles from './ScrollButton.module.css';

const ScrollButton = () => {
  const [displayButton, setDisplayButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setDisplayButton(true);
      } else {
        setDisplayButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      id="btn-back-to-top"
      className={`${styles.ScrollButton} ${
        displayButton ? styles.show : styles.hide
      }`}
      onClick={backToTop}
    >
      Scroll to Top
    </button>
  );
};

export default ScrollButton;
