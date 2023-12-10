import React, { useContext, useState } from "react";
import { DataContext } from "../../../controladores/Context";
import FormBox from "../../../global/components/FormBox";

function CPassword(props) {
    const[oldPassword,setOldPassword] = useState("")
    const[newPassword1,setNewPassword1] = useState("")
    const[newPassword2,setNewPassword2] = useState("")
    const {changePassword} = useContext(DataContext);
    return(
        <FormBox title="Cambiar contraseña" button="Cambiar" toggle={()=>props.toggle("")} onclick={()=>{changePassword(oldPassword,newPassword1,newPassword2)}}>
            <div>
                <div className="inputContainer">
                    <label  htmlFor="acoLabel">Antigua contraseña</label>
                    <input type="text" onChange={(e)=>setOldPassword(e.target.value)} id="acoLabel" value={oldPassword}/>
                </div>
                <div className="inputContainer">
                    <label htmlFor="ncoLabel">Nueva contraseña</label>
                    <input type="password" onChange={(e)=>setNewPassword1(e.target.value)} id="ncoLabel"  value={newPassword1}/>
                </div>
                <div className="inputContainer">
                    <label htmlFor="rncoLabel">Repita la nueva contraseña</label>
                    <input type="password" onChange={(e)=>setNewPassword2(e.target.value)} id="rncoLabel"  value={newPassword2}/>
                </div>
            </div>
        </FormBox>
    )
}

export default CPassword;