import React,{useContext, useEffect, useState}from "react";
import Navbar from '../../../global/components/Navbar';
import Menu from '../../../global/components/Menu';
import { DataContext } from "../../../controladores/Context";
import { useNavigate } from "react-router-dom";

function ChangePassword(props) {
  const [data,setData] = useState(
    {
      oldPassword:"",
      newPassword1:"",
      newPassword2:""
    }
  );
  const navigate = useNavigate()

  function handleChange(event) {
    const { name, value } = event.target
    setData({
        ...data,
        [name]: value
    })
  }
  async function sendPassword() {
    const y =  await changePassword(data.oldPassword,data.newPassword1,data.newPassword2)
    console.log(y)
    if(y.data){
        navigate("/")
    }
  }
  const {changePassword,GlobalState} = useContext(DataContext);
  return (
        <div className="contentContainer">
            <div className="form">
                <h1>Cambiar contraseña</h1>
                <div>
                    <div className="inputContainer">
                        <label  htmlFor="acoLabel">Antigua contraseña</label>
                        <input type="text" onChange={(e)=>handleChange(e)} value={data.oldPassword} name="oldPassword" id="acoLabel" />
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="ncoLabel">Nueva contraseña</label>
                        <input type="text" onChange={(e)=>handleChange(e)} value={data.newPassword1} name="newPassword1" id="ncoLabel" />
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="rncoLabel">Repita la nueva contraseña</label>
                        <input type="text" onChange={(e)=>handleChange(e)} value={data.newPassword2} name="newPassword2" id="rncoLabel" />
                    </div>
                </div>
                <button onClick={()=>sendPassword()}>Cambiar</button>
            </div>
        </div>
  );
}

export default ChangePassword;

