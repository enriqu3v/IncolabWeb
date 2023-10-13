import React, { useState, useEffect, useContext } from 'react';
import { FaSearch,FaChevronLeft,FaChevronRight,FaTrashAlt,FaPencilAlt,FaUserCog,FaUserCheck,FaUserTimes,FaTimes, FaEye} from 'react-icons/fa';
import { DataContext } from '../../controladores/Context';
import '../styles/dataTables.css';

function DataTables(props){
    var completeData =[]
    props.data.some(function(element, index){
        completeData.push(Object.values(element))
        return index === props.nColums-1;
    });
    /*props.data.forEach((element,ind) => {
        if(ind<props.nColums){
            completeData.push(Object.values(element))
        }else{
            break;
        }
    });*/
    console.log(completeData)
    while(completeData.length<props.nColums){
        completeData.push([])
    }
    console.log(completeData)
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
                    <table>
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
                                            {props.dataSchema.map((dt2,id2)=>(<td key={id2}></td>))}
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
                </div>
    )
    
}
    DataTables.defaultProps = {  
        nColums: 15
    } 
export default DataTables;