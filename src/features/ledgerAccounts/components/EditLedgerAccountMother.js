import React,{useContext, useEffect, useState}from "react";
import DataTables2 from "../../../global/components/DataTables2";
import Menu from "../../../global/components/Menu";
import Navbar from "../../../global/components/Navbar";
import FormBox from "../../../global/components/FormBox";
import { DataContext } from "../../../controladores/Context";
import { FaPencilAlt, FaTrashAlt, FaUserCheck, FaUserTimes } from "react-icons/fa";
import {MdPrint} from "react-icons/md"


function EditLedgerAccountMother(props){
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
            </div>
        </FormBox>
  );
  
}

export default EditLedgerAccountMother;

