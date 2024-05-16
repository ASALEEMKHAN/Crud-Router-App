// CRUD Application:-

import { useEffect, useState } from "react";
import "./App.css";
import Students from "./Components/Students";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import AddStudents from "./Components/AddStudents";
import EditStudents from "./Components/EditStudents";
import NoPage from "./Components/NoPage";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudentDetails = async () => {
      const res = await fetch(
        `https://664352056c6a656587068f11.mockapi.io/students`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      setStudents(data);
    };
    getStudentDetails();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Dashboard />} />

        <Route
          path="/students"
          element={<Students students={students} setStudents={setStudents} />}
        />

        <Route
          path="/add-students"
          element={
            <AddStudents students={students} setStudents={setStudents} />
          }
        />

        <Route
          path="/edit/:id"
          element={
            <EditStudents students={students} setStudents={setStudents} />
          }
        />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;

/*
CRUD:-
read - done
update - done
delete - done
create - done
*/
