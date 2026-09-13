import PropTypes from "prop-types";

function SearchBar({ query, setQuery }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search by name or major..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default SearchBar;