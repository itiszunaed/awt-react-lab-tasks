import DashboardHeader from "./components/DashboardHeader";
import StudentCard from "./components/StudentCard";
import StatBadge from "./components/StatBadge";

function App() {
  const students = [
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

  return (
    <div>
      <DashboardHeader
        title="Student Dashboard"
        tagline="Manage student information and academic records"
      />

      <main className="container">
        <section className="welcome-section">
          <div>
            <h2>Welcome to the Dashboard</h2>
            <p>
              Here you can view student information and academic details.
            </p>
          </div>

          <div className="summary">
            <StatBadge label="Students" value={students.length} />
            <StatBadge label="Courses" value={12} />
          </div>
        </section>

        <section id="students">
          <h2 className="section-title">Students</h2>

          <div className="student-grid">
            {students.map((student) => (
              <StudentCard
                key={student.id}
                name={student.name}
                id={student.id}
                avatar={student.avatar}
                gpa={student.gpa}
                major={student.major}
                courses={student.courses}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;