import React, { useState, useEffect, useContext } from 'react';
import { FaSearch,FaChevronLeft,FaChevronRight,FaTrashAlt,FaPencilAlt,FaUserCog,FaUserCheck,FaUserTimes,FaTimes, FaEye} from 'react-icons/fa';
import '../styles/dataTables2.css';
import { BsMarkdown } from 'react-icons/bs';
function DataTables(props){
    var completeData =[]
    props.data.forEach(element => {
        completeData.push(element)
    });
    while(completeData.length<props.nColums){
        completeData.push({})
    }
    switch(props.type){
        case "permisos":
            return(
                <DataTableManagePermissions toggle ={props.toggle} data={completeData}/>
            )
            break;
            case "sucursales":
                return(
                    <DataTableBranch toggle={props.toggle} data={props.data} />
                )
                break;
            case "createVouchers":
                return(
                    <DataTableVoucher dataSchema={props.dataSchema}toggle={props.toggle} data={props.data} nColums={props.nColums}/>
                )
                break;
            default:
                return(
                    <Markdown buttons={props.buttons} children={props.children}/>
                )
                break;
    }
}
    
function Markdown (props) {
    return(
        <div className="tableContainer">
            <div className="tableTools">
                <div className="buttons">
                    {props.buttons}
                </div>
                <div className="search">
                    <input placeholder="filtrar..."/>
                    <button><FaSearch/></button>
                </div>
            </div>
                {props.children}
        </div>
    )
}


function DataTableManagePermissions (props) {
    const [toggle1,useToggle1]=useState(false);
    const [toggle2,useToggle2]=useState(false);
    const Toggle1 =(x)=>useToggle1(x);
    const Toggle2 =(x)=>useToggle2(x);

    return(
        <div className="grayBox">
            <div className="form tableContainer">
                <FaTimes fill="red" className="iconx" onClick={props.toggle}/>
                <h1>Permisos</h1>
                <div className="tableTools">
                    <div className="buttons">
                        {toggle1?
                            <button onClick={()=>{Toggle1(!toggle1)}}>Activar todos</button>
                        :
                            <button className="bg4" onClick={()=>{Toggle1(!toggle1)}}>Desactivar todos</button>
                        }
                        {toggle2?
                            <button onClick={()=>{Toggle2(!toggle2)}} style={{width:180 }}>Supervisar todos</button>
                        :
                            <button className="bg4" onClick={()=>{Toggle2(!toggle2)}} style={{width:180 }}>No supervisar ninguno</button>
                        }
                    </div>
                    <div className="search">
                        <input placeholder="filtrar..."/>
                        <button><FaSearch/></button>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Crear</th>
                            <th>Modificar</th>
                            <th>Anular</th>
                            <th>Imprimir</th>
                            <th>Supervision</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map((dt)=>{
                            if(dt.name!= undefined){
                                return(
                            <tr>
                                <td>{dt.name}</td>
                                <td>{dt.data[0]===1?
                                            <input type="checkbox" id="recordarme" checked/>
                                        :
                                            <input type="checkbox" id="recordarme"/>
                                    }
                                </td>
                                <td>{dt.data[1]===1?
                                            <input type="checkbox" id="recordarme" checked/>
                                        :
                                            <input type="checkbox" id="recordarme"/>
                                    }
                                </td>
                                <td>{dt.data[2]===1?
                                            <input type="checkbox" id="recordarme" checked/>
                                        :
                                            <input type="checkbox" id="recordarme"/>
                                    }
                                </td>
                                <td>{dt.data[3]===1?
                                            <input type="checkbox" id="recordarme" checked/>
                                        :
                                            <input type="checkbox" id="recordarme"/>
                                    }
                                </td>
                                <td>{dt.data[4]===1?
                                            <input type="checkbox" id="recordarme" checked/>
                                        :
                                            <input type="checkbox" id="recordarme"/>
                                    }
                                </td>
                            </tr>
                            )
                        }
                        else{
                            return(
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            )
                        }
                        })}
                            
                    </tbody>
                </table>
                <ul className='footer'>
                    <li><FaChevronLeft/></li>
                    <li>1</li>
                    <li>2</li>
                    <li><FaChevronRight/></li>
                </ul>
                <button onClick={()=>props.toggle("")}>Guardar</button>
            </div>
        </div>
    ) 

}

function DataTableBranch(props) {
    return(
        
        <div className="form tableContainer">
            <div className="tableTools">
                <table className="tableBranch">
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Descripción</th>
                            <th>Activar</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {props.data.map((dt)=>{
                        return(
                        <tr>
                            <td>{dt.code}</td>
                            <td>{dt.name}</td>
                            <td>  
                                <div className="checkboxContainer checkBranch">
                                    <input type="checkbox" id="active"/>
                                </div>
                            </td>
                            
                            
                        </tr>
                        )
                    })}
                    </tbody>
                </table>    


            </div>
        </div>    
    );
}
function DataTableVoucher(props){
    var completeData =[]
    props.data.forEach(element => {
        completeData.push(Object.values(element))
    });
    console.log(completeData)
    while(completeData.length<props.nColums){
        completeData.push([])
    }
    console.log(completeData)
    return(
        <div className="tableContainer" style={{marginTop:"10px"}}>
                    <table style={{width:"1230px"}}>
                        <thead>
                            <tr>
                                {props.dataSchema.map((dt,id)=>(
                                    <th key={id}>{dt}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {completeData.map((dt,id)=>{
                                if(dt.length>0){
                                    return(
                                    <tr key={id}>
                                        {dt.map((dt2,id2)=>(<td key={id2}>{dt2}</td>))}
                                    </tr>
                                    )
                                }
                                else{
                                    return(
                                        <tr key={id}>
                                            {props.dataSchema.map((dt2,id2)=>(<td key={id2}>
                                                {dt2}
                                                </td>))}
                                        </tr>
                                    )
                                }
                            })}
                        </tbody>
                    </table>
                    <ul className='footer' >
                        <li><FaChevronLeft/></li>
                        <li>1</li>
                        <li>2</li>
                        <li><FaChevronRight/></li>
                    </ul>
                </div>
    )
} 

export default DataTables;