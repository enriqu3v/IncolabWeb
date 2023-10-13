import React,{useContext, useEffect, useState}from "react";
import DataTables from "../../../global/components/DataTables";
import Menu from "../../../global/components/Menu";
import Navbar from "../../../global/components/Navbar";
import FormBox from "../../../global/components/FormBox";
import { DataContext } from "../../../controladores/Context";
import { FaPencilAlt, FaTrashAlt, FaUserCheck, FaUserTimes } from "react-icons/fa";
import {MdPrint} from "react-icons/md"
import CreateExplanatoryNote from "../components/CreateExplanatoryNote";
import "../utils/styles/vouchers.css"
import EditV from "../components/EditExplanatoryNote";
import EditExplanatoryNote from "../components/EditExplanatoryNote";
import ExplanatoryNotePdf from "../../../global/components/ExplanatoryNotePdf";
import {PDFDownloadLink} from "@react-pdf/renderer"
import { BsFillEyeFill, BsTrash, BsTrashFill, BsTree } from "react-icons/bs";


function ExplanatoryNotes() {
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
  
  const {getVouchers,getExplanatoryNotes,deleteExplanatoryNote, reverseVoucher, GlobalState} = useContext(DataContext); 
  const optTipodoc = ["Nomina Electronica (NE)","Factura Electronica (FE)","Documento Equivalente (DC)"]
  var datafinal = GlobalState.explanatoryNotes.map((dt,id)=>{
    return({numero:dt.numero,fecha:dt.fecha,tipo:dt.tipo,cuenta:dt.informacionCuenta.id,titulo:dt.titulo,
      estado: 
      <div className='btnStates'>
        <div className={dt.estaActivo?"btnActive":"btnDisactive"} onClick={()=>{if(dt.estaActivo)deleteExplanatoryNote(dt.id);}}>
            <FaUserCheck/>
        </div>
      </div>
      , 
      functionalities:
      <div className='btnFunctions'>
        <div className='btnEdit'  onClick={()=>{setData({
          ...data,
          id:dt.id
        });Toggle("editar")}}>
            <FaPencilAlt/>
        </div>
          <PDFDownloadLink document={<ExplanatoryNotePdf data={0}/>} fileName="notas aclaratorias">
          <div className='btnPrint'>
            <MdPrint color="white"/>
          </div>
          </PDFDownloadLink>
      </div>
      }
    )
})
  useEffect(() => {
    getExplanatoryNotes();
  }, [toggle]);
    function RenderSwitch(){
        console.log("llegue al switch, el toogle es: " + toggle)
        switch(toggle) {
          case "crear":
            return(
              <CreateExplanatoryNote toggle={(x)=> Toggle(x)}/>
            )
            break;
          case "editar":
              return(
                <EditExplanatoryNote toggle={(x)=> Toggle(x)} id={data.id}/>
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
                  toggle={(t)=>{Toggle(t)}}data={datafinal} 
                  dataSchema={["Numero","Fecha","Tipo de nota","Cuenta","Titulo","Estado","Funcionalidades"]} buttons={[
                    <button onClick={()=>{Toggle("crear")}}>Crear</button>
                  ]} 
                  />
            </div>
        {RenderSwitch()}
        </div>
  );
}

export default ExplanatoryNotes;

