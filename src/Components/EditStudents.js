import Base from "../Base/Base";
import { useNavigate, useParams } from "react-router-dom";
import { studentValidationSchema } from "./AddStudents";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";

function EditStudents({ students, setStudents }) {
  const { id } = useParams();
  const studentData = students.find((stud) => stud.id === id);
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: studentData.name,
        batch: studentData.batch,
        gender: studentData.gender,
        education: studentData.education,
      },
      validationSchema: studentValidationSchema,
      onSubmit: (updatedStudent) => {
        console.log(updatedStudent);
        updateStudent(updatedStudent);
      },
    });
  const navigate = useNavigate();

  const updateStudent = async (updatedStudent) => {
    try {
      // fetch and update data
      const response = await fetch(
        `https://664352056c6a656587068f11.mockapi.io/students/${id}`,
        {
          method: "PUT",
          body: JSON.stringify(updatedStudent),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);

      // update the student
      const studIndex = students.findIndex((stud) => stud.id === id);
      // console.log(updateStudent);

      students[studIndex] = data;
      setStudents([...students]);
      navigate("/students");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Base
      tittle={"Edit Students"}
      description={"Fill the from to edit students info"}
    >
      <form onSubmit={handleSubmit}>
        <div className="from-group">
          <h3>update Student</h3>

          <TextField
            label="Name"
            fullWidth
            sx={{ m: 1 }}
            placeholder="Enter Name of student"
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            name="name"
          />
          {touched.name && errors.name ? (
            <div style={{ color: "crimson" }}>{errors.name}</div>
          ) : (
            ""
          )}

          <TextField
            label="Batch"
            fullWidth
            sx={{ m: 1 }}
            placeholder="Enter Batch of student"
            type="text"
            value={values.batch}
            onChange={handleChange}
            onBlur={handleBlur}
            name="batch"
          />
          {touched.batch && errors.batch ? (
            <div style={{ color: "crimson" }}>{errors.batch}</div>
          ) : (
            ""
          )}

          <TextField
            label="Gender"
            fullWidth
            sx={{ m: 1 }}
            placeholder="Enter Gender of student"
            type="text"
            value={values.gender}
            onChange={handleChange}
            onBlur={handleBlur}
            name="gender"
          />
          {touched.gender && errors.gender ? (
            <div style={{ color: "crimson" }}>{errors.gender}</div>
          ) : (
            ""
          )}

          <TextField
            label="Education"
            fullWidth
            sx={{ m: 1 }}
            placeholder="Enter Education of student"
            type="text"
            value={values.education}
            onChange={handleChange}
            onBlur={handleBlur}
            name="education"
          />
          {touched.education && errors.education ? (
            <div style={{ color: "crimson" }}>{errors.education}</div>
          ) : (
            ""
          )}

          <div>
            <Button type="submit" variant="contained">
              Update Students
            </Button>
          </div>
        </div>
      </form>
    </Base>
  );
}

export default EditStudents;

// import Base from "../Base/Base";
// import { useNavigate, useParams } from "react-router-dom";
// import { studentValidationSchema } from "./AddStudents";
// import { useFormik } from "formik";
// import { Button, TextField } from "@mui/material";

// function EditStudents({ students, setStudents }) {
//   const { id } = useParams();
//   const studentData = students.find((stud) => stud.id === id);
//   const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
//     useFormik({
//       initialValues: {
//         name: studentData.name,
//         batch: studentData.batch,
//         gender: studentData.gender,
//         education: studentData.education,
//       },
//       validationSchema: studentValidationSchema,
//       onSubmit: (updatedStudent) => {
//         console.log(updatedStudent);
//         updateStudent(updatedStudent);
//       },
//     });
//   const navigate = useNavigate();

//   const updateStudent = async (updatedStudent) => {
//     try {
//       //fetch and update data
//       const response = await fetch(
//         `https://664352056c6a656587068f11.mockapi.io/students/${id}`,
//         {
//           method: "PUT",
//           body: JSON.stringify(updatedStudent),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const data = await response.json();
//       console.log(data);
//       //update the student
//       const studIndex = students.findIndex((stud) => stud.id === id);

//       //    console.log(updatedStudent)
//       students[studIndex] = data;
//       setStudents([...students]);
//       navigate("/students");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Base
//       title={"Edit Student"}
//       description={"Fill the form to edit student info"}
//     >
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <h3>Add Student</h3>

//           <TextField
//             label="Name"
//             variant="outlined"
//             fullWidth
//             sx={{ m: 1 }}
//             placeholder="Enter Name of student"
//             type="text"
//             value={values.name}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             name="name"
//           />
//           {touched.name && errors.name ? (
//             <div style={{ color: "crimson" }}>{errors.name}</div>
//           ) : (
//             ""
//           )}

//           <TextField
//             label="Batch"
//             variant="outlined"
//             fullWidth
//             sx={{ m: 1 }}
//             placeholder="Enter Batch of student"
//             type="text"
//             value={values.batch}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             name="batch"
//           />
//           {touched.batch && errors.batch ? (
//             <div style={{ color: "crimson" }}>{errors.batch}</div>
//           ) : (
//             ""
//           )}

//           <TextField
//             label="Gender"
//             variant="outlined"
//             fullWidth
//             sx={{ m: 1 }}
//             placeholder="Enter Gender of student"
//             type="text"
//             value={values.gender}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             name="gender"
//           />
//           {touched.gender && errors.gender ? (
//             <div style={{ color: "crimson" }}>{errors.gender}</div>
//           ) : (
//             ""
//           )}

//           <TextField
//             label="Education"
//             variant="outlined"
//             fullWidth
//             sx={{ m: 1 }}
//             placeholder="Enter Education of student"
//             type="text"
//             value={values.education}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             name="education"
//           />
//           {touched.education && errors.education ? (
//             <div style={{ color: "crimson" }}>{errors.education}</div>
//           ) : (
//             ""
//           )}
//           <div>
//             <Button type="submit" variant="contained">
//               Update Students
//             </Button>
//           </div>
//         </div>
//       </form>
//     </Base>
//   );
// }

// export default EditStudents;
