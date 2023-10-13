import React,{useContext, useEffect, useState}from "react";
import DataTables2 from "../../../global/components/DataTables2";
import Menu from "../../../global/components/Menu";
import Navbar from "../../../global/components/Navbar";
import FormBox from "../../../global/components/FormBox";
import { DataContext } from "../../../controladores/Context";
import { FaPencilAlt, FaTrashAlt, FaUserCheck, FaUserTimes } from "react-icons/fa";
import {MdPrint} from "react-icons/md"


function CreateBranch(props){
  const [data,setData] = useState({
    codigo: "",
    nombre: "",
    direccion: "",
    telefono: "",
    departamento:0,
    idMunicipio: 0
  });
    const {createBranch,getDepartamentos,getMunicipios,GlobalState} = useContext(DataContext);
    function handleChange(event) {
      const { name, value } = event.target
      setData((prevState)=>({
          ...prevState,
          [name]: value
      }))
    }
    async function handleChange2(event) {
      const { name, value } = event.target
      if(value =="true"){
        setData((prevState)=>({
            ...prevState,
            [name]: true
        }))
      }else{
        setData((prevState)=>({
            ...prevState,
            [name]: false
        }))
      }
    }
    async function CreateBranch(){
      const y =  await createBranch(data);
      if(y.data){
          props.toggle("")
      }
    }
    function muni(){
      var dta = GlobalState.municipios
      if(parseInt(data.departamento)!==0){
        dta = dta.filter(elm=>elm.idDepartamento === parseInt(data.departamento))
      }
      return(
        [
          <option value={0} key={0}></option>,
          dta.map((dt,id)=>(
            <option value={dt.id} key={id}>{dt.codigo}</option>
            )
          )]
      )
    }
    return(
        <FormBox title="Crear sucursal" button="Crear" onclick={()=>CreateBranch()} toggle={()=>props.toggle("")}>
          <div className="formItems">
            <div className="cpInputContainer">
              <div className="inputContainer">
                
              <label  htmlFor="acoLabel">Codigo</label>
                    <input type="text" onChange={(e)=>handleChange(e)} value={data.codigo} name="codigo" id="acoLabel"/>
              </div>
              <div className="inputContainer">
                <label htmlFor="state">Direccion</label>
                <input type="text" onChange={(e)=>handleChange(e)} value={data.direccion}  name="direccion" id="acoLabel"/>
              </div>
            </div>
            <div className="cpInputContainer">
              <div className="inputContainer">
                <label  htmlFor="acoLabel">Nombre</label>
                <input type="text" onChange={(e)=>handleChange(e)} value={data.nombre} name="nombre" id="acoLabel"/>
              </div>
              <div className="inputContainer">
                <label  htmlFor="acoLabel">Telefono</label>
                <input type="text" onChange={(e)=>handleChange(e)} value={data.telefono} name="telefono" id="acoLabel"/>
              </div>
            </div>
            <div className="cpInputContainer">
              <div className="inputContainer">
                <label htmlFor="state">Departamento</label>
                <select  id="state" onChange={(e)=>handleChange(e)} value={data.departamento} 
                name="departamento">
                  {[
                    <option value={0} key={0}></option>,
                    GlobalState.departamentos.map((dt,id)=>(
                      <option value={dt.id} key={id}>{dt.nombre}</option>
                      )
                    )]
                  }
                </select>
              </div>
              <div className="inputContainer">
                <label htmlFor="state">Ciudad</label>
                <select  id="state" onChange={(e)=>handleChange(e)} value={data.idMunicipio} 
                name="idMunicipio">
                  {muni()}
                </select>
              </div>
            </div>
          </div>
        </FormBox>
  );
  
}

export default CreateBranch;

