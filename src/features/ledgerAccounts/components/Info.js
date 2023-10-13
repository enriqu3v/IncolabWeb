import React,{useContext, useEffect, useState}from "react";
import DataTables2 from "../../../global/components/DataTables2";
import Menu from "../../../global/components/Menu";
import Navbar from "../../../global/components/Navbar";
import FormBox from "../../../global/components/FormBox";
import { DataContext } from "../../../controladores/Context";
import { FaPencilAlt, FaTrashAlt, FaUserCheck, FaUserTimes } from "react-icons/fa";
import {MdPrint} from "react-icons/md"


function Info(props){
  const [data,setData] = useState({
      cod:0,
      detalle:"",
      tipoCuenta:"",
      tipoImpuesto:"",
      naturaleza:"",
      reqBase:false,
      difFiscal:false,
      estado:true
    });
    const {createPuc,getTypesOfPucs,getPucsJerarquia, getTypesOfTaxes,GlobalState} = useContext(DataContext);
    useEffect(() => {
      getTypesOfPucs()
      getTypesOfTaxes()
    },[]);
    function handleChange(event) {
      const { name, value } = event.target
      setData((prevState)=>({
          ...prevState,
          [name]: value
      }))
    }
    async function handleChange2(event) {
      const { name, value } = event.target
      if(value.length>7){
        const respons = await getPucsJerarquia(value)
        console.log(respons.data)
        setData((prevState)=>({
            ...prevState,
            get: respons.data.data,
        }))
        respons.data.data.forEach((element,id) => {
          if(element.descripcion != null){
            // eslint-disable-next-line default-case
            switch(id){
              case 0:
                  setData((prevState)=>({
                      ...prevState,
                      clase: element.descripcion,
                  }))
              break;
              case 1:
                  setData((prevState)=>({
                      ...prevState,
                      grupo: element.descripcion,
                  }))
              break;
              case 2:
                  setData((prevState)=>({
                      ...prevState,
                      cuenta: element.descripcion,
                  }))
              break;
              case 3:
                  setData((prevState)=>({
                      ...prevState,
                      subCuenta: element.descripcion,
                  }))
              break;
            }
          }
        });
      } 
      setData((prevState)=>({
          ...prevState,
          codAuxiliar: value,
          codClase: value.toString().slice(0, 1),
          codGrupo: value.toString().slice(0, 2),
          codCuenta: value.toString().slice(0, 4),
          codSubCuenta: value.toString().slice(0, 6)
      }))
    }
    async function CreatePuc(){
      const y =  await createPuc(data);
      if(y.data){
          props.toggle("")
      }
    }
    function action(){
      if(props.data.codigo>999999){
        if(props.data.estado){
          return(
            <button style={{width:"30px",backgroundColor:"#FF5F15"}}  onClick={()=>props.changeStatePuc(props.data.id,!props.data.estado)} className="mr-1"><FaUserTimes  className="cPointer" size="12px"/></button>
          )
        }else{
          return(
            <button style={{width:"30px",backgroundColor:"green"}}  onClick={()=>props.changeStatePuc(props.data.id,!props.data.estado)} className="mr-1"><FaUserCheck  className="cPointer" size="12px"/></button>
          )
        }
      }
      return null;
    }
    return( 
            <div className="pl-5 d-flex fd-column">
              <div className="cpInputContainer">
                <div className="inputContainer">  
                    <label htmlFor="state">Cuenta</label>
                  <div className="d-flex">
                    <input type="number" className="mr-2 lAInput1"value={props.data.codigo} name="codAuxiliar" id="acoLabel"/>
                    <input type="text" disabled value={props.data.nombre} name="auxiliar" id="acoLabel"/>
                  </div>
                </div>  
              </div>
              <div className="cpInputContainer">
                <div className="inputContainer w100">
                  <label htmlFor="state">Tipo de cuenta</label>
                  <select  id="state" disabled value={props.data.idPucTipo} 
                  name="tipoCuenta"  className="w100">
                    {[
                        <option value={0} key={0}></option>,
                      GlobalState.typesOfPucs.map((dt,id)=>(
                        <option value={dt.id} key={id}>{dt.nombre}</option>
                        )
                      )]
                    }
                  </select>
                </div>
              </div>
              <div className="cpInputContainer">
                <div className="inputContainer w100">
                  <label htmlFor="state">Tipo de impuesto</label>
                  <select  id="state" disabled value={props.data.idTipoImpuesto} name="tipoImpuesto"
                   className="w100">
                    {[
                        <option value={0} key={0}></option>,
                      GlobalState.typesOfTaxes.map((dt,id)=>(
                        <option value={dt.id} key={id}>{dt.nombre}</option>
                        )
                      )]
                    }
                  </select>
                </div>
              </div>
              <div className="cpInputContainer">
                <div className="inputContainer w100">
                  <label htmlFor="state">Naturaleza de la cuenta</label>
                  <select  id="state" disabled value={props.data.pacNaturaleza} name="naturaleza"
                   className="w100">
                      <option value={0}>Debito</option>
                      <option value={1}>Credito</option>
                  </select>
                </div>
              </div>
              <div className="cpInputContainer">
                <div className="checkboxContainer" style={{width:"100%"}}>
                  <input type="checkbox" id="reqBase" disabled  name="reqBase"checked={props.data.pacBase}/>
                  <label htmlFor="reqBase" className="fz-13">Cuenta requiere base</label>
                </div>
              </div>
              <div className="cpInputContainer" style={{width:"100%"}}>
                <div className="checkboxContainer">
                  <input type="checkbox" id="difFiscal" disabled name="difFiscal"checked={props.data.pacAjusteNiif}/>
                  <label htmlFor="difFiscal" className="fz-13">Cuenta diferencia ajuste fiscal</label>
                </div>
              </div>
              <div className="cpInputContainer" style={{width:"100%",justifyContent:"end"}}>
                <button style={{width:"30px",backgroundColor:"green"}}  onClick={()=>props.edit1()} className="mr-1"><FaPencilAlt  className="cPointer" size="12px"/></button>
                {action()}
                
                <button style={{width:"30px",backgroundColor:"red"}} onClick={()=>props.delete(props.data.id)}><FaTrashAlt  className="cPointer" size="12px"/></button>
              </div>
        </div>
  );
  
}

export default Info;

