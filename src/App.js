import "./App.css";
import Main_page from "./components/main_page/main_page";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin_dash from "./components/admin/admin_dash";
import AdminLogin from "./components/admin/admin_login/admin_login";
import FacultyLogin from "./components/faculty/facultyLogin/FacultyLogin";
import FacultyReg from "./components/faculty/facultyReg/FacultyReg";
import RegStudents from "./components/faculty/registerStudents/regStudents";
import Faculty_dash from "./components/faculty/facultyDashboard/facultyDash";
import AddQue from "./components/quiz/addQue";
import QuizzForm from "./components/faculty/quizzForm/QuizzForm";
import InActiveQuiz from "./components/faculty/quizzForm/inActive";
import StudentDash from "./components/student_dashboard/StudentDash";
import StudentLogin from "./components/student/studentLogin";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main_page />} />
          <Route exact path="admin" element={<AdminLogin />} />
          <Route exact path="faculty" element={<FacultyLogin />} />
          <Route exact path="adminDashboard" element={<Admin_dash />} />
          <Route exact path="facultyReg" element={<FacultyReg />} />
          <Route exact path="regStudents" element={<RegStudents />} />
          <Route exact path="facultyDash" element={<Faculty_dash />} />
          <Route exact path="addQue" element={<AddQue />} />
          <Route exact path="quizzform" element={<QuizzForm />} />
          <Route exact path="inactive" element={<InActiveQuiz />} />
          <Route exact path="student" element={<StudentLogin/>} />
          <Route exact path="studentDash" element={<StudentDash/>} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
