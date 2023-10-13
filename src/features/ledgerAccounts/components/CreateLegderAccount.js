import React,{useContext, useEffect, useState}from "react";
import DataTables2 from "../../../global/components/DataTables2";
import Menu from "../../../global/components/Menu";
import Navbar from "../../../global/components/Navbar";
import FormBox from "../../../global/components/FormBox";
import { DataContext } from "../../../controladores/Context";
import { FaPencilAlt, FaTrashAlt, FaUserCheck, FaUserTimes } from "react-icons/fa";
import {MdPrint} from "react-icons/md"


function CreateLedgerAccount(props){
  const [data,setData] = useState({
      codClase:0,
      codGrupo:0,
      codCuenta:0,
      codSubCuenta: 0,
      codAuxiliar:0 ,
      clase:"",
      grupo:"",
      cuenta:"",
      subCuenta: "",
      auxiliar:"" ,
      tipoCuenta:"",
      tipoImpuesto:"",
      naturaleza:"",
      reqBase:false,
      difFiscal:false,
      get:[{descripcion:null},{descripcion:null},{descripcion:null},{descripcion:null}]
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
    return(
        <FormBox title="Crear cuenta contable" button="Crear" onclick={()=>CreatePuc()} toggle={()=>props.toggle("")}>
          <div className="lAFormItems">
            <div className="lAFormItem1">
              <div className="cpInputContainer">
                <div className="inputContainer">  
                    <label htmlFor="state">Auxiliar</label>
                  <div className="d-flex">
                    <input type="number" className="mr-2 lAInput1" onChange={(e)=>handleChange2(e)} value={data.codAuxiliar} name="codAuxiliar" id="acoLabel"/>
                    <input type="text" onChange={(e)=>handleChange(e)} value={data.auxiliar} name="auxiliar" id="acoLabel"/>
                  </div>
                </div>  
              </div>
              <div className="cpInputContainer">
                <div className="inputContainer">  
                    <label htmlFor="state">Clase</label>
                  <div className="d-flex">
                    <input type="number" disabled className="mr-2 lAInput1" onChange={(e)=>handleChange(e)} value={data.codClase} name="codClase" id="acoLabel"/>
                    <input type="text" disabled={data.get[0].descripcion===null?false:true} onChange={(e)=>handleChange(e)} value={data.clase} name="clase" id="acoLabel"/>
                  </div>
                </div>  
              </div>
              <div className="cpInputContainer">
                <div className="inputContainer">  
                    <label htmlFor="state">Grupo</label>
                  <div className="d-flex">
                    <input type="number" disabled className="mr-2 lAInput1" onChange={(e)=>handleChange(e)} value={data.codGrupo} name="codGrupo" id="acoLabel"/>
                    <input type="text" disabled={data.get[1].descripcion===null?false:true} onChange={(e)=>handleChange(e)} value={data.grupo} name="grupo" id="acoLabel"/>
                  </div>
                </div>  
              </div>
              <div className="cpInputContainer">
                <div className="inputContainer">  
                    <label htmlFor="state">Cuenta</label>
                  <div className="d-flex">
                    <input type="number" disabled className="mr-2 lAInput1" onChange={(e)=>handleChange(e)} value={data.codCuenta} name="codCuenta" id="acoLabel"/>
                    <input type="text" disabled={data.get[2].descripcion===null?false:true} onChange={(e)=>handleChange(e)} value={data.cuenta} name="cuenta" id="acoLabel"/>
                  </div>
                </div>  
              </div>
              <div className="cpInputContainer">
                <div className="inputContainer">  
                    <label htmlFor="state">Sub cuenta</label>
                  <div className="d-flex">
                    <input type="number" disabled className="mr-2 lAInput1" onChange={(e)=>handleChange(e)} value={data.codSubCuenta} name="codSubCuenta" id="acoLabel"/>
                    <input type="text" disabled={data.get[3].descripcion===null?false:true} onChange={(e)=>handleChange(e)} value={data.subCuenta} name="subCuenta" id="acoLabel"/>
                  </div>
                </div>  
              </div>
            </div>
            <div className="lAFormItem2">
              <div className="cpInputContainer">
                <div className="inputContainer">
                  <label htmlFor="state">Tipo de cuenta</label>
                  <select  id="state" onChange={(e)=>handleChange(e)} value={data.tipoCuenta} 
                  name="tipoCuenta">
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
                <div className="inputContainer">
                  <label htmlFor="state">Tipo de impuesto</label>
                  <select  id="state" onChange={(e)=>handleChange(e)} value={data.tipoImpuesto} name="tipoImpuesto">
                    {[
                      <option value={""} key={0}></option>,
                      GlobalState.typesOfTaxes.map((dt,id)=>(
                        <option value={dt.id} key={id}>{dt.nombre}</option>
                        )
                      )]
                    }
                  </select>
                </div>
              </div>
              <div className="cpInputContainer">
                <div className="inputContainer">
                  <label htmlFor="state">Naturaleza de la cuenta</label>
                  <select  id="state" onChange={(e)=>handleChange(e)} value={data.naturaleza} name="naturaleza">
                      <option value={0}>Debito</option>
                      <option value={1}>Credito</option>
                  </select>
                </div>
              </div>
              <div className="cpInputContainer">
                <div className="checkboxContainer">
                  <input type="checkbox" id="reqBase"  name="reqBase" onChange={(e)=>setData((prevState)=>({...prevState,reqBase:!prevState.reqBase}))} value={data.reqBase}/>
                  <label htmlFor="reqBase" className="fz-13">Cuenta requiere base</label>
                </div>
              </div>
              <div className="cpInputContainer">
                <div className="checkboxContainer">
                  <input type="checkbox" id="difFiscal" name="difFiscal" onChange={(e)=>setData((prevState)=>({...prevState,difFiscal:!prevState.difFiscal}))} value={data.difFiscal}/>
                  <label htmlFor="difFiscal" className="fz-13">Cuenta diferencia ajuste fiscal</label>
                </div>
              </div>
            </div>
          </div>
            
        </FormBox>
  );
  
}

export default CreateLedgerAccount;

