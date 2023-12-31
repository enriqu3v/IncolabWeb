import React,{useContext, useEffect, useState} from "react";

import { DataContext } from "../../../controladores/Context";

function SRol({handleChange}) {
    const {GlobalState, getProfiles} = useContext(DataContext);
   
    useEffect(() => {
        getProfiles();
    },[]);
    return(
       
            <div className="inputContainer">
                <label className="geLabel" htmlFor="geLabel">Área</label>
                <select 
                    className="geInput mt-1.5" 
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