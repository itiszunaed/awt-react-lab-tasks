import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function DashboardHeader({
  title,
  tagline,
  favoriteCount,
}) {
  const {
    darkMode,
    toggleTheme,
  } = useContext(ThemeContext);

  return (
    <header className="dashboard-header">
      <div className="header-content">
        <div>
          <h1>{title}</h1>
          <p>{tagline}</p>
        </div>

        <div className="header-right">
          <nav>
            <a href="#home">Home</a>
            <a href="#students">Students</a>
            <a href="#courses">Courses</a>
            <a href="#about">About</a>
          </nav>

          <div className="header-buttons">
            <div className="favorite-count">
              Favorites: {favoriteCount}
            </div>

            <button
              className="theme-button"
              onClick={toggleTheme}
            >
              {darkMode ? "☀ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;