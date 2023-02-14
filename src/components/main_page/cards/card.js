import React from "react";
import './card.css'

const Card = (props)=>{


    return (
        <div className="card">

            <a className="card_text">{props.text}</a>

        </div>
    );
}

export default Card;