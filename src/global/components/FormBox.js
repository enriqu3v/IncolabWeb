import React from "react";
import { FaTimes } from 'react-icons/fa';
import "../styles/formBox.css"

function FormBox(props) {

  console.log(props)

  return (
    <div className="grayBox">
        <div className="form">
            <FaTimes fill="red" className="iconx " onClick={props.toggle}/> 
            <h1 className="m-0 bg-blue-600 container rounded-lg text-center text-4xl font-extrabold text-white">{props.title}</h1>
                {props.children}
          
            {props.onclick?<button onClick={props.onclick} className="mt-1">{props.button}</button>:<button className="mt-1">{props.button}</button>}
            
        </div>
    </div>
  );
}

export default FormBox;
