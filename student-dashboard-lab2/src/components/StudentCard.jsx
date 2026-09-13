import PropTypes from "prop-types";
import CourseTag from "./CourseTag";
import StatBadge from "./StatBadge";

function StudentCard({
  name,
  id,
  avatar,
  gpa,
  major,
  courses,
  favorite,
  onFavorite,
}) {
  return (
    <div className="student-card">
      <div className="student-top">
        <img
          src={avatar}
          alt={name}
          className="student-avatar"
        />

        <div className="student-info">
          <h2>{name}</h2>
          <p className="student-id">ID: {id}</p>
        </div>

        <button
          className={`favorite-button ${
            favorite ? "favorite-active" : ""
          }`}
          onClick={() => onFavorite(id)}
        >
          {favorite ? "★" : "☆"}
        </button>
      </div>

      <p className="major">{major}</p>

      <div className="student-stats">
        <StatBadge label="GPA" value={gpa} />
        <StatBadge label="Credits" value={90} />
      </div>

      <div className="courses">
        <p className="course-title">Enrolled Courses</p>

        <div className="course-list">
          {courses.map((course, index) => (
            <CourseTag
              key={index}
              courseName={course.name}
              color={course.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  gpa: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  major: PropTypes.string.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  favorite: PropTypes.bool.isRequired,
  onFavorite: PropTypes.func.isRequired,
};

export default StudentCard;