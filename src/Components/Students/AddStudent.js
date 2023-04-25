import React, { useState, useContext } from "react";
import { context } from '../../App'
import Base from "../../Base/Base";
import { TextField, Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const AddStudent = () => {

  const {studentData, setStudentData}= useContext(context)
  const history = useHistory()
  const [id, setId] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [grade, setGrade] = useState("");
  const [department, setDepartment] = useState("");

  const addStudent = () => {
    const newStudentData = {
        id,
        firstname,
        lastname,
        gender,
        class : grade,
        department
    }

    setStudentData([...studentData, newStudentData])

    history.push('/student')
  }

  return (
    <Base title="Add Student Data">
      <div>
        <div className="add-student">
          <TextField
            id="outlined-basic"
            label="Id"
            variant="outlined"
            size="small"
            onChange={(event) => setId(event.target.value)}
            value={id}
          />
        </div>
        <div className="add-student">
          <TextField
            id="outlined-basic"
            label="Fist Name"
            variant="outlined"
            size="small"
            onChange={(event) => setFirstName(event.target.value)}
            value={firstname}
          />
        </div>
        <div className="add-student">
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            size="small"
            onChange={(event) => setLastName(event.target.value)}
            value={lastname}
          />
        </div>
        <div className="add-student">
          <TextField
            id="outlined-basic"
            label="Gender"
            variant="outlined"
            size="small"
            onChange={(event) => setGender(event.target.value)}
            value={gender}
          />
        </div>
        <div className="add-student">
          <TextField
            id="outlined-basic"
            label="Class"
            variant="outlined"
            size="small"
            onChange={(event) => setGrade(event.target.value)}
            value={grade}
          />
        </div>
        <div className="add-student">
          <TextField
            id="outlined-basic"
            label="Department"
            variant="outlined"
            size="small"
            onChange={(event) => setDepartment(event.target.value)}
            value={department}
          />
        </div>
        <div>
          <Button variant="contained" className="btn" onClick={addStudent}>
            Add Student
          </Button>
        </div>
      </div>
    </Base>
  );
};

export default AddStudent;
