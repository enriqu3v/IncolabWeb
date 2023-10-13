import React,{useContext, useEffect, useState}from "react";
import DataTables2 from "../../../global/components/DataTables2";
import Menu from "../../../global/components/Menu";
import Navbar from "../../../global/components/Navbar";
import FormBox from "../../../global/components/FormBox";
import { DataContext } from "../../../controladores/Context";
import { FaPencilAlt, FaTrashAlt, FaUserCheck, FaUserTimes } from "react-icons/fa";
import {MdPrint} from "react-icons/md"


function EditV(props){
  const [data,setData] = useState({
      idTipoComprobante:8,
      idTercero:1,
      cooFecha: "1999-10-30",
      ccoDocumentoReferencial:"" ,
      ccoDetalle:"",
      comprobanteDetalles:[]
    });
    async function obtData(){
      var prom =  await getVoucher(props.id);
        console.log(prom.data.data);
        var dta = prom.data.data
        var dtaC = dta.comprobanteDetalles
        if(dtaC.length < 5 ){
          const leng = dtaC.length
          for(var i = 0;i<(5-leng);i++){
            dtaC.push({
                id:0,
                idCentrocosto:0,
                idPuc:0,
                idTercero:0,
                dcoBase:0,
                dcoTarifa:0,
                dcoDebito:0,
                dcoCredito:0,
                dcoDetalle:"",
              })
          }
        }
        console.log(dtaC);
        setData({...dta,comprobanteDetalles:dtaC});
    }
    useEffect(() => {
        obtData()
      },[]);
    const {changeVoucher, getVoucher ,GlobalState} = useContext(DataContext);
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
          <option value={""} key={0}></option>,
          GlobalState.centroCostos.map((dt,id)=>(
            <option value={dt.id} key={id}>{dt.nombre}</option>
            )
          )
        ]}
      </select>
      ,

      <select className="inpCreateVoucher" id="state" onChange={(e)=>{handleChange2(i,e)}} value={data.comprobanteDetalles[i].idPuc} name="idPuc">
        {[
          <option value={""} key={0}></option>,
          GlobalState.pucs.data.map((dt,id)=>(
            <option value={dt.id} key={id}>{dt.nombre}</option>
            )
          )
        ]}
    </select>
    ,

    <select className="inpCreateVoucher" id="state" onChange={(e)=>{handleChange2(i,e)}} value={data.comprobanteDetalles[i].idTercero} name="idTercero">
    {[
      <option value={""} key={0}></option>,
      GlobalState.thirds.map((dt,id)=>(
        <option value={dt.id} key={id}>{dt.id}</option>
        )
      )
    ]}
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
    async function ChangeVoucher(){
      console.log(data);
      const y =  await changeVoucher(props.id,data);
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
        <FormBox title="Editar Comprobante" button="Editar" onclick={()=>{ChangeVoucher()}} toggle={()=>props.toggle("")}>
          <div className="formItems">
            <div className="cpInputContainer" style={{marginTop:"5px"}}>
              <div className="inputContainer">
                <label htmlFor="state">Tipo de comprobante</label>
                <select  id="state" onChange={(e)=>handleChange(e)} value={data.idTipoComprobante} 
                name="idTipoComprobante">
                  {
                    GlobalState.typesOfVouchers.map((dt,id)=>(
                      <option value={dt.id} key={id}>{dt.descripcion}</option>
                      )
                    )
                  }
                </select>
              </div>
              <div className="inputContainer">
                  <label  htmlFor="acoLabel">Tercero general</label>
                  <select  id="state" onChange={(e)=>handleChange(e)} value={data.idTercero} name="idTercero">
                  {
                    GlobalState.thirds.map((dt,id)=>(
                      <option value={dt.id} key={id}>{dt.id}</option>
                      )
                    )
                  }
                  </select>
                </div>
              <div className="inputContainer">
                    <label  htmlFor="acoLabel">Fecha</label>
                    <input type="date" onChange={(e)=>handleChange(e)} value={data.cooFecha} name="cooFecha" id="acoLabel"/>
                </div> 
                <div className="inputContainer">
                    <label htmlFor="state">Documento Referencia</label>
                    <input type="text" onChange={(e)=>handleChange(e)} value={data.ccoDocumentoReferencial} name="ccoDocumentoReferencial" id="acoLabel"/>
                </div>
            </div>
                <DataTables2 type="createVouchers" nColums={5} 
                dataSchema={["C. Costo","Cuenta","Tercero","Detalle","Tarifa","Base","Debito","Credito"]}
                data={data.comprobanteDetalles.map((dta,id)=>{
                  return liItem(id);
                })} />
          </div>
            <div className="cpInputContainer" style={{alignSelf: "start",display:"flex",justifyContent:"space-between",marginBottom:"7px", marginTop:"0px"}}>
                
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

export default EditV;

