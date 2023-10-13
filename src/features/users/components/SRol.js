import React,{useContext, useEffect, useState} from "react";

import { DataContext } from "../../../controladores/Context";

function SRol({handleChange}) {
    const {GlobalState, getProfiles} = useContext(DataContext);
   
    useEffect(() => {
        getProfiles();
    },[]);
    return(
       
            <div className="inputContainer">
                <label className="geLabel" htmlFor="geLabel">Rol</label>
                <select 
                    className="geInput" 
                    id="perfilId" 
                    name="perfilId"
                    onChange={(e)=>{handleChange(e)}} >
                 
                    {GlobalState.profiles.map((item)=>{
                            return(
                                <option key={item.codigo} value={item.codigo}>{item.detalle}</option>
                            )
                    })}
                </select>
            </div>
       
    )
}

export default SRol;