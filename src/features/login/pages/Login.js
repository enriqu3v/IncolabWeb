import React,{useState,useContext} from "react";
import "../utils/styles/IniciarSesion.css"
import Carrousel from "../components/Carrousel";
import CPassword from "../../users/pages/CPassword"
import SSucursal from "../components/SSucursal";
import { DataContext } from "../../../controladores/Context";

function Login() {
    const [toggle,setToggle] = useState("");
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");
    const {logIn1,GlobalState} = useContext(DataContext);
    async function logIn(){
        const y =  await logIn1({user,password})
        console.log(y)
        if(y.data){
            setToggle("ssucursal");
        }
    }
    function renderSwitch(){
        switch(toggle) {
            case "ssucursal":
                return(
                    <SSucursal toggle={Toggle}/>
                )
                break;
            default:
                return null;
                break;
        }
      }
    const Toggle =(x)=>setToggle(x);
                return(
                        <div  className="logInContainer">
                            <div className="pt1">
                                <Carrousel/>
                            </div>
                            <div className="pt2">
                                <div className="formLogin">
                                    <div className="igd" style={{marginBottom:"40px"}}></div>
                                    <div className="inputContainer" style={{marginBottom:"20px"}}>
                                        <label  htmlFor="usLabel" style={{fontSize:"20px",height:"22px"}}>Usuario</label>
                                        <input type="text" value={user} onChange={e => setUser(e.target.value)} id="usLabel"/>
                                    </div>
                                    <div className="inputContainer" style={{marginBottom:"20px"}}>
                                        <label  htmlFor="coLabel" style={{fontSize:"20px",height:"22px"}}>Contraseña</label>
                                        <input type="password" value={password} onChange={e => setPassword(e.target.value)}  id="coLabel"/>
                                    </div>
                                    <div className="aditionals"  style={{marginBottom:"40px"}}>
                                        <div className="checkboxContainer remember">
                                            <input type="checkbox" id="recordarme"/>
                                            <label htmlFor="recordarme" className="fz-13">Recordarme mas tarde</label>
                                        </div>
                                        <a onClick={()=>alert("funcionalidad cambiar contraseña deshabilitada (desde este punto)")} style={{fontSize:"13px"}}>Olvide mi contraseña</a>
                                    </div>
                                    <button onClick={()=>logIn()} style={{width:"260px",height:"40px", fontSize:"20px"}}>Iniciar Sesion</button>
                                </div>
                            </div>
                            {renderSwitch()}
                        </div>
                    
                )
}
            
        
  export default Login;
  