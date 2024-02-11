import PropTypes from 'prop-types';

export const SearchForm = ({ value, onChange }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Movie Search</h2>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Search movies..."
      />
    </form>
  );
};

SearchForm.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
