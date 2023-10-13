import React, {useContext, useState, useEffect} from 'react';
import DataTables from '../../../global/components/DataTables';
import DataTables2 from '../../../global/components/DataTables2';
import Navbar from '../../../global/components/Navbar';
import Menu from '../../../global/components/Menu';
import '../utils/styles/branch.css';
import FormBox from '../../../global/components/FormBox';
import { DataContext } from '../../../controladores/Context';
import { FaPencilAlt, FaUserCheck, FaTrashAlt, FaUserTimes } from 'react-icons/fa';
import { BsFillEyeFill } from 'react-icons/bs';
import CreateBranch from '../components/CreateBranch';
import EditBranch from '../components/EditBranch';



function  Branch(){
    const [toggle, useToogle] = useState("");
    const [id,setId] = useState("");
    const [person, setPerson] = useState({
        generoId: '',
        tipoDocumentoId: '',
        cedula: '',
        primerApellido: '',
        segundoApellido: '',
        primerNombre: '',
        segundoNombre: '',
        email: '',
        celular: '',
        municipioId: '',
        direccion: '',
        perfilId: '',
        nombreUsuario: '',
        supervisor: ''
    });
    const [branch, setBranch] = useState({
            id: 0,
            codigo: "",
            nombre: "",
            direccion: "",
            ciudad: "",
            departamento: "",
            telefono: ""
    });
    
    const {

        generoId,
        tipoDocumentoId,
        cedula,
        primerApellido,
        segundoApellido,
        primerNombre,
        segundoNombre,
        email,
        celular,
        municipioId,
        direccion,
        perfilId,
        nombreUsuario,
        supervisor

    } = person
    const {getBranch,GlobalState, deleteBranch, getMunicipios, getDepartamentos, createUser} = useContext(DataContext);

    const handleChange = (e) => {
        setPerson({
            ...person,
            [e.target.name] : e.target.value
        })
    }
    var datafinal = GlobalState.branches.map((dt,id)=>{
        if(dt.estado){
          return({codigo:dt.codigo,nombrE:dt.nombre, 
            estado: 
            <div className='btnStates'>
              <div className='btnActive' >
                  <FaUserCheck/>
              </div>
            </div>,
            functionalities:
            <div className='btnFunctions'>
                <div className='btnEdit' onClick={()=>{setBranch(GlobalState.branches[id]);Toggle("editar")}}>
                  <FaPencilAlt/>
                </div>
                <div className='btnDelete' onClick={()=>deleteBranch(dt.id)}>
                    <FaTrashAlt/>
                </div>
            </div>
            }
          )
        }
        return({codigo:dt.codigo,nombrE:dt.nombre, 
          estado: 
          <div className='btnStates'>
            <div className='btnDisactive' >
                <FaUserTimes/>
            </div>
          </div>,
          functionalities:
          <div className='btnFunctions'>
              <div className='btnPrint' onClick={()=>{
                  setBranch(GlobalState.branches[id]);Toggle("editar")}}>
                  <FaPencilAlt/>
              </div>
                <div className='btnDelete' onClick={()=>deleteBranch(dt.codigo)}>
                    <FaTrashAlt/>
                </div>
          </div>
          }
        )
    })

   
   
    useEffect(() => {
        getBranch();
        getMunicipios();
        getDepartamentos();
    }, [toggle]);

   
    function renderSwitch(){
        switch(toggle){
            case  "crear":
                return <CreateBranch toggle={(x)=> Toggle(x)}/>
                break;
            
            case "editar" :
                return <EditBranch toggle={(x)=> Toggle(x)} data={branch}/>
                break;

                case "visualizar" :
                return null;
                break;

            default:
                    return null;
                    break;

        }
    }

    const Toggle = (x) => {
        useToogle(x);
    }
    return (
        <div className='contentContainer'>
                <div className="form">
                    <DataTables  type="user" 
                    toggle={(t)=>{Toggle(t)}} data={datafinal} 
                    dataSchema={["Codigo","Sucursal","Estado","Funcionalidades"]} buttons={[
                    <button onClick={()=>{Toggle("crear");}}>Crear Sucursal</button>
                    ]} />
                </div>
            {renderSwitch()}
            </div>
            

    );

}

export default Branch;
