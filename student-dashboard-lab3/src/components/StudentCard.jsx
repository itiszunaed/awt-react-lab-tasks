import { useContext } from "react";
import PropTypes from "prop-types";

import CourseTag from "./CourseTag";
import StatBadge from "./StatBadge";

import { StudentContext } from "../context/StudentContext";

function StudentCard({
  name,
  id,
  avatar,
  gpa,
  major,
  courses,
}) {
  const {
    favorites,
    toggleFavorite,
    removeStudent,
  } = useContext(StudentContext);

  const isFavorite = favorites.includes(id);

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

          <p className="student-id">
            ID: {id}
          </p>
        </div>

        <button
          className={`favorite-button ${
            isFavorite ? "favorite-active" : ""
          }`}
          onClick={() => toggleFavorite(id)}
        >
          {isFavorite ? "★" : "☆"}
        </button>
      </div>

      <p className="major">{major}</p>

      <div className="student-stats">
        <StatBadge
          label="GPA"
          value={gpa}
        />

        <StatBadge
          label="Credits"
          value={90}
        />
      </div>

      <div className="courses">
        <p className="course-title">
          Enrolled Courses
        </p>

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

      <button
        className="remove-button"
        onClick={() => removeStudent(id)}
      >
        Remove Student
      </button>
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
};

export default StudentCard;