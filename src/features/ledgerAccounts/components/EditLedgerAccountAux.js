import React,{useContext, useEffect, useState}from "react";
import DataTables2 from "../../../global/components/DataTables2";
import Menu from "../../../global/components/Menu";
import Navbar from "../../../global/components/Navbar";
import FormBox from "../../../global/components/FormBox";
import { DataContext } from "../../../controladores/Context";
import { FaPencilAlt, FaTrashAlt, FaUserCheck, FaUserTimes } from "react-icons/fa";
import {MdPrint} from "react-icons/md"


function EditLedgerAccountAux(props){
  const [data,setData] = useState({
    id:0,
    codigo:0,
    nombre:"",
    auxiliar:false,
    idPucTipo:0,
    idTipoImpuesto:0,
    pacBase:false,
    pacAjusteNiif:false,
    pacNaturaleza:0
  });
    const {changePuc,getTypesOfPucs,getPucsJerarquia, getTypesOfTaxes,GlobalState} = useContext(DataContext);
    useEffect(() => {
      getTypesOfPucs()
      getTypesOfTaxes()
      setData(props.data);
    },[]);
    function handleChange(event) {
      const { name, value } = event.target
      setData((prevState)=>({
          ...prevState,
          [name]: value
      }))
    }
    function handleChange2(event) {
      const { name, checked } = event.target
      setData((prevState)=>({
          ...prevState,
          [name]: checked
      }))
    }
    return( 
            <FormBox title="Editar cuenta contable" button="Editar" onclick={()=>props.edit2(data.id,data)} toggle={()=>props.toggle("")}>
            <div className="w100 d-flex fd-column">
              <div className="cpInputContainer">
                <div className="inputContainer">  
                    <label htmlFor="state">Cuenta</label>
                  <div className="d-flex">
                    <input type="number" disabled className="mr-2 lAInput1"value={data.codigo} name="codigo" id="acoLabel"/>
                    <input type="text" value={data.nombre} onChange={(e)=>{handleChange(e)}} name="nombre" id="acoLabel"/>
                  </div>
                </div>  
              </div>
              <div className="cpInputContainer">
                <div className="inputContainer w100">
                  <label htmlFor="state">Tipo de cuenta</label>
                  <select  id="state" value={data.idPucTipo} onChange={(e)=>{handleChange(e)}} 
                  name="idPucTipo"  className="w100">
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
                  <select  id="state" value={data.idTipoImpuesto} onChange={(e)=>{handleChange(e)}} name="idTipoImpuesto"
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
                  <select  id="state" value={data.pacNaturaleza} onChange={(e)=>{handleChange(e)}} name="pacNaturaleza"
                   className="w100">
                      <option value={0}>Debito</option>
                      <option value={1}>Credito</option>
                  </select>
                </div>
              </div>
              <div className="cpInputContainer">
                <div className="checkboxContainer" style={{width:"100%"}}>
                  <input type="checkbox" id="reqBase"  name="pacBase" onChange={(e)=>{handleChange2(e)}} checked={data.pacBase}/>
                  <label htmlFor="reqBase" className="fz-13">Cuenta requiere base</label>
                </div>
              </div>
              <div className="cpInputContainer" style={{width:"100%"}}>
                <div className="checkboxContainer">
                  <input type="checkbox" id="difFiscal" name="pacAjusteNiif" onChange={(e)=>{handleChange2(e)}} checked={data.pacAjusteNiif}/>
                  <label htmlFor="difFiscal" className="fz-13">Cuenta diferencia ajuste fiscal</label>
                </div>
              </div>
            </div>
        </FormBox>
  );
  
}

export default EditLedgerAccountAux;

