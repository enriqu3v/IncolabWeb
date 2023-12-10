import React,{useContext, useEffect, useState} from "react";

import { DataContext } from "../../../controladores/Context";

function SGender({handleChange}) {
    const {GlobalState, getGender} = useContext(DataContext);

    

    useEffect(() => {
        getGender();
    },[]);
    return(
       
            <div className="inputContainer">
                <label className="geLabel" htmlFor="geLabel">Genero</label>
                <select className="geInput mt-1.5" id="generoId" name="generoId" onChange={(e)=>{handleChange(e)}} >
                 
                    {GlobalState.gender.map((item)=>{
                            return(
                                <option key={item.id} value={item.id}>{item.nombre}</option>
                            )
                    })}
                </select>
            </div>
       
    )
}

export default SGender;