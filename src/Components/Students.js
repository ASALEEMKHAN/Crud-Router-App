import React from "react";
import Base from "../Base/Base";
import { useNavigate } from "react-router-dom";
import { Button, Paper } from "@mui/material";

const Students = ({ students, setStudents }) => {
  const navigate = useNavigate();
  const deleteStudent = async (studentId) => {
    try {
      const res = await fetch(
        `https://664352056c6a656587068f11.mockapi.io/students/${studentId}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      console.log(data);
      const removedStudent = students.filter(
        (student) => student.id !== studentId
      );
      setStudents(removedStudent);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Base
      tittle={"Students Info"}
      description={"All students info will be displayed"}
    >
      <div className="stud-collection">
        {students.map((stud, idx) => (
          <Paper elevation={6} className="stud-card" key={idx}>
            <h2>{stud.name}</h2>
            <p>Batch: {stud.batch}</p>
            <p>Gender: {stud.gender}</p>
            <p>Education: {stud.education}</p>
            <div className="card-btn-group">
              <Button
                color="secondary"
                onClick={() => navigate(`/edit/${stud.id}`)}
              >
                Edit
              </Button>
              <Button color="error" onClick={() => deleteStudent(stud.id)}>
                Delete
              </Button>
            </div>
          </Paper>
        ))}
      </div>
    </Base>
  );
};

export default Students;
