import React, {useContext, useState, useEffect} from 'react';
import DataTables from '../../../global/components/DataTables';
import DataTables2 from '../../../global/components/DataTables2';
import Navbar from '../../../global/components/Navbar';
import Menu from '../../../global/components/Menu';
import '../utils/styles/user.css';
import FormBox from '../../../global/components/FormBox';
import { DataContext } from '../../../controladores/Context';
import SGender from '../components/SGender';
import STypeDocument from '../components/STypeDocument';
import SeeInformation from '../components/SeeInformation';
import SRol from '../components/SRol';
import { FaPencilAlt, FaUserCheck, FaUserCog, FaUserTimes } from 'react-icons/fa';
import { BsFillEyeFill } from 'react-icons/bs';
import ChoseBranches from '../components/ChoseBranches';



function  ListUser(){
    const [toggle, useToogle] = useState("");
    const [id,setId] = useState("");
    const [person, setPerson] = useState({
        id:"",
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
    const {getUser,GlobalState, createUser} = useContext(DataContext);

    const handleChange = (e) => {
        setPerson({
            ...person,
            [e.target.name] : e.target.value
        })
    }
    var datafinal = GlobalState.Users.map((dt,id)=>{
        if(dt.estado){
          return({...dt, 
            estado: 
            <div className='btnStates'>
              <div className='btnActive' >
                  <FaUserCheck/>
              </div>
            </div>,
            functionalities:
            <div className='btnFunctions'>
                <div className='btnAddBranch' onClick={()=>{setPerson({
                  ...person,
                  id:dt.id
                });Toggle("asignar")}}>
                    <FaUserCog/>
                </div>
                <div className='btnEdit' onClick={()=>{setPerson({
                  ...person,
                  id:id
                });Toggle("editar")}}>
                  <FaPencilAlt/>
                </div>
                <div className='btnPrint' onClick={()=>{setPerson({
                  ...dt
                });Toggle("visualizar")}}>
                    <BsFillEyeFill/>
                </div>
            </div>
            }
          )
        }
        return({...dt, 
          estado: 
          <div className='btnStates'>
            <div className='btnDisactive' >
                <FaUserTimes/>
            </div>
          </div>,
          functionalities:
          <div className='btnFunctions'>
                <div className='btnAddBranch' onClick={()=>{setPerson({
                  ...person,
                  id:dt.id
                });Toggle("asignar")}}>
                    <FaUserCog/>
                </div>
              <div className='btnPrint' onClick={()=>{setPerson({
                  ...person,
                  id:id
                  });
                  Toggle("editar")}}>
                  <FaPencilAlt/>
              </div>
                <div className='btnEdit' onClick={()=>{setPerson({
                  ...dt
                });Toggle("visualizar")}}>
                    <BsFillEyeFill/>
                </div>
          </div>
          }
        )
    })

   
   
    useEffect(() => {
        
        getUser()
    }, [toggle]);

   
    function renderSwitch(){
        switch(toggle){
            case  "crear":
                return(
                    <FormBox  
                        title="CREACIÓN DE USUARIO"
                        button="Crear Usuario" 
                        toggle={() => Toggle("")} 
                        onclick={() => {createUser(person)}}
                    >
                        <div>
                            <div className="cuInputContainer">
                                <div className="inputContainer">
                                    <label className='mb-1.5' htmlFor="firstName">Primer Nombre</label>
                                    <input 
                                        type="text"  
                                        id="firstName" 
                                        name="primerNombre" 
                                        value={primerNombre}  
                                        onChange={handleChange}/>
                                </div>
                                <div className="inputContainer">
                                    <label className='mb-1.5' htmlFor="secondName">Segundo Nombre</label>
                                    <input 
                                        type="text"  
                                        id="secondName" 
                                        name="segundoNombre" 
                                        value={segundoNombre}
                                        onChange={handleChange}/>
                                </div>

                                
                                
                            </div>
                            <div className="cuInputContainer">
                                <div className="inputContainer">
                                    <label className='mb-1.5' htmlFor="firstLastName">Primer Apellido</label>
                                    <input 
                                        type="text"  
                                        id="firstLastName" 
                                        name="primerApellido"
                                        value={primerApellido}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="inputContainer">
                                    <label className='mb-1.5' htmlFor="secondLastName">Segundo Apellido</label>
                                    <input 
                                    type="text"  
                                    id="secondLastName"
                                    name="segundoApellido"
                                    value={segundoApellido}
                                    onChange={handleChange}
                                    />
                                </div>
                            </div>

                           

                            <div className="cuInputContainer">
                                <div className="inputContainer">
                                    <label className='mb-1.5' htmlFor="phone">Celular</label>
                                    <input 
                                        type="text"  
                                        id="phone" 
                                        name="celular" 
                                        value={celular}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="inputContainer">
                                    <label className='mb-1.5' htmlFor="email">Correo electronico</label>
                                    <input 
                                        type="text"  
                                        id="email" 
                                        name="email"
                                        value={email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="cuInputContainer">
                                <div className="inputContainer">
                                    <STypeDocument 
                                        name="tipoDocumentoId"
                                        value={tipoDocumentoId}
                                        handleChange={handleChange}
                                    />
                                </div>
                                <div className="inputContainer">
                                    <label className='mb-1.5' htmlFor="Document">Documento de identidad</label>
                                    <input 
                                        type="text"  
                                        id="Document" 
                                        name="cedula" 
                                        value={cedula}
                                        onChange={handleChange}/>
                                </div>
                            </div>

                           

                            <div className="cuInputContainer">
                                <div className="inputContainer">
                                    <label className='mb-1.5' htmlFor="address">Dirección</label>
                                    <input  
                                        type="text"  
                                        id="address" 
                                        name="direccion" 
                                        value={direccion}
                                        onChange={handleChange}
                                    />

                                </div>


                                <div className="inputContainer">
                                   <SGender  
                                        name="generoId"
                                        value={generoId}
                                        handleChange={handleChange}
                                    />
                                </div>   
                            </div>

                            <div className="cuInputContainer ">
                               
                                
                                <div className="inputContainer">
                                    <label className='mb-1.5' htmlFor="address">Nombre de usuario</label>
                                    <input 
                                        className="inputAddress" 
                                        type="text"  
                                        id="address" 
                                        name="nombreUsuario" 
                                        value={nombreUsuario}
                                        onChange={handleChange}
                                    />
                                </div>   
                                <div className="inputContainer">
                                    <SRol 
                                        name="perfilId" 
                                        value={perfilId}
                                        handleChange={handleChange}
                                        />
                                </div> 
                            </div>


                        </div>
                    </FormBox>
                )

                break;
            
            case "asignar" :
                return(
                    <ChoseBranches toggle={(t) => {Toggle(t)}} id={person.id}/>
                )

                break;
            
            case "editar" :
                return(
                    <FormBox title="Editar Usuario" button="Grabar" toggle={() => Toggle("")}>
                        <div>
                            <div className="cuInputContainer">
                                <div className="inputContainer">
                                    <label  htmlFor="firstName">Primer Nombre</label>
                                    <input type="text"  id="firstName"/>
                                </div>
                                <div className="inputContainer">
                                    <label  htmlFor="secondName">Segundo Nombre</label>
                                    <input type="text"  id="secondName"/>
                                </div>

                                
                                
                            </div>
                            <div className="cuInputContainer">
                                <div className="inputContainer">
                                    <label  htmlFor="firstLastName">Primer Apellido</label>
                                    <input type="text"  id="firstLastName"/>
                                </div>
                                <div className="inputContainer">
                                    <label  htmlFor="secondLastName">Segundo Apellido</label>
                                    <input type="text"  id="secondLastName"/>
                                </div>
                            </div>

                           

                            <div className="cuInputContainer">
                                <div className="inputContainer">
                                    <label  htmlFor="phone">Celular</label>
                                    <input type="text"  id="phone"/>
                                </div>
                                <div className="inputContainer">
                                    <label  htmlFor="email">Correo electronico</label>
                                    <input type="text"  id="email"/>
                                </div>
                            </div>

                            <div className="cuInputContainer">
                                <div className="inputContainer">
                                    <label  htmlFor="typeDocument">Tipo Documento</label>
                                    <select type="text"  id="typeDocument">
                                        <option value="1">CC</option>
                                        <option value="2">TI</option>
                                    </select>
                                </div>
                                <div className="inputContainer">
                                    <label  htmlFor="Document">Documento de identidad</label>
                                    <input type="text"  id="Document"/>
                                </div>
                            </div>

                            <div className="cuInputContainer">
                                <div className="inputContainer">
                                    <label  htmlFor="dpto">Departamento</label>
                                    <select type="text"  id="dpto">
                                        <option value="1">Atlantico</option>
                                        <option value="2">Bolivar</option>
                                    </select>
                                </div>
                                <div className="inputContainer">
                                    <label  htmlFor="city">Ciudad</label>
                                    <select type="text"  id="city">
                                        <option value="1">Barranquilla</option>
                                        <option value="2">Soledad</option>
                                    </select>
                                </div>
                            </div>

                            <div className="cuInputContainer">
                                <div className="inputContainer cuInputAddress">
                                    <label  htmlFor="address">Dirección</label>
                                    <input className="inputAddress" type="text"  id="address"/>
                                </div>   
                            </div>

                            <div className="cuInputContainer ">
                               
                                
                                <div className="inputContainer">
                                    <label  htmlFor="address">Nombre de usuario</label>
                                    <input className="inputAddress" type="text"  id="address" disabled/>
                                </div>   
                                <div className="inputContainer">
                                    <label  htmlFor="address">Rol</label>
                                    <select type="text"  id="city">
                                        <option value="1">Barranquilla</option>
                                        <option value="2">Soledad</option>
                                    </select>
                                </div> 
                            </div>


                        </div>
                    </FormBox>
                )
                
                break;

                case "visualizar" :
                return(<SeeInformation toggle={()=>Toggle("")} data={person}/>)
                
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
                    <DataTables 
                    toggle={(t)=>{Toggle(t)}} data={datafinal} 
                    dataSchema={["Id","Documento","Nombre","Nombre de usuario","ROL","Estados","Funcionalidades"]} buttons={[
                    <button onClick={()=>{Toggle("crear");setPerson({
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
                        supervisor: ''}
                    );}}>Crear Usuario</button>
                    ]} />
                </div>
            {renderSwitch()}
            </div>
            

    );

}

export default ListUser;
