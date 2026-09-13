import PropTypes from "prop-types";

function SortControls({ sort, setSort }) {
  return (
    <div className="sort-controls">
      <button
        className={sort === "default" ? "active" : ""}
        onClick={() => setSort("default")}
      >
        Default
      </button>

      <button
        className={sort === "name" ? "active" : ""}
        onClick={() => setSort("name")}
      >
        Name A-Z
      </button>

      <button
        className={sort === "gpa" ? "active" : ""}
        onClick={() => setSort("gpa")}
      >
        GPA High-Low
      </button>
    </div>
  );
}

SortControls.propTypes = {
  sort: PropTypes.string.isRequired,
  setSort: PropTypes.func.isRequired,
};

export default SortControls;