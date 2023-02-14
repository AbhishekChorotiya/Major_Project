import React from "react";
import Card from "./cards/card";
import './main_page.css'

const Main_page = ()=>{

    return (
        <div className="outter">

            <div className="navbar">

                <a className="nav_text">Main Page</a>

            </div>
            <div className="content">
                <h1 className="heading">Login as ?</h1>
                <Card text='Student'/>
                <Card text='Teacher'/>
                <Card text='Admin'/>

            </div>

        </div>
    )

}

export default Main_page;