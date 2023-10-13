import React,{useContext, useEffect, useState}from "react";
import '../utils/styles/profiles.css'
import DataTables from "../../../global/components/DataTables";
import DataTables2 from "../../../global/components/DataTables2";
import Menu from "../../../global/components/Menu";
import Navbar from "../../../global/components/Navbar";
import FormBox from "../../../global/components/FormBox";
import { DataContext } from "../../../controladores/Context";
import { FaPencilAlt, FaUserCheck, FaUserCog, FaUserTimes } from "react-icons/fa";


function Profiles() {
  const [toggle,useToggle] = useState("");    
  const [data,setData] = useState(
    {
      codigo:"",
      id:"",
      state:"",
      detalle:""
    }
  );
  function handleChange(event) {
    const { name, value } = event.target
    setData({
        ...data,
        [name]: value
    })
}
  const {getProfiles,createProfile,changeProfile,GlobalState,changeStateProfile} = useContext(DataContext);
  var datafinal = GlobalState.profiles.map((dt,id)=>{
    if(dt.estado){
      return({...dt, 
        estado: 
        <div className='btnStates'>
          <div className='btnActive' onClick={()=>changeStateProfile(id,dt.codigo)}>
              <FaUserCheck/>
          </div>
        </div>,
        functionalities:
        <div className='btnFunctions'>
            <div className='btnAddFunction' onClick={()=>Toggle("gestionar permisos")}>
                <FaUserCog/>
            </div>
            <div className='btnEdit' onClick={()=>{setData({
              ...data,
              id:id
            });Toggle("editar")}}>
                <FaPencilAlt/>
            </div>
        </div>
        }
      )
    }
    return({...dt, 
      estado: 
      <div className='btnStates'>
        <div className='btnDisactive' onClick={()=>changeStateProfile(id,dt.codigo)}>
            <FaUserTimes/>
        </div>
      </div>,
      functionalities:
      <div className='btnFunctions'>
          <div className='btnAddFunction' onClick={()=>Toggle("gestionar permisos")}>
              <FaUserCog/>
          </div>
          <div className='btnEdit' onClick={()=>{setData({
              ...data,
              id:id
              });
              Toggle("editar")}}>
              <FaPencilAlt/>
          </div>
      </div>
      }
    )
})
  useEffect(() => {
    getProfiles()
  }, [toggle]);
  async function CreateProfile(){
    const y =  await createProfile(data.detalle);
    console.log(y)
    if(y.data){
        Toggle("");
    }
  }async function ChangeProfile(){
  const y =  await changeProfile(data.id,data.detalle);
  if(y.data){
      Toggle("");
  }
}
    function RenderSwitch(){
      useEffect(() => {
        if(data.id!==""){
          setData({
            ...data,
            detalle:GlobalState.profiles[data.id].detalle}
            )
        }
      }, [data.id]);
        switch(toggle) {
          case "crear":
            return(
                <FormBox title="Crear perfil" button="Crear" toggle={()=>Toggle("")} onclick={()=>CreateProfile()}>
                  <div>
                    <div className="cpInputContainer">
                      <div className="inputContainer">
                            <label  htmlFor="acoLabel">Codigo</label>
                            <input type="text"  value="#" id="acoLabel" disabled/>
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="state">Estado</label>
                            <select  id="state" onChange={(e)=>handleChange(e)} name="state"  disabled>
                                <option value={1}>ACTIVO</option>
                            </select>
                        </div>
                    </div>
                    <div className="inputContainerXl">
                        <label htmlFor="detLabel">Detalles del perfil</label>
                        <textarea type="textarea" onChange={(e)=>handleChange(e)} name="detalle" value={data.detalle} id="detLabel"/>
                    </div>
                  </div>
                </FormBox>
            )
          case "gestionar permisos":
              return(
                        <DataTables2  type="permisos" 
                        toggle={(t)=>{Toggle(t)}}
                        data={
                          [{name:"Cliente",data:[0,1,0,0,1]},
                            {name:"Consultos de cartera",data:[0,0,1,1,1]},
                            {name:"Facturacion",data:[0,1,1,1,0]}
                          ]}/>
              )
              break;
          case "editar":
              return(
                  <FormBox title="Editar perfil" button="Guardar" toggle={()=>Toggle("")} onclick={()=>ChangeProfile()}>
                      <div>
                        <div className="cpInputContainer">
                          <div className="inputContainer">
                                <label  htmlFor="acoLabel">Codigo</label>
                                <input type="text"  id="acoLabel" value={GlobalState.profiles[data.id].codigo} disabled/>
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="state">Estado</label>
                                <select  id="state" disabled value={GlobalState.profiles[data.id].estado}>
                                    <option value={true}>ACTIVO</option>
                                    <option value={false}>INACTIVO</option>
                                </select>
                            </div>
                        </div>
                        <div className="inputContainerXl">
                            <label htmlFor="detLabel">Detalles del perfil</label>
                            <textarea type="textarea" id="detLabel" value={data.detalle} onChange={(e)=>handleChange(e)} name="detalle"/>
                        </div>
                      </div>
                  </FormBox>
              )
            default:
                return null;
        }
      }
      const Toggle =(x)=>{
          useToggle(x)
        };
  return (
        <div className="contentContainer">
          <div className="form">
            <DataTables  type="profiles" 
            toggle={(t)=>{Toggle(t)}}  data={datafinal} 
            dataSchema={["Codigo","Detalles del perfil","Estado","Funcionalidades"]} buttons={[
              <button onClick={()=>{Toggle("crear");setData({
                code:"",
                id:"",
                state:"",
                detalle:""}
              );}}>Crear Perfil</button>
              ]} 
            />
          </div>
        {RenderSwitch()}
        </div>
  );
}

export default Profiles;
