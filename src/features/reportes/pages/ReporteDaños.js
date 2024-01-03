import React, {useContext, useState, useEffect} from 'react';
import DataTables from '../../../global/components/DataTables';
import '../utils/styles/user.css';
import FormBox from '../../../global/components/FormBox';
import { DataContext } from '../../../controladores/Context';
import { FaPencilAlt, FaUserCheck, FaUserCog, FaUserTimes } from 'react-icons/fa';
import { BsFillEyeFill } from 'react-icons/bs';


function ReporteDaños() {
    const [toggle, useToogle] = useState("");
    const [id, setId] = useState("");


    const [person, setPerson] = useState({
        id:"",
        generoId: '',
        tipoDocumentoId: '',
        cedula: '',
        primerApellido: '',
        segundoApellido: '',
        Nombres: '',
        Apellidos: '',
        email: '',
        celular: '',
        municipioId: '',
        direccion: '',
        area: '',
        cargo: '',
        nombreUsuario: '',
        password: '',
        supervisor: ''
    });
    
    const {

        generoId,
        tipoDocumentoId,
        cedula,
        primerApellido,
        segundoApellido,
        Nombres,
        Apellidos,
        email,
        celular,
        municipioId,
        direccion,
        message,
        area,
        cargo,
        nombreUsuario,
        password,
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



    function gestionequipos(){
        switch(toggle){
            case  "crear":
                return(
                    <FormBox  
                        title="CREACIÓN DE REPORTE DE DAÑO"
                        button="Crear Reporte" 
                        toggle={() => Toggle("")} 
                        onclick={() => {createUser(person)}}
                    >
                        <div>


                            <label for="message" class="block mb-2 text-sm font-medium text-gray-300 dark:text-black">Actividad en Curso</label>
                            <textarea id="message" value={message} rows="4" class="block p-2.5 w-full text-sm text-gray-300 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-200 dark:placeholder-gray-700 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Describa detalladamente la acción que estaba realizando al momento de ocurrir la falla..." onChange={handleChange}></textarea>



                            <div className="cuInputContainer">
                                <div className="inputContainer">
                                    <label className='mb-1.5' htmlFor="Nombres">Nombre Reportante</label>
                                    <input 
                                        type="text"  
                                        id="Nombres" 
                                        name="Nombres" 
                                        value={Nombres}  
                                        onChange={handleChange}/>
                                </div>
                                <div className="inputContainer">
                                    <label className='mb-1.5' htmlFor="Apellidos">Área</label>
                                    <input 
                                        type="text"  
                                        id="Apellidos" 
                                        name="Apellidos" 
                                        value={Apellidos}
                                        onChange={handleChange}/>
                                </div>                                                         
                            </div>

                            <div className="cuInputContainer">
                                <div className="inputContainer">
                                    <label className='mb-1.5' htmlFor="cedula">Código Equipo</label>
                                    <input 
                                        type="text"  
                                        id="cedula" 
                                        name="cedula" 
                                        value={cedula}
                                        onChange={handleChange}/>
                                </div>
                                <div className="inputContainer">
                                        <label className='mb-1.5' htmlFor="tipoDocumentoId">Instalaciones y Componentes</label>
                                        <select type="text" value={tipoDocumentoId} name='tipoDocumentoId' id="tipoDocumentoId">
                                            <option value="1">Ninguno</option>
                                            <option value="2">Patch Cord</option>
                                            <option value="3">Jack RJ45</option>
                                            <option value="4">Cable de Poder</option>
                                            <option value="5">Batería Portátil</option>
                                            <option value="6">Cable HDMI</option>
                                            <option value="7">Cable VGA</option>
                                            <option value="8">Teclado</option>
                                            <option value="9">Mouse</option>
                                            <option value="10">Switch</option>
                                            <option value="11">Otro...</option>
                                        </select>
                                </div>
                            </div>
                          

                            <div className="cuInputContainer">
                                <div className="inputContainer">
                                        <label className='mb-1.5' htmlFor="tipoDocumentoId">Descripción de Falla</label>
                                        <select type="text" value={tipoDocumentoId} name='tipoDocumentoId' id="tipoDocumentoId">
                                            <option value="1">No Funciona</option>
                                            <option value="2">Cables Desgastados</option>
                                            <option value="3">No Arranca Sistema</option>
                                            <option value="4">No Enciende</option>
                                            <option value="5">Bloqueo</option>
                                            <option value="6">Recalentamiento</option>
                                            <option value="7">Reinicio del Sistema</option>
                                            <option value="8">No Carga Batería</option>
                                            <option value="9">Elemento Perdido</option>
                                            <option value="10">Otro...</option>
                                        </select>
                                </div>
                                <div className="inputContainer">
                                        <label className='mb-1.5' htmlFor="tipoDocumentoId">Tipo de Mantenimiento</label>
                                        <select type="text" value={tipoDocumentoId} name='tipoDocumentoId' id="tipoDocumentoId">
                                            <option value="1">Mantenimiento Preventivo</option>
                                            <option value="2">Mantenimiento Correctivo</option>
                                        </select>
                                </div>
                            </div>


                            <div className="cuInputContainer">
                                <div className="inputContainer">
                                    <label className='mb-1.5' htmlFor="nombreUsuario">Gerencia Responsable</label>
                                    <input 
                                        type="text"  
                                        id="nombreUsuario" 
                                        name="nombreUsuario" 
                                        value={nombreUsuario}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="inputContainer">
                                    <label className='mb-1.5' htmlFor="password">Usuario Responsable</label>
                                    <input 
                                        type="text"  
                                        id="password" 
                                        name="password"
                                        value={password}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            
                        </div>
                    </FormBox>
                )

                break;
            
            /* case "asignar" :
                return(
                    <ChoseBranches toggle={(t) => {Toggle(t)}} id={person.id}/>
                )

                break; */
            
            /* case "editar" : */
                return(
                    <FormBox title="Editar Usuario" button="Grabar" toggle={() => Toggle("")}>
                        <div>
                            <div className="cuInputContainer">
                                <div className="inputContainer">
                                    <label  htmlFor="firstName">Nombres</label>
                                    <input type="text"  id="firstName"/>
                                </div>
                                <div className="inputContainer">
                                    <label  htmlFor="secondName">Apellidos</label>
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
                                    <select type="text"  id="">
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
                                    <select type="text"  id="">
                                        <option value="1">Supervisor</option>
                                        <option value="2">Empleado</option>
                                    </select>
                                </div> 
                            </div>


                        </div>
                    </FormBox>
                )
                
                break;

                /* case "visualizar" :
                return(<SeeInformation toggle={()=>Toggle("")} data={person}/>)
                
                break; */

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
                    dataSchema={["ID","Nombre Reportante","Area","Código Equipo","Instalaciones y Componentes","Descripción Falla","Tipos de Mantenimiento","Fecha del Reporte","Funcionalidades"]} buttons={[
                    <button onClick={()=>{Toggle("crear");setPerson({
                        generoId: '',
                        tipoDocumentoId: '',
                        cedula: '',
                        primerApellido: '',
                        segundoApellido: '',
                        Nombres: '',
                        Apellidos: '',
                        email: '',
                        celular: '',
                        municipioId: '',
                        direccion: '',
                        area: '',
                        nombreUsuario: '',
                        supervisor: ''}
                    );}}>Crear Reporte</button>
                    ]} />
                </div>
            {gestionequipos()}
            </div>
            

    );




}

export default ReporteDaños