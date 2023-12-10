import React,{useContext, useEffect, useState} from "react";

import { DataContext } from "../../../controladores/Context";

function STypeDocument({ handleChange }) {
    const {GlobalState, getTypeDocument} = useContext(DataContext);

    useEffect(() => {
        getTypeDocument();
    },[]);
    return(
       
            <div className="inputContainer">
                <label className="geLabel" htmlFor="geLabel">Tipo de Documento</label>
                <select 
                    className="geInput mt-1.5" 
                    id="tipoDocumentoId" 
                    name="tipoDocumentoId"
                    onChange={(e)=>{handleChange(e)}}>
                 
                    {GlobalState.typeDocument.map((item)=>{
                            return(
                                <option key={item.id} value={item.id}>{item.nombre}</option>
                            )
                    })}
                </select>
            </div>
       
    )
}

export default STypeDocument;