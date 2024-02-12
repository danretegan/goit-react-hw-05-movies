import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
    <form onSubmit={handleSubmit}>
      <h2>Movie Search:</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search movies..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

SearchForm.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};
