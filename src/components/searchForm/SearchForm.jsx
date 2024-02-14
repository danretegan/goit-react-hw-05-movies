import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

export const SearchForm = ({ value, onSubmit }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(inputValue);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.heading}>Movie Search:</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search movies..."
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
  onSubmit: PropTypes.func,
};
