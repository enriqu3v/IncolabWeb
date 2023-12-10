import React,{useState,useContext, useEffect} from "react";
import FormBox from "../../../global/components/FormBox";
import { DataContext } from "../../../controladores/Context";

function SeeInformation(props){
    const {GlobalState,getRoles} = useContext(DataContext);
    useEffect(() => {
      getRoles()
    },[]);
    return(
        <FormBox title="Información" button="Cerrar" onclick={()=>props.toggle()} toggle={() => props.toggle()}>
            <div>
                <div className="cuInputContainer">
                    <div className="inputContainer">
                        <label  htmlFor="firstName">Nombre</label>
                        <input type="text" value={props.data.nombre} id="firstName" disabled/>
                    </div>
                    <div className="inputContainer">
                        <label  htmlFor="secondName">Nombre de usuario</label>
                        <input type="text" value={props.data.nombreUsuario} id="secondName" disabled/>
                    </div>
                </div>
                <div className="cuInputContainer">
                    <div className="inputContainer">
                        <label  htmlFor="firstLastName">Id</label>
                        <input type="text"  value={props.data.id} id="firstLastName" disabled/>
                    </div>
                    <div className="inputContainer">
                        <label  htmlFor="secondLastName">Documento</label>
                        <input type="text" value={props.data.documento} id="secondLastName" disabled/>
                    </div>
                </div>
                <div className="cuInputContainer">
                    <div className="inputContainer">
                        <label  htmlFor="phone">Estado</label>
                        <select  id="state" value={props.data.idTercero} name="idTercero" disabled>
                                <option value={true}>ACTIVO</option>
                                <option value={false}>INACTIVO</option>
                        </select>
                    </div>
                    <div className="inputContainer">
                        <label  htmlFor="email">Rol</label>
                        <select  id="state"value={props.data.rol} 
                        name="estado" disabled>
                        {[
                            GlobalState.roles.map((dt,id)=>(
                                <option value={dt.detalle} key={id}>{dt.detalle}</option>
                                )
                              )]}
                        </select>
                    </div>
                </div>



            </div>
        </FormBox>
    )
}
export default SeeInformation;