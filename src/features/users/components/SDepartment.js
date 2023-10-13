import React,{useContext, useEffect, useState} from "react";

import { DataContext } from "../../../controladores/Context";

function SDeparment(props) {
    const {GlobalState, getDepartment, getCity} = useContext(DataContext);
    const [departamento,setDepartamento] = useState(0);
    const [scity,setCity] = useState(0);
   
    useEffect(() => {
        getDepartment();
    },[]);

    useEffect(() => {
      getCity(departamento);
   
    },[departamento]);

  
   
    return(

       
        <div className="cuInputContainer">
            <div className="inputContainer">
                <label className="dsLabel" htmlFor="dsLabel">Departamento</label>
                <select 
                    className="dsInput" 
                    id="dsLabel" 
                    name="departamento" 
                    value={departamento} 
                    onChange={(e) => setDepartamento(e.target.value)}
                   >

                   
                    {GlobalState.department.map((item)=>{
                            return(
                                <option key={item.id} value={item.id}>{item.nombre}</option>
                            )
                    })}
                </select>
            </div>

            <div className="inputContainer">
                <label className="csLabel" htmlFor="csLabel">Ciudad</label>
                <select 
                    className="csInput" 
                    id="municipioId" 
                    name="municipioId"
                    onChange={(e)=>{props.handleChange(e)}}>
                  
                    {GlobalState.city.map((item)=>{
                            return(
                                <option key={item.municipioId} value={item.municipioId}>{item.codigo}</option>
                            )
                    })}
                </select>
            </div>
        </div>    

            

            
       
    )
}

export default SDeparment;