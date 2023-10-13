import React,{useContext, useEffect, useState}from "react";
import DataTables2 from "../../../global/components/DataTables2";
import Menu from "../../../global/components/Menu";
import Navbar from "../../../global/components/Navbar";
import FormBox from "../../../global/components/FormBox";
import { DataContext } from "../../../controladores/Context";
import { FaPencilAlt, FaPlus, FaTrashAlt, FaUserCheck, FaUserTimes } from "react-icons/fa";
import {MdPrint} from "react-icons/md"
import CreateLedgerAccount from "../components/CreateLegderAccount";
import "../utils/styles/ledgerAccounts.css"
import { BsChevronDown, BsChevronUp, BsPencil, BsPlus } from "react-icons/bs";
import Info from "../components/Info";
import EditLedgerAccountAux from "../components/EditLedgerAccountAux";
import EditLedgerAccountMother from "../components/EditLedgerAccountMother";


function LedgerAccounts() {
  const [toggle,useToggle] = useState("");   
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
  const [id,setId] = useState(-1);
  const [data1,setData1] = useState([]);
  const [data2,setData2] = useState([]);
  const [data3,setData3] = useState([]);
  const [data4,setData4] = useState([]);
  const [id1,setId1] = useState(0);
  const [id2,setId2] = useState(0);
  const [id3,setId3] = useState(0);
  const [id4,setId4] = useState(0);
  const [chose,setChose] = useState({id:0,codigo:0,nombre:"",auxiliar:false,idPucTipo:0,idTipoImpuesto:0,pacBase:false,pacAjusteNiif:false,pacNaturaleza:0})
  
  const {deletePuc,changeStatePuc,changePuc,getPucsId,getPucs, GlobalState} = useContext(DataContext); 
  
  async function DeletePuc(id){
    
    const y =  await deletePuc(id);
    if(y.data){
      setId1(0);
      setId2(0);
      setId3(0);
      setId4(0);
      setData1([]);
      setData2([]);
      setData3([]);
      setData4([]);
      setChose({id:0,codigo:0,nombre:"",auxiliar:false,idPucTipo:0,idTipoImpuesto:0,pacBase:false,pacAjusteNiif:false,pacNaturaleza:0});
    }
  }
  async function ChangeStatePuc(id,data){
    const y =  await changeStatePuc(id,data);
    if(y.data){
      setId1(0);
      setId2(0);
      setId3(0);
      setId4(0);
      setData1([]);
      setData2([]);
      setData3([]);
      setData4([]);
      setChose({id:0,codigo:0,nombre:"",auxiliar:false,idPucTipo:0,idTipoImpuesto:0,pacBase:false,pacAjusteNiif:false,pacNaturaleza:0});
    }
  }
  async function ChangePuc(id,data){
    const y =  await changePuc(id,data);
    if(y.data){
      setId1(0);
      setId2(0);
      setId3(0);
      setId4(0);
      setData1([]);
      setData2([]);
      setData3([]);
      setData4([]);
      setChose({id:0,codigo:0,nombre:"",auxiliar:false,idPucTipo:0,idTipoImpuesto:0,pacBase:false,pacAjusteNiif:false,pacNaturaleza:0});
      Toggle("");
    }
  }
  const optTipodoc = ["Nomina Electronica (NE)","Factura Electronica (FE)","Documento Equivalente (DC)"]
  var datafinal = GlobalState.pucs.data.map((dt,id)=>{
      return({codigo:dt.codigo,nombre:dt.nombre,id:dt.id})
})
  useEffect(() => {
    getPucs();
  }, [toggle]);
  async function getPucH(id,codigo){
    var prom = await getPucsId(id);
    if(codigo<10){
      setData1(prom.data.data);
    }else{
      if(codigo<100){
        setData2(prom.data.data);
      }else{
        if(codigo<10000){
          setData3(prom.data.data);
        }else{
          setData4(prom.data.data);
        }
      }
    }
  }
  function getChose(id,codigo){
    var value;
    if(codigo<10){
      value = GlobalState.pucs.data.filter((dt)=>dt.id===id);
      setChose(value[0])
    }else{
      if(codigo<100){
        value = data1.filter((dt)=>dt.id===id);
        setChose(value[0])
      }else{
        if(codigo<10000){
          value = data2.filter((dt)=>dt.id===id);
          setChose(value[0])
        }else{
          if(codigo<1000000){
            value = data3.filter((dt)=>dt.id===id);
            setChose(value[0])
          }else{
            value = data4.filter((dt)=>dt.id===id);
            setChose(value[0])
          }
        }
      }
    }
  }
  var datafinal1 = data1.map((dt,id)=>{
    console.log(dt)
    return({codigo:dt.codigo,nombre:dt.nombre,id:dt.id})
  })
  var datafinal2 = data2.map((dt,id)=>{
    return({codigo:dt.codigo,nombre:dt.nombre,id:dt.id})
  })
  var datafinal3 = data3.map((dt,id)=>{
    return({codigo:dt.codigo,nombre:dt.nombre,id:dt.id})
  })
  var datafinal4 = data4.map((dt,id)=>{
    return({estado:dt.estado,codigo:dt.codigo,nombre:dt.nombre,id:dt.id,funcionalidades:
      <div className='btnFunctions'>
        <div className='btnEdit'  onClick={()=>{Toggle("editar")}}>
            <FaPencilAlt/>
        </div>
      </div>
      })
  })
    function RenderSwitch(){
        console.log("llegue al switch, el toogle es: " + toggle)
        switch(toggle) {
          case "crear":
            return(
              <CreateLedgerAccount toggle={(x)=> Toggle(x)}/>
            )
            break;
          case "editar":
            if(chose.auxiliar){
              return(
                <EditLedgerAccountAux toggle={(x)=> Toggle(x)}  edit2={ChangePuc} data={chose}/>
              )
            }
            return(
              <EditLedgerAccountMother toggle={(x)=> Toggle(x)}  edit2={ChangePuc} data={chose}/>
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
            <div className="form d-flex fd-row">
              <DataTables2 data={[[]]}  buttons={[
                    <button onClick={()=>{Toggle("crear")}}>Crear</button>
                  ]}>
                  <div className="d-flex fd-column fai-start fjc-start w100" style={{height:"300px",overflowY:"auto"}}>
                    {
                       datafinal.map((dt,ind)=>{
                        return(
                          <div>
                            <div className="cPointer fz-12 d-flex fd-row w100 cPointer" onClick={()=>{
                              getChose(dt.id,dt.codigo);
                              if(dt.id === id1){
                                setId1(0)
                              }else{
                                getPucH(dt.id,dt.codigo);setId1(dt.id)
                              }}
                            }>
                              <p className="m-0 mr-2">{dt.codigo}</p>
                              <p className="m-0 mr-2">{dt.nombre}</p>{dt.id === id1?
                                <BsChevronUp size="12px"/>
                                :
                                <BsChevronDown size="12px"/>
                              }
                            </div>
                            {id1===dt.id?
                                <div className="d-flex fd-column fai-start fjc-start ml-4 w100 cPointer">
                                  {datafinal1.map((dt2,ind2)=>{
                                    return(
                                        <div>
                                          <div className="cPointer fz-12 d-flex fd-row w100" onClick={()=>{
                                            getChose(dt2.id,dt2.codigo);
                                            if(dt2.id === id2){
                                              setId2(0)
                                            }else{
                                              getPucH(dt2.id,dt2.codigo);setId2(dt2.id)
                                            }}
                                          }>
                                            <p className="m-0 mr-2">{dt2.codigo}</p>
                                            <p className="m-0 mr-2">{dt2.nombre}</p>{dt2.id === id2?
                                              <BsChevronUp size="12px"/>
                                              :
                                              <BsChevronDown size="12px"/>
                                            }
                                          </div>
                                          {id2===dt2.id?
                                            <div className="d-flex fd-column fai-start fjc-start ml-4 w100 cPointer">
                                              {datafinal2.map((dt3,ind3)=>{
                                                return(
                                                    <div>
                                                      <div className="cPointer fz-12  d-flex fd-row w100" onClick={()=>{
                                                          getChose(dt3.id,dt3.codigo);
                                                        if(dt3.id === id3){
                                                          setId3(0)
                                                        }else{
                                                          getPucH(dt3.id,dt3.codigo);setId3(dt3.id)
                                                        }}
                                                      }>
                                                        <p className="m-0 mr-2">{dt3.codigo}</p>
                                                        <p className="m-0 mr-2">{dt3.nombre}</p>
                                                        {dt3.id === id3?
                                                          <BsChevronUp size="12px"/>
                                                          :
                                                          <BsChevronDown size="12px"/>
                                                        }
                                                      </div>

                                                      {id3===dt3.id?
                                                        <div className="d-flex fd-column fai-start fjc-start ml-4 w100 cPointer">
                                                          {datafinal3.map((dt4,ind4)=>{
                                                            return(
                                                                <div>
                                                                  <div className="cPointer fz-12 d-flex fd-row w100"  onClick={()=>{
                                                                      getChose(dt4.id,dt4.codigo);
                                                                    if(dt4.id === id4){
                                                                      setId4(0)
                                                                    }else{getPucH(dt4.id,dt4.codigo);setId4(dt4.id)
                                                                    }}
                                                                  }>
                                                                    <p className="m-0 mr-2">{dt4.codigo}</p>
                                                                    <p className="m-0 mr-2">{dt4.nombre}</p>
                                                                      {dt4.id === id4?
                                                                        <BsChevronUp size="12px"/>
                                                                        :
                                                                        <BsChevronDown size="12px"/>
                                                                      }
                                                                  </div>

                                                                  {id4===dt4.id?
                                                                    <div className="d-flex fd-column fai-start fjc-start ml-4 w100 cPointer">
                                                                      {datafinal4.map((dt5,ind5)=>{
                                                                        return(
                                                                            <div>
                                                                              {dt5.estado?
                                                                              <div className="fz-12 d-flex fd-row w100" 
                                                                              onClick={()=>getChose(dt5.id,dt5.codigo)}
                                                                                >
                                                                                <p className="m-0 mr-2">{dt5.codigo}</p>
                                                                                <p className="m-0 mr-2">{dt5.nombre}</p>
                                                                              </div>
                                                                              :
                                                                              <div className="fz-12 d-flex fd-row w100" 
                                                                              onClick={()=>getChose(dt5.id,dt5.codigo)}
                                                                                style={{color:"tomato"}}>
                                                                                <p className="m-0 mr-2">{dt5.codigo}</p>
                                                                                <p className="m-0 mr-2">{dt5.nombre}</p>
                                                                              </div>
                                                                              }
                                                                            </div>
                                                                        )
                                                                      })}
                                                                    </div>
                                                                    :
                                                                    null
                                                                  }

                                                                </div>
                                                            )
                                                          })}
                                                        </div>
                                                        :
                                                        null
                                                      }

                                                    </div>
                                                )
                                              })}
                                            </div>
                                            :
                                            null
                                          }
                                        </div>
                                    )
                                  })}
                                </div>
                              :
                                null
                              }
                          </div>
                        )
                       })
                    }
                  </div>
              </DataTables2 >
              <Info data={chose} delete={DeletePuc} edit1={()=>{Toggle("editar")}} changeStatePuc={ChangeStatePuc}/>
            </div>
        {RenderSwitch()}
        </div>
  );
}

export default LedgerAccounts;

