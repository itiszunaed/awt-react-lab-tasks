import PropTypes from "prop-types";

function DashboardHeader({ title, tagline, favoriteCount }) {
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

          <div className="favorite-count">
            Favorites: {favoriteCount}
          </div>
        </div>
      </div>
    </header>
  );
}

DashboardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  favoriteCount: PropTypes.number.isRequired,
};

export default DashboardHeader;