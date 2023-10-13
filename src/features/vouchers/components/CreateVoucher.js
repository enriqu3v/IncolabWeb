import React,{useContext, useEffect, useState}from "react";
import DataTables2 from "../../../global/components/DataTables2";
import Menu from "../../../global/components/Menu";
import Navbar from "../../../global/components/Navbar";
import FormBox from "../../../global/components/FormBox";
import { DataContext } from "../../../controladores/Context";
import { FaPencilAlt, FaTrashAlt, FaUserCheck, FaUserTimes } from "react-icons/fa";
import {MdPrint} from "react-icons/md"


function CreateV(props){
  const [data,setData] = useState({
      idTipoComprobante:0,
      codigoCategoriaComprobante:"",
      idTerceroGeneral:0,
      ccoFecha: "",
      ccoDocumento:"" ,
      ccoDetalle:"",
      comprobanteDetalles:[
        {
          idCentrocosto:0,
          idPuc:0,
          idTercero:0,
          dcoBase:0,
          dcoTarifa:0,
          dcoDebito:0,
          dcoCredito:0,
          dcoDetalle:"",
        },
        {
          idCentrocosto:0,
          idPuc:0,
          idTercero:0,
          dcoBase:0,
          dcoTarifa:0,
          dcoDebito:0,
          dcoCredito:0,
          dcoDetalle:"",
        },
        {
          idCentrocosto:0,
          idPuc:0,
          idTercero:0,
          dcoBase:0,
          dcoTarifa:0,
          dcoDebito:0,
          dcoCredito:0,
          dcoDetalle:"",
        },
        {
          idCentrocosto:0,
          idPuc:0,
          idTercero:0,
          dcoBase:0,
          dcoTarifa:0,
          dcoDebito:0,
          dcoCredito:0,
          dcoDetalle:"",
        },
        {
          idCentrocosto:0,
          idPuc:0,
          idTercero:0,
          dcoBase:0,
          dcoTarifa:0,
          dcoDebito:0,
          dcoCredito:0,
          dcoDetalle:"",
        }
      ],
      observacion:""
    });
    const {createVoucher ,GlobalState} = useContext(DataContext);
function handleChange(event) {
  const { name, value } = event.target
  setData((prevState)=>({
      ...prevState,
      [name]: value
  }))
}
function handleChange2(id,event) {
    const { name, value } = event.target
    var changeData = data.comprobanteDetalles
    var changeDataId=changeData[id]
    console.log(data.comprobanteDetalles);
    console.log(changeDataId);
    changeDataId ={
      ...changeDataId,
      [name]:value
    }
    console.log(changeDataId);
    changeData[id] = changeDataId
    console.log(changeData);
    setData((prevState)=>({
      ...prevState,
      comprobanteDetalles:changeData
    })
    )
}
function liItem(i){
  
  return(
    [
                  
      <select className="inpCreateVoucher" id="state" onChange={(e)=>{handleChange2(i,e)}} value={data.comprobanteDetalles[i].idCentrocosto} name="idCentrocosto">
        {[
          <option value={0} key={0}></option>,
          GlobalState.centroCostos.map((dt,id)=>(
            <option value={dt.id} key={id}>{dt.nombre}</option>
            )
          )]
        }
      </select>
      ,

      <select className="inpCreateVoucher" id="state" onChange={(e)=>{handleChange2(i,e)}} value={data.comprobanteDetalles[i].idPuc} name="idPuc">
        {[
          <option value={0} key={0}></option>,
          GlobalState.pucs.data.map((dt,id)=>(
            <option value={dt.id} key={id}>{dt.nombre}</option>
            )
          )]
        }
    </select>
    ,

    <select className="inpCreateVoucher" id="state" onChange={(e)=>{handleChange2(i,e)}} value={data.comprobanteDetalles[i].idTercero} name="idTercero">
    {[
      <option value={0} key={0}></option>,
      GlobalState.thirds.map((dt,id)=>(
        <option value={dt.id} key={id}>{dt.id}</option>
        )
      )]
    }
    </select>
    ,
    <input className="inpCreateVoucher" name="dcoDetalle" onChange={(e)=>{handleChange2(i,e)}}
      value={data.comprobanteDetalles[i].dcoDetalle} type="text" id="acoLabel"/>,
    <input className="inpCreateVoucher" name="dcoTarifa" onChange={(e)=>{handleChange2(i,e)}}
      value={data.comprobanteDetalles[i].dcoTarifa} type="number" id="acoLabel"/>,
    <input className="inpCreateVoucher" name="dcoBase" onChange={(e)=>{handleChange2(i,e)}}
      value={data.comprobanteDetalles[i].dcoBase} type="number" id="acoLabel"/>,
    <input className="inpCreateVoucher" name="dcoDebito" onChange={(e)=>{handleChange2(i,e)}}
      value={data.comprobanteDetalles[i].dcoDebito} type="number" id="acoLabel"/>,
    <input className="inpCreateVoucher" name="dcoCredito" onChange={(e)=>{handleChange2(i,e)}}
      value={data.comprobanteDetalles[i].dcoCredito} type="number" id="acoLabel"/>
]
  )
}
    async function CreateVoucher(){
      const y =  await createVoucher(data);
      if(y.data){
          props.toggle("")
      }
    }
    var contC = 0;
    var contD = 0;
    var contT = 0;
    data.comprobanteDetalles.forEach(element => {
      contC += parseInt(element.dcoCredito)
      contD += parseInt(element.dcoDebito)
    });
    contT = contC - contD
    return(
        <FormBox title="Crear Comprobante" button="Crear" onclick={()=>CreateVoucher()} toggle={()=>props.toggle("")}>
          <div className="formItems">
            <div className="cpInputContainer"  style={{marginTop:"5px"}}>
              <div className="inputContainer">
                <label htmlFor="state">Tipo de comprobante</label>
                <select  id="state" onChange={(e)=>handleChange(e)} value={data.idTipoComprobante} 
                name="idTipoComprobante">
                  {[
                    <option value={0} key={0}></option>,
                    GlobalState.typesOfVouchers.map((dt,id)=>(
                      <option value={dt.id} key={id}>{dt.descripcion}</option>
                      )
                    )]
                  }
                </select>
              </div>
              <div className="inputContainer">
                <label htmlFor="state">Codigo categoria comprobante</label>
                <select  id="state" onChange={(e)=>handleChange(e)} value={data.codigoCategoriaComprobante} name="codigoCategoriaComprobante">
                  {[
                    <option value={""} key={0}></option>,
                    GlobalState.typesOfVouchers.map((dt,id)=>(
                      <option value={dt.categoria.codigo} key={id}>{dt.categoria.nombre}</option>
                      )
                    )]
                  }
                </select>
              </div>
              <div className="inputContainer">
                  <label  htmlFor="acoLabel">Tercero general</label>
                  <select  id="state" onChange={(e)=>handleChange(e)} value={data.idTerceroGeneral} name="idTerceroGeneral">
                  {[
                    <option value={0} key={0}></option>,
                    GlobalState.thirds.map((dt,id)=>(
                      <option value={dt.id} key={id}>{dt.id}</option>
                      )
                    )]
                  }
                  </select>
                </div>
              <div className="inputContainer">
                    <label  htmlFor="acoLabel">Fecha</label>
                    <input type="date" onChange={(e)=>handleChange(e)} value={data.ccoFecha} name="ccoFecha" id="acoLabel"/>
                </div> 
            </div>
            <div className="cpInputContainer">
                <div className="inputContainer">
                    <label htmlFor="state">Documento Referencia</label>
                    <input type="text" onChange={(e)=>handleChange(e)} value={data.ccoDocumento} name="ccoDocumento" id="acoLabel"/>
                </div>
            </div>
                <DataTables2 type="createVouchers" nColums={5} 
                dataSchema={["C. Costo","Cuenta","Tercero","Detalle","Tarifa","Base","Debito","Credito"]}
                data={[
                  liItem(0),
                  liItem(1),
                  liItem(2),
                  liItem(3),
                  liItem(4)
                ]} />
          </div>
            <div className="cpInputContainer" style={{alignSelf: "start",display:"flex",justifyContent:"space-between", marginTop:"0px"}}>
              <div className="inputContainerXl" >
                  <label  htmlFor="acoLabel">Observacion</label>
                  <textarea style={{width:"630px"}} onChange={(e)=>handleChange(e)} value={data.ccoDetalle} name="ccoDetalle" id="acoLabel"/>
                </div>
                <div className="textForm" style={{width: "400px",display:"flex",flexDirection:"column",marginRight:"20px"}}>
                    <p style={{margin:"7px 0px 9px",textAlign:"end"}}>
                      <span style={{marginRight:"10px"}}>Total Credito:{contC}</span> <span style={{marginRight:"10px"}}>Total Debito:{contD}</span> Diferencia:{contT}
                      </p>
                </div>
            </div>
        </FormBox>
  );
  
}

export default CreateV;

