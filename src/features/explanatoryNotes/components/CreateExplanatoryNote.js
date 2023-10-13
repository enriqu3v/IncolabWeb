import React,{useContext, useEffect,useState}from "react";
import FormBox from "../../../global/components/FormBox";
import { DataContext } from "../../../controladores/Context";


function CreateExplanatoryNote(props){
  const [data,setData] = useState({
      fecha:"",
      idTipoNota:0,
      idPuc:null,
      titulo: "",
      detalle:"" 
    });
    const {createExplanatoryNote,getPucsAux ,getPucsMadre, getTypesOfExplanatoryNotes, GlobalState} = useContext(DataContext);
    useEffect(() => {
        getTypesOfExplanatoryNotes();
      },[]);
function handleChange(event) {
  const { name, value } = event.target
  setData((prevState)=>({
      ...prevState,
      [name]: value
  }))
}
    async function CreateExplanatoryNote(){
      const y =  await createExplanatoryNote(data);
      if(y.data){
          props.toggle("")
      }
    }
    return(
        <FormBox title="Crear nota aclaratoria" button="Crear" onclick={()=>CreateExplanatoryNote()} toggle={()=>props.toggle("")}>
          <div className="formItems">
            <div className="cpInputContainer"  style={{marginTop:"5px"}}>
              <div className="inputContainer">
                <label htmlFor="state">Titulo</label>
                <input type="text" onChange={(e)=>handleChange(e)} value={data.titulo} name="titulo" id="acoLabel"/>
              </div>
              <div className="inputContainer">
                    <label  htmlFor="acoLabel">Fecha</label>
                    <input type="date" onChange={(e)=>handleChange(e)} value={data.fecha} name="fecha" id="acoLabel"/>
                </div> 
            </div>
            <div className="cpInputContainer">
              <div className="inputContainer">
                <label htmlFor="state">Tipo</label>
                <select  id="state" onChange={(e)=>{handleChange(e);
                if(e.target.value == 2){
                  getPucsAux();
                }
                if(e.target.value == 3){
                  console.log("obteniendo cuentas grupo");
                  getPucsMadre();
                }
              }} value={data.idTipoNota} 
                name="idTipoNota">
                  {[
                    <option value={0} key={0}></option>,
                    GlobalState.typesOfExplanatoryNotes.map((dt,id)=>(
                      <option value={dt.id} key={id} >{dt.nombre}</option>
                      )
                    )]
                  }
                </select>
              </div>
              <div className="inputContainer">
                <label htmlFor="state">Cuenta</label>
                {data.idTipoNota==0 || data.idTipoNota==1?
                  <select  id="state" onChange={(e)=>handleChange(e)} disabled={true} value={data.idPuc} 
                  name="idPuc">
                    {[
                      <option value={null} key={0}></option>
                      ]
                    }
                  </select>
                  :
                  <select  id="state" onChange={(e)=>handleChange(e)} value={data.idPuc} 
                  name="idPuc">
                    {[
                      <option value={0} key={0}></option>,
                      GlobalState.pucs.data.map((dt,id)=>(
                        <option value={dt.id} key={id}>{dt.nombre}-{dt.codigo}</option>
                        )
                      )]
                    }
                  </select>
                }
                
              </div>
            </div>
            <div className="cpInputContainer">
              <div className="inputContainer">
                  <label  htmlFor="acoLabel">Detalle</label>
                  <textarea style={{width:"610px"}} onChange={(e)=>handleChange(e)} value={data.detalle} name="detalle" id="acoLabel"/>
              </div>
            </div>
          </div>
        </FormBox>
  );
  
}

export default CreateExplanatoryNote;

