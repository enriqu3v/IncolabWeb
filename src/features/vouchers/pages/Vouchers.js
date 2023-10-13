import React,{useContext, useEffect, useState}from "react";
import DataTables from "../../../global/components/DataTables";
import Menu from "../../../global/components/Menu";
import Navbar from "../../../global/components/Navbar";
import FormBox from "../../../global/components/FormBox";
import { DataContext } from "../../../controladores/Context";
import { FaPencilAlt, FaTrashAlt, FaUserCheck, FaUserTimes } from "react-icons/fa";
import {MdPrint} from "react-icons/md"
import CreateV from "../components/CreateVoucher";
import "../utils/styles/vouchers.css"
import EditV from "../components/EditVoucher";


function Vouchers() {
  const [toggle,useToggle] = useState("");   
  const [id,setId] = useState("");
  const [details,setDetails] = useState("");   
  const fechaActual = Date.now();
  const date = new Date(fechaActual);
  const year = date.getFullYear()
  var month ="";
  if(date.getMonth() < 9){
    month = "0"+(date.getMonth()+1)
  }
  else{month = date.getMonth()+1;}
  const day = date.getDate();
  const [data,setData] = useState(
    {
      id:"",
      ccoFecha: year+ "-" +month+ "-" + day,
      idTipoComprobante:"",
      codigoCategoriaComprobante:"",
      idTerceroGeneral:1,
      idTercero:1,
      categoria:"",
      total:"",
      ccoDocumento:"" ,
      ccoDetalle:"",
      dcoDetalle:"",
      dcoDebito:0,
      dcoCredito:0,
      dcoBase:0,
      dcoTarifa:0,
      idCentrocosto:0,
      idPuc:0
    }
  );
  
  function handleChange(event) {
    const { name, value } = event.target
    setData({
        ...data,
        [name]: value
    })
}
  const {getVouchers,getTypesOfVouchers,getThirds, reverseVoucher,getCentroCostos,getPucsAux, GlobalState} = useContext(DataContext); 
  const optTipodoc = ["Nomina Electronica (NE)","Factura Electronica (FE)","Documento Equivalente (DC)"]
  var datafinal = GlobalState.vouchers.map((dt,id)=>{
    if(dt.estado == "A"){
      return({...dt, 
        estado: 
        <div className='btnStates'>
          <div className='btnActive'onClick={()=>{reverseVoucher(dt.id)}}>
              <FaUserCheck/>
          </div>
        </div>,
        functionalities:
        <div className='btnFunctions'>
          <div className='btnEdit'  onClick={()=>{setData({
            ...data,
            id:dt.id
          });Toggle("editar")}}>
              <FaPencilAlt/>
          </div>
          <div className='btnPrint' onClick={()=>Toggle("imprimir")}>
            <MdPrint/>
          </div>
        </div>
        }
      )
    }
    return({...dt, 
      estado: 
      <div className='btnStates'>
        <div className='btnDisactive'>
            <FaUserTimes/>
        </div>
      </div>,
      functionalities:
      <div className='btnFunctions'>
        <div className='btnEdit'  onClick={()=>{setData({
          ...data,
          id:dt.id
        });Toggle("editar")}}>
            <FaPencilAlt/>
        </div>
        <div className='btnPrint' onClick={()=>Toggle("imprimir")}>
          <MdPrint/>
        </div>
      </div>
      }
    )
})
  useEffect(() => {
    getVouchers();
    getTypesOfVouchers();
    getThirds();
    getCentroCostos();
    getPucsAux();
  }, [toggle]);
    function RenderSwitch(){
        console.log("llegue al switch, el toogle es: " + toggle)
        switch(toggle) {
          case "crear":
            return(
                <CreateV toggle={(x)=> Toggle(x)}/>
            )
          case "editar":
              return(
                <EditV toggle={(x)=> Toggle(x)} id={data.id}/>
              )
              break;
            default:
                return null;
                break;
        }
      }
      const Toggle =(x)=>{
          useToggle(x)
        };
  return (
      
        <div className="contentContainer">
            <div className="form">
              <DataTables  type="tipeOfVouchers" 
                  toggle={(t)=>{Toggle(t)}}data={datafinal} nColums={10}
                  dataSchema={["Id","Fecha","Consecutivo","Documento Tercero","Categoria","Descripcion","Total","Estado","Funcionalidades"]} buttons={[
                    <button onClick={()=>{Toggle("crear")}}>Crear</button>
                  ]} 
                  />
            </div>
        {RenderSwitch()}
        </div>
  );
}

export default Vouchers;

