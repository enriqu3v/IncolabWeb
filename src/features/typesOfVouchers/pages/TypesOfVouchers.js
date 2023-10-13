import React,{useContext, useEffect, useState}from "react";
import DataTables from "../../../global/components/DataTables";
import DataTables2 from "../../../global/components/DataTables2";
import Menu from "../../../global/components/Menu";
import Navbar from "../../../global/components/Navbar";
import FormBox from "../../../global/components/FormBox";
import { DataContext } from "../../../controladores/Context";
import { FaPencilAlt, FaTrashAlt, FaUserCheck, FaUserCog, FaUserTimes } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";

function TypesOfVouchers() {
  const [toggle,useToggle] = useState("");   
  const [id,setId] = useState("");
  const [details,setDetails] = useState("");   
  const [data,setData] = useState(
    {
      id:"",
      tipo:"",
      descripcion:"",
      consecutivo:0,
      tipoConsecutivo:"M",
      tipoDocumento:0,
      idCategoria:1
    }
  );
  
  function handleChange(event) {
    const { name, value } = event.target
    setData({
        ...data,
        [name]: value
    })
}
  function cleanState(){
    setData({
      id:"",
      tipo:"",
      descripcion:"",
      consecutivo:0,
      tipoConsecutivo:"M",
      tipoDocumento:0,
      idCategoria:0
    })

  }
  const {getTypesOfVouchers,GlobalState,createTypesOfVouchers,changeTypesOfVouchers,changeStateTypesOfVouchers,getVouchersCategory } = useContext(DataContext);
  const optTipodoc = ["Nomina Electronica (NE)","Factura Electronica (FE)","Documento Equivalente (DC)"]
  var datafinal = GlobalState.typesOfVouchers.map((dt,id)=>{
    var tipoConsecutivo;
    switch(dt.tipoConsecutivo){
      case "M":
      tipoConsecutivo ="Mes";
      break;
      case "A":
      tipoConsecutivo ="Año";
      break;
      case "U":
      tipoConsecutivo ="Unico";
      break;
    }
    if(dt.estaActivo){
      return({id:dt.id,
        tipo:dt.tipo,
        descripcion:dt.descripcion,
        tipoConsecutivo,
        consecutivo:dt.consecutivo,
        tipoDocumento:dt.tipoDocumento,
        categoria:dt.categoria.nombre,
        estaActivo: 
        <div className='btnStates'>
          <div className='btnActive'  onClick={()=>ChangeStateTypesOfVouchers(id)}>
              <FaUserCheck/>
          </div>
        </div>,
        functionalities:
        <div className='btnFunctions'>
            <div className='btnEdit'  onClick={()=>{setData({
              ...data,
              id
            });Toggle("editar")}}>
                <FaPencilAlt/>
            </div>
            <div className='btnPrint'  onClick={()=>{setData({
              ...data,
              id
            });Toggle("ver")}}>
              <BsFillEyeFill/>
            </div>
        </div>
        }
      )
    }
    return({id:dt.id,
      tipo:dt.tipo,
      descripcion:dt.descripcion,
      tipoConsecutivo,
      consecutivo:dt.consecutivo,
      tipoDocumento:dt.tipoDocumento,
      categoria:dt.categoria.nombre,
      estaActivo: 
      <div className='btnStates'>
        <div className='btnDisactive'  onClick={()=>ChangeStateTypesOfVouchers(id)}>
            <FaUserTimes/>
        </div>
      </div>,
      functionalities:
      <div className='btnFunctions'>
        <div className='btnEdit'  onClick={()=>{setData({
              ...data,
              id
            });Toggle("editar")}}>
            <FaPencilAlt/>
        </div>
        <div className='btnPrint' onClick={()=>{setData({
              ...data,
              id
            });Toggle("ver")}}>
          <BsFillEyeFill/>
        </div>
      </div>
      }
    )
})
useEffect(() => {
  getTypesOfVouchers();
  getVouchersCategory();
}, [toggle]);
async function CreateTypesOfVouchers(data){
  const y =  await createTypesOfVouchers(data);
  if(y.data){
      Toggle("");
      cleanState();
  }
}
async function ChangeTypesOfVouchers(id,data){
  const y =  await changeTypesOfVouchers(id,data);
  if(y.data){
      Toggle("");
      cleanState();
  }
}
async function ChangeStateTypesOfVouchers(id){
  changeStateTypesOfVouchers(id);
}
    function RenderSwitch(){
      useEffect(() => {
        console.log("estoy entrando")
        if(data.id!==""){
          const prosc = optTipodoc.indexOf(GlobalState.typesOfVouchers[data.id].tipoDocumento)
          alert(prosc)
          setData({
            ...data,
            tipo:GlobalState.typesOfVouchers[data.id].tipo,
            descripcion:GlobalState.typesOfVouchers[data.id].descripcion,
            consecutivo:GlobalState.typesOfVouchers[data.id].consecutivo,
            tipoConsecutivo:GlobalState.typesOfVouchers[data.id].tipoConsecutivo,
            tipoDocumento:prosc,
            idCategoria:GlobalState.typesOfVouchers[data.id].categoria.id
            })
        }
      }, [toggle]);
        switch(toggle) {
          case "crear":
            return(
                <FormBox title="Crear tipo de comprobante" button="Crear" toggle={()=>Toggle("")} onclick={()=>CreateTypesOfVouchers(data)}>
                  <div className="formItems">
                    <div className="cpInputContainer">
                      <div className="inputContainer">
                            <label  htmlFor="acoLabel">Tipo</label>
                            <input type="text" onChange={(e)=>handleChange(e)} value={data.tipo} name="tipo" id="acoLabel"/>
                        </div> 
                        <div className="inputContainer">
                            <label  htmlFor="acoLabel">Descripcion</label>
                            <input type="text" onChange={(e)=>handleChange(e)} value={data.descripcion} name="descripcion" id="acoLabel"/>
                        </div>
                    </div>
                    <div className="cpInputContainer">
                      <div className="inputContainer">
                            <label  htmlFor="acoLabel">Consecutivo</label>
                            <input type="number" onChange={(e)=>handleChange(e)} value={data.consecutivo} name="consecutivo" id="acoLabel"/>
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="state">Tipo de consecutivo</label>
                            <select  id="state" onChange={(e)=>handleChange(e)} value={data.tipoConsecutivo} name="tipoConsecutivo">
                                <option value={"M"}>Mensual</option>
                                <option value={"A"}>Anual</option>
                                <option value={"U"}>Unico</option>
                            </select>
                        </div>
                    </div>
                    <div className="cpInputContainer">
                        <div className="inputContainer">
                            <label htmlFor="state">Tipo de documento</label>
                            <select  id="state" onChange={(e)=>handleChange(e)} value={data.tipoDocumento} name="tipoDocumento">
                              {
                                optTipodoc.map((dt,id)=>(
                                  <option value={id}>{dt}</option>
                                  )
                                )
                              }
                            </select>
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="state">Categoria</label>
                            <select  id="state" onChange={(e)=>handleChange(e)} value={data.idCategoria} name="idCategoria">
                              {
                                GlobalState.vouchersCategory.map((dt,id)=>(
                                  <option value={dt.id}>{dt.nombre}</option>
                                  )
                                )
                              }
                            </select>
                        </div>
                    </div>
                  </div>
                </FormBox>
            )
          case "ver":
              return(
                <FormBox title="Visualizar informacion" button="Cerrar" toggle={()=>{Toggle("");cleanState()}} onclick={()=>{Toggle("");cleanState()}}>
                <div className="formItems">
                  <div className="cpInputContainer">
                    <div className="inputContainer">
                          <label  htmlFor="acoLabel">Tipo</label>
                          <input type="text" onChange={(e)=>handleChange(e)} value={data.tipo} name="tipo" id="acoLabel" disabled/>
                      </div> 
                      <div className="inputContainer">
                          <label  htmlFor="acoLabel">Descripcion</label>
                          <input type="text" onChange={(e)=>handleChange(e)} value={data.descripcion} name="descripcion" id="acoLabel" disabled/>
                      </div>
                  </div>
                  <div className="cpInputContainer">
                    <div className="inputContainer">
                          <label  htmlFor="acoLabel">Consecutivo</label>
                          <input type="number" onChange={(e)=>handleChange(e)} value={data.consecutivo} name="consecutivo" id="acoLabel" disabled/>
                      </div>
                      <div className="inputContainer">
                          <label htmlFor="state">Tipo de consecutivo</label>
                          <select  id="state" onChange={(e)=>handleChange(e)} value={data.tipoConsecutivo} name="tipoConsecutivo" disabled>
                              <option value={"M"}>Mensual</option>
                              <option value={"A"}>Anual</option>
                              <option value={"U"}>Unico</option>
                          </select>
                      </div>
                  </div>
                  <div className="cpInputContainer">
                      <div className="inputContainer">
                          <label htmlFor="state">Tipo de documento</label>
                          <select  id="state" onChange={(e)=>handleChange(e)} value={data.tipoDocumento} name="tipoDocumento" disabled>
                            {
                              optTipodoc.map((dt,id)=>(
                                <option value={id}>{dt}</option>
                                )
                              )
                            }
                          </select>
                      </div>
                      <div className="inputContainer">
                          <label htmlFor="state">Categoria</label>
                          <select  id="state" onChange={(e)=>handleChange(e)} value={data.idCategoria} name="idCategoria" disabled>
                            {
                              GlobalState.vouchersCategory.map((dt,id)=>(
                                <option value={dt.id}>{dt.nombre}</option>
                                )
                              )
                            }
                          </select>
                      </div>
                  </div>
                </div>
              </FormBox>
              )
              break;
          case "editar":
              return(
                <FormBox title="Editar tipo de comprobante" button="Guardar" toggle={()=>{Toggle("");cleanState()}} onclick={()=>ChangeTypesOfVouchers(GlobalState.typesOfVouchers[data.id].id,{
                  descripcion:data.descripcion,
                  idCategoria:data.idCategoria,
                  tipoConsecutivo:data.tipoConsecutivo,
                  tipoDocumento:data.tipoDocumento
                  })}>
                  <div className="formItems">
                    <div className="cpInputContainer">
                      <div className="inputContainer">
                          <label  htmlFor="acoLabel">Descripcion</label>
                          <input type="text" onChange={(e)=>handleChange(e)} value={data.descripcion} name="descripcion" id="acoLabel"/>
                      </div>
                        <div className="inputContainer">
                            <label htmlFor="state">Tipo de consecutivo</label>
                            <select  id="state" onChange={(e)=>handleChange(e)} value={data.tipoConsecutivo} name="tipoConsecutivo">
                                <option value={"M"}>Mensual</option>
                                <option value={"A"}>Anual</option>
                                <option value={"U"}>Unico</option>
                            </select>
                        </div>
                      
                    </div>
                    <div className="cpInputContainer">
                        <div className="inputContainer">
                            <label htmlFor="state">Tipo de documento</label>
                            <select  id="state" onChange={(e)=>handleChange(e)} value={data.tipoDocumento} name="tipoDocumento">
                              {
                                optTipodoc.map((id,dt)=>(
                                  <option value={dt}>{id}</option>
                                  )
                                )
                              }
                            </select>
                        </div>
                        <div className="inputContainer">
                          <label htmlFor="state">Categoria</label>
                          <select  id="state" onChange={(e)=>handleChange(e)} value={data.idCategoria} name="idCategoria">
                            {
                              GlobalState.vouchersCategory.map((dt,id)=>(
                                <option value={dt.id}>{dt.nombre}</option>
                                )
                              )
                            }
                          </select>
                      </div>
                    </div>
                  </div>
                </FormBox>
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
            <DataTables  type="typeOfVouchers" 
                toggle={(t)=>{Toggle(t)}}data={datafinal} 
                dataSchema={["Id"," Tipo","Descripcion","Tipo Consecutivo","Consecutivo", "Tipo de documento", "Categoria", "Estado","Funcionalidades"]} buttons={[
                  <button onClick={()=>{Toggle("crear")}}>Crear</button>
                ]} 
                />
            </div>
        {RenderSwitch()}
        </div>
  );
}

export default TypesOfVouchers;

