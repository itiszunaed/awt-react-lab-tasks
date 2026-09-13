import { useEffect, useState } from "react";

import DashboardHeader from "./components/DashboardHeader";
import StudentCard from "./components/StudentCard";
import StatBadge from "./components/StatBadge";
import SearchBar from "./components/SearchBar";
import SortControls from "./components/SortControls";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");

  const [favorites, setFavorites] = useState([]);

  const [sort, setSort] = useState("default");

  useEffect(() => {
    const timer = setTimeout(() => {
      const studentData = [
    {
      name: "Rahim",
      id: "123",
      avatar: "https://api.dicebear.com/10.x/line-face/svg?seed=Milo",
      gpa: 3.58,
      major: "Computer Science and Engineering",
      courses: [
        { name: "CSE 412", color: "#dbeafe" },
        { name: "CSE 413", color: "#dcfce7" },
        { name: "CSE 414", color: "#fef3c7" },
      ],
    },
    {
      name: "Karim",
      id: "456",
      avatar: "https://api.dicebear.com/10.x/line-face/svg?seed=Milo",
      gpa: 3.82,
      major: "Computer Science and Engineering",
      courses: [
        { name: "CSE 412", color: "#dbeafe" },
        { name: "CSE 415", color: "#fce7f3" },
        { name: "CSE 416", color: "#ede9fe" },
      ],
    },
    {
      name: "Sakib",
      id: "789",
      avatar: "https://api.dicebear.com/10.x/line-face/svg?seed=Milo",
      gpa: 3.91,
      major: "Software Engineering",
      courses: [
        { name: "CSE 413", color: "#dcfce7" },
        { name: "CSE 414", color: "#fef3c7" },
        { name: "CSE 417", color: "#fee2e2" },
      ],
    },
    {
      name: "Rakib",
      id: "234",
      avatar: "https://api.dicebear.com/10.x/line-face/svg?seed=Milo",
      gpa: 3.45,
      major: "Computer Science and Engineering",
      courses: [
        { name: "CSE 411", color: "#e0e7ff" },
        { name: "CSE 412", color: "#dbeafe" },
        { name: "CSE 416", color: "#ede9fe" },
      ],
    },
  ];

      setStudents(studentData);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.title = `Dashboard — ${filteredStudents.length} Students`;
  });

  const handleFavorite = (studentId) => {
    if (favorites.includes(studentId)) {
      setFavorites(
        favorites.filter((id) => id !== studentId)
      );
    } else {
      setFavorites([...favorites, studentId]);
    }
  };

  let filteredStudents = students.filter((student) => {
    const searchText = query.toLowerCase();

    return (
      student.name.toLowerCase().includes(searchText) ||
      student.major.toLowerCase().includes(searchText)
    );
  });

  if (sort === "name") {
    filteredStudents = [...filteredStudents].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  if (sort === "gpa") {
    filteredStudents = [...filteredStudents].sort(
      (a, b) => b.gpa - a.gpa
    );
  }

  return (
    <div>
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
              View and search student academic information.
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

        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading students...</p>
          </div>
        ) : (
          <section id="students">
            <div className="student-controls">
              <SearchBar
                query={query}
                setQuery={setQuery}
              />

              <SortControls
                sort={sort}
                setSort={setSort}
              />
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
                    name={student.name}
                    id={student.id}
                    avatar={student.avatar}
                    gpa={student.gpa}
                    major={student.major}
                    courses={student.courses}
                    favorite={favorites.includes(student.id)}
                    onFavorite={handleFavorite}
                  />
                ))}
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}

export default App;