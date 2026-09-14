import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function SearchBar() {
  const { query, setQuery } =
    useContext(StudentContext);

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

export default SearchBar;