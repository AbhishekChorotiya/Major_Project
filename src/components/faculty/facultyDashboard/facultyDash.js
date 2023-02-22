import React from "react";
import './facultyDash.css';

const Faculty_dash = ()=>{

    return (
        <div className="outter">

            <div className="navbar">

                <a className="nav_text">Faculty</a>

            </div>
            <div className="content">
                <h1 className="heading">Dashboard</h1>

                <div className="button_div">
                    <a href="/">
                        Manage Students
                    </a>
                    <a href="/facultyReg">
                        Add Courses
                    </a>
                </div>

            </div>

        </div>
    )

}

export default Faculty_dash;