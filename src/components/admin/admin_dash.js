import React from "react";
import './admin_dash.css';

const Admin_dash = ()=>{

    document.addEventListener("visibilitychange", () => {
        // it could be either hidden or visible
        document.title = document.visibilityState;  
        console.log(document.visibilityState)  
    });

    return (
        <div className="outter">

            <div className="navbar">

                <a className="nav_text">Admin Panel</a>

            </div>
            <div className="content">
                <h1 className="heading">Dashboard</h1>

                <div className="button_div">
                    <a href="/">
                        Manage Students
                    </a>
                    <a href="/facultyReg">
                        Register Faculty
                    </a>
                </div>

            </div>

        </div>
    )

}

export default Admin_dash;