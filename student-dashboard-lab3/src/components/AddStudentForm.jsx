import {
  useContext,
  useEffect,
  useState,
} from "react";
import { StudentContext } from "../context/StudentContext";

function AddStudentForm() {
  const {
    students,
    addStudent,
  } = useContext(StudentContext);

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [major, setMajor] = useState("");
  const [gpa, setGpa] = useState("");
  const [courses, setCourses] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

useEffect(() => {
  if (!success) {
    return;
  }

  const timer = setTimeout(() => {
    setSuccess(false);
  }, 3000);

  return () => clearTimeout(timer);
}, [success]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!id.trim()) {
      newErrors.id = "Student ID is required";
    } else if (!/^\d+$/.test(id)) {
      newErrors.id = "Student ID must be numeric";
    } else if (
      students.some((student) => student.id === id)
    ) {
      newErrors.id = "Student ID already exists";
    }

    if (!major.trim()) {
      newErrors.major = "Major is required";
    }

    if (gpa === "") {
      newErrors.gpa = "GPA is required";
    } else if (Number(gpa) < 0 || Number(gpa) > 4) {
      newErrors.gpa = "GPA must be between 0 and 4.0";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const courseList = courses
      .split(",")
      .map((course) => course.trim())
      .filter((course) => course !== "");

    const newStudent = {
      name: name.trim(),
      id: id.trim(),
      avatar: "https://i.pravatar.cc/150?img=68",
      gpa: Number(gpa),
      major: major.trim(),
      courses: courseList.map((course, index) => ({
        name: course,
        color: ["#dbeafe", "#dcfce7", "#fef3c7", "#fce7f3"][
          index % 4
        ],
      })),
    };

    addStudent(newStudent);

    setName("");
    setId("");
    setMajor("");
    setGpa("");
    setCourses("");
    setErrors({});
    setSuccess(true);
  };

  return (
    <section className="add-student-section">
      <h2>Add New Student</h2>

{success && (
  <div className="success-message">
    Student added successfully!
  </div>
)}
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter full name"
            />

            {errors.name && (
              <p className="error">{errors.name}</p>
            )}
          </div>

          <div className="form-group">
            <label>Student ID</label>

            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Example: 2250005"
            />

            {errors.id && (
              <p className="error">{errors.id}</p>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Major</label>

            <input
              type="text"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              placeholder="Enter major"
            />

            {errors.major && (
              <p className="error">{errors.major}</p>
            )}
          </div>

          <div className="form-group">
            <label>GPA</label>

            <input
              type="number"
              step="0.01"
              min="0"
              max="4"
              value={gpa}
              onChange={(e) => setGpa(e.target.value)}
              placeholder="0.00 - 4.00"
            />

            {errors.gpa && (
              <p className="error">{errors.gpa}</p>
            )}
          </div>
        </div>

        <div className="form-group">
          <label>Courses</label>

          <input
            type="text"
            value={courses}
            onChange={(e) => setCourses(e.target.value)}
            placeholder="Example: CSE 411, CSE 412, CSE 413"
          />
        </div>

        <button
          type="submit"
          className="add-button"
        >
          Add Student
        </button>
      </form>
    </section>
  );
}

export default AddStudentForm;