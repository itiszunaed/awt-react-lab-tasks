import { useContext, useEffect } from "react";

import DashboardHeader from "./components/DashboardHeader";
import StudentCard from "./components/StudentCard";
import StatBadge from "./components/StatBadge";
import SearchBar from "./components/SearchBar";
import SortControls from "./components/SortControls";
import AddStudentForm from "./components/AddStudentForm";

import { StudentContext } from "./context/StudentContext";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const {
    students,
    query,
    sort,
    favorites,
  } = useContext(StudentContext);

  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    document.title = `Dashboard — ${filteredStudents.length} Students`;
  });

  let filteredStudents = students.filter((student) => {
    const searchText = query.toLowerCase();

    return (
      student.name.toLowerCase().includes(searchText) ||
      student.major.toLowerCase().includes(searchText)
    );
  });

  if (sort === "name") {
    filteredStudents = [...filteredStudents].sort(
      (a, b) => a.name.localeCompare(b.name)
    );
  }

  if (sort === "gpa") {
    filteredStudents = [...filteredStudents].sort(
      (a, b) => b.gpa - a.gpa
    );
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <DashboardHeader
        title="Student Dashboard"
        tagline="Manage student information and academic records"
        favoriteCount={favorites.length}
      />

      <main className="container">
        <section className="welcome-section">
          <div>
            <h2>Welcome to the Dashboard</h2>

            <p>
              View and manage student academic information.
            </p>
          </div>

          <div className="summary">
            <StatBadge
              label="Students"
              value={students.length}
            />

            <StatBadge
              label="Favorites"
              value={favorites.length}
            />
          </div>
        </section>

        <AddStudentForm />

        <section id="students">
          <div className="student-controls">
            <SearchBar />

            <SortControls />
          </div>

          <div className="student-heading">
            <h2 className="section-title">
              Students
            </h2>

            <p>
              Showing {filteredStudents.length} student(s)
            </p>
          </div>

          {filteredStudents.length === 0 ? (
            <div className="no-results">
              <h3>No students found</h3>

              <p>
                Try searching with another name or major.
              </p>
            </div>
          ) : (
            <div className="student-grid">
              {filteredStudents.map((student) => (
                <StudentCard
                  key={student.id}
                  {...student}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;