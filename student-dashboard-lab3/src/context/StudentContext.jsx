import {
  createContext,
  useEffect,
  useState,
} from "react";

export const StudentContext = createContext();

const initialStudents = [
  {
    name: "Md. Zunead Rahman",
    id: "22-50001-1",
    avatar: "https://i.pravatar.cc/150?img=12",
    gpa: 3.58,
    major: "Computer Science and Engineering",
    courses: [
      { name: "CSE 412", color: "#dbeafe" },
      { name: "CSE 413", color: "#dcfce7" },
      { name: "CSE 414", color: "#fef3c7" },
    ],
  },
  {
    name: "Tanvir Ahmed",
    id: "22-50002-1",
    avatar: "https://i.pravatar.cc/150?img=11",
    gpa: 3.82,
    major: "Computer Science and Engineering",
    courses: [
      { name: "CSE 412", color: "#dbeafe" },
      { name: "CSE 415", color: "#fce7f3" },
      { name: "CSE 416", color: "#ede9fe" },
    ],
  },
  {
    name: "Nusrat Jahan",
    id: "22-50003-1",
    avatar: "https://i.pravatar.cc/150?img=47",
    gpa: 3.91,
    major: "Software Engineering",
    courses: [
      { name: "CSE 413", color: "#dcfce7" },
      { name: "CSE 414", color: "#fef3c7" },
      { name: "CSE 417", color: "#fee2e2" },
    ],
  },
  {
    name: "Sakib Hasan",
    id: "22-50004-1",
    avatar: "https://i.pravatar.cc/150?img=13",
    gpa: 3.45,
    major: "Computer Science and Engineering",
    courses: [
      { name: "CSE 411", color: "#e0e7ff" },
      { name: "CSE 412", color: "#dbeafe" },
      { name: "CSE 416", color: "#ede9fe" },
    ],
  },
];

export function StudentProvider({ children }) {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");

    if (savedStudents) {
      return JSON.parse(savedStudents);
    }

    return initialStudents;
  });

  const [query, setQuery] = useState("");

  const [sort, setSort] = useState("default");

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    localStorage.setItem(
      "students",
      JSON.stringify(students)
    );
  }, [students]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const removeStudent = (studentId) => {
    setStudents(
      students.filter((student) => student.id !== studentId)
    );

    setFavorites(
      favorites.filter((id) => id !== studentId)
    );
  };

  const toggleFavorite = (studentId) => {
    if (favorites.includes(studentId)) {
      setFavorites(
        favorites.filter((id) => id !== studentId)
      );
    } else {
      setFavorites([...favorites, studentId]);
    }
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        query,
        setQuery,
        sort,
        setSort,
        favorites,
        toggleFavorite,
        addStudent,
        removeStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}