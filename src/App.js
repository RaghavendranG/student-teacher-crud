import { Route, Switch } from "react-router-dom";
import "./App.css";
import ErrorPage from "./Components/ErrorPage";
import Dashboard from "./Components/Dashboard";
import { student } from "./Data/Students-data";
import { teacher } from "./Data/Teachers-data";
import { createContext, useState } from "react";
import StudentList from "./Components/Students/StudentList";
import TeacherList from "./Components/Teachers/TeacherList";
import AddStudent from "./Components/Students/AddStudent";
import AddTeacher from "./Components/Teachers/AddTeacher";
import ViewStudent from "./Components/Students/ViewStudent";
import ViewTeacher from "./Components/Teachers/ViewTeacher";
import EditStudent from "./Components/Students/EditStudent";
import EditTeacher from "./Components/Teachers/EditTeacher";
export const context = createContext(null);

function App() {
  const [studentData, setStudentData] = useState(student);
  const [teacherData, setTeacherData] = useState(teacher);
  return (
    <context.Provider
      value={{ studentData, setStudentData, setTeacherData, teacherData }}
    >
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>

          <Route path="/student">
            <StudentList />
          </Route>

          <Route path="/add-student">
            <AddStudent />
          </Route>

          <Route path="/edit-student/:id">
            <EditStudent />
          </Route>

          <Route path="/view-student/:id">
            <ViewStudent />
          </Route>

          <Route path="/teacher">
            <TeacherList />
          </Route>

          <Route path="/add-teacher">
            <AddTeacher />
          </Route>

          <Route path="/edit-teacher/:id">
            <EditTeacher />
          </Route>

          <Route path="/view-teacher/:id">
            <ViewTeacher />
          </Route>
          <Route path="**">
            <ErrorPage />
          </Route>
        </Switch>
      </div>
    </context.Provider>
  );
}

export default App;
