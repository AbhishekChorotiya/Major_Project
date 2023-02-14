import './App.css';
import Main_page from './components/main_page/main_page';
import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin_dash from './components/admin/admin_dash';
import AdminLogin from './components/admin/admin_login/admin_login';

function App() {
  return (
    <Fragment>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main_page/>} />
                <Route exact path="admin" element={<AdminLogin />} />
            </Routes>
        </BrowserRouter>
    </Fragment>
);
}

export default App;
