import React,{useContext, useEffect, useState}from "react";
import Navbar from '../../../global/components/Navbar';
import Menu from '../../../global/components/Menu';
import { DataContext } from '../../../controladores/Context';
import {PDFDownloadLink} from "@react-pdf/renderer"
import FoliarBPdf from "../../../global/components/FoliarBPdf"

function FoliarBooks() {
  const [data,setData] = useState(
    {
      nLibro:"",
      palabra:"Folio",
      inicial:0,
      final:0,
      nEmpresa:false,
      NIT:false
    }
  );

  const {getEmpresas, GlobalState} = useContext(DataContext);
  useEffect(() => {
    if(GlobalState.empresas.length == 0){
      getEmpresas()
    }
  }, [1]);
  function handleChange(event) {
    const { name, value } = event.target
    console.log(typeof(value))
    setData({
        ...data,
        [name]: value
    })
}
  var dataFinal={
    ...data,
    nit:GlobalState.empresas.nit,
    empresa:GlobalState.empresas.razonSocial

  }
  return (
        <div className="contentContainer">
            <div className="form">
                <h1>Foliar libros</h1>
                <div className="d-flex fd-column">
                    <div className="cpInputContainer">
                        <div className="inputContainer">
                            <label  htmlFor="acoLabel">Nombre del libro (encabezado):</label>
                            <input type="text" onChange={(e)=>handleChange(e)} value={data.nLibro} name="nLibro" id="acoLabel" />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="ncoLabel">Antes del numero imprimir la palabra:</label>
                            <select  id="state" onChange={(e)=>handleChange(e)} value={data.palabra} name="palabra" >
                                <option value={"Folio"}>Folio</option>
                                <option value={"Pág"}>Pág</option>
                                <option value={"Sin palabra"}>Sin palabra</option>
                            </select>
                        </div>
                    </div>
                    <div className="cpInputContainer">
                        <div className="inputContainer">
                            <label  htmlFor="acoLabel">Numero de pagina inicial:</label>
                            <input type="number" onChange={(e)=>handleChange(e)} value={data.inicial} name="inicial" id="acoLabel" />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="ncoLabel">Numero de pagina final:</label>
                            <input type="number" onChange={(e)=>handleChange(e)} value={data.final} name="final" id="ncoLabel" />
                        </div>
                    </div>
                    <div className="cpInputContainer">
                        <div className="inputContainer">
                            <label  htmlFor="acoLabel">Imprimir nombre de la empresa</label>
                            <select  id="state"  onChange={(e)=>{ handleChange(
                              {target:
                                {name:"nEmpresa",value:(e.target.value == "true")}
                              }
                            )}}  value={data.nEmpresa}>
                                <option value={true}>SI</option>
                                <option value={false}>NO</option>
                            </select>
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="ncoLabel">Imprimir NIT</label>
                            <select  id="state" onChange={(e)=>{ handleChange(
                              {target:
                                {name:"NIT",value:(e.target.value == "true")}
                              }
                            )}} value={data.NIT}>
                                <option value={true}>SI</option>
                                <option value={false}>NO</option>
                            </select>
                        </div>
                    </div>
                </div>
                <PDFDownloadLink document={<FoliarBPdf data={dataFinal}/>} fileName="libros">
                  <button className="mt-1">Generar pdf</button>
                </PDFDownloadLink>
            </div>
        </div>
  );
}

export default FoliarBooks;

