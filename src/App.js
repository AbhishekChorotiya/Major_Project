import './App.css';
import Main_page from './components/main_page/main_page';
import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main_page/>} />
                {/* <Route exact path="add" element={<AddProducts />} /> */}
            </Routes>
        </BrowserRouter>
    </Fragment>
);
}

export default App;
