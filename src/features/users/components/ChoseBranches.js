import React, {useContext, useState, useEffect} from 'react';
import DataTables2 from '../../../global/components/DataTables2';
import FormBox from '../../../global/components/FormBox';
import { DataContext } from '../../../controladores/Context';

function ChoseBranches(props){
    const {GlobalState,getBranch,getUserId,associateBranch} = useContext(DataContext);
    const[data,setData] = useState({
        generoId: 0,
        tipoDocumentoId: 0,
        municipioId: 0,
        primerNombre: "",
        segundoNombre: "",
        primerApellido: "",
        segundoApellido: "",
        email: "",
        celular: "",
        direccion: "",
        esSupervisor: true,
        sucursales: [
          ""
        ]
      })
    const [suc,setSuc] = useState([])
    async function getData(){
        const y = await getUserId(props.id);
        if(y.data!=false){
            var ids = [];
            console.log(y.data.sucursales);
            var dts =  y.data.sucursales.forEach(element1 => {
                var dato = GlobalState.branches.filter(element2=>element2.nombre == element1)
                console.log(dato);
                ids.push(dato[0].id)
            });
            setData({
                ...y.data,
                sucursales:ids
            })
        }
    }
    function esta(id){
        for (let i = 0; i < data.sucursales.length; i++) {
            if(data.sucursales[i]==id){
                return true;
            }
        }
        return false;
    }
    function handleChange(id){
        if(!esta(id)){
            var dt = data.sucursales;
            var dt2 = suc;
            dt.push(id);
            dt2.push(id);
            setData({
                ...data,
                sucursales:dt
            })
            setSuc(dt2)
        }
    }
    async function associate(){
        const y = await associateBranch({
            idUsuario: props.id,
            idSucursales:suc
          });
        if(y.data){
            props.toggle("");
        }
    }
    useEffect(() => {
        getData()
        getBranch()
    }, [1]);
    return(
        <FormBox title="Asignar sucursales a usuarios" button="Grabar" onclick={()=>associate()} toggle={() => props.toggle("")}>
        <div className="tableContainer mt-2 mb-2">
            <div className="tableTools">
                <table className="tableBranch">
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Nombre</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                    {GlobalState.branches.map((dt)=>{
                        return(
                        <tr>
                            <td>{dt.codigo}</td>
                            <td>{dt.nombre}</td>
                            <td>  
                                <div className="checkboxContainer checkBranch">
                                    <input type="checkbox" id="active" onChange={()=>handleChange(dt.id)} checked={esta(dt.id)} disabled={esta(dt.id)}/>
                                </div>
                            </td>
                        </tr>
                        )
                    })}
                    </tbody>
                </table>    


            </div>
        </div>   

        </FormBox>
    )
}
export default ChoseBranches;