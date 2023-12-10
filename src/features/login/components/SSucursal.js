import React,{useContext, useState} from "react";
import FormBox from "../../../global/components/FormBox";
import { DataContext } from "../../../controladores/Context";

function SSucursal(props) {
    const {logIn2,GlobalState} = useContext(DataContext);
    const [value,setValue] = useState(0)
    return(
        <FormBox title="Seleccionar sucursal" button="Iniciar sesion" toggle={()=>{props.toggle("")}} onclick={()=>{logIn2(value);props.toggle("")}}>
            <div className="inputContainer">
                <label className="suLabel" htmlFor="suLabel">Sucursal</label>
                <select className="suInput" id="suLabel" onChange={(e)=>{setValue(e.target.value)}} value={value}>
                    {GlobalState.user.sucursales.map((item,ind)=>{
                            return(
                                <option key={item.id} value={ind}>{item.nombre}</option>
                            )
                    })}
                </select>
            </div>
        </FormBox>
    )
}

export default SSucursal;