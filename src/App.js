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
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
