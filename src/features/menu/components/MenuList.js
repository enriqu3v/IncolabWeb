import React, { useState } from "react";
import "../../../features/menu/utils/styles/menuList.css"
import { BsChevronDown,BsBoxSeam, BsGem, BsGear, BsCashCoin, BsClipboardData, BsCreditCardFill, BsBarChartLineFill, BsPeopleFill, BsChevronUp, BsClipboard, BsFillcalen} from "react-icons/bs";
import { FcSettings, FcCustomerSupport, FcMultipleDevices, FcCalendar, FcPlanner, FcDoughnutChart } from "react-icons/fc";
import { Link } from "react-router-dom";

function MenuList(props){
    const [toggle,setToggle] = useState(false);
    const Toggle =()=>setToggle(!toggle);
    switch(props.name){
        // Pestaña Configuracion
        case "Configuración":
            if(props.extend){
                return(
                    <li>
                        <div className="meLiTitle cPointer ptop"  onClick={()=>Toggle()}><FcSettings class="meLiIcon"/><p>{props.name}</p>{toggle ?
                        <BsChevronUp size="15px"/>
                        :
                        <BsChevronDown size="15px"/>
                        }
                        </div>
                        <ul className={toggle? "":"menuLiDisactive"}>{props.children}</ul>
                    </li>
                )
            }
            else{
                return(
                    <li>
                        <Link to={props.link} className="nLink  cPointer ptop"><div className="meLiTitle"><FcSettings class="meLiIcon"/>{props.name}</div></Link>
                    </li>
                )
            }

        // Pestaña Equipo
        case "Equipo":
            if(props.extend){
                return(
                    <li>
                        <div className="meLiTitle cPointer ptop" onClick={()=>Toggle()}><FcMultipleDevices class="meLiIcon"/><p>{props.name}</p>{toggle ?
                        <BsChevronUp size="15px"/>
                        :
                        <BsChevronDown size="15px"/>
                        }
                        </div>
                        <ul className={toggle? "":"menuLiDisactive"}>{props.children}</ul>
                    </li>
                    
                )
            }
            else{
                return(
                    <li>
                        <Link to={props.link} className="nLink  cPointer ptop"><div className="meLiTitle"><FcSettings class="meLiIcon"/>{props.name}</div></Link>
                    </li>
                )
            }

        //Pestaña de Reportes
        case "Reportes":
        
            if(props.extend){
                return(
                    <li>
                        <div className="meLiTitle cPointer ptop"  onClick={()=>Toggle()}><FcCustomerSupport class="meLiIcon"/><p>{props.name}</p>{toggle ?
                        <BsChevronUp size="15px"/>
                        :
                        <BsChevronDown size="15px"/>
                        }
                        </div>
                        <ul className={toggle? "":"menuLiDisactive"}>{props.children}</ul>
                    </li>
                )
            }
            else{
                return(
                    <li>
                        <Link to={props.link} className="nLink  cPointer ptop"><div className="meLiTitle"><FcCustomerSupport class="meLiIcon"/>{props.name}</div></Link>
                    </li>
                )
            }

        // Pestaña Inventario
        case "Inventario":
            if(props.extend){
                return(
                    <li>
                        <div className="meLiTitle cPointer ptop" onClick={()=>Toggle()}><FcDoughnutChart class="meLiIcon"/><p>{props.name}</p>{toggle ?
                        <BsChevronUp size="15px"/>
                        :
                        <BsChevronDown size="15px"/>
                        }
                        </div>
                        <ul className={toggle? "":"menuLiDisactive"}>{props.children}</ul>
                    </li>
                )
            }
            else{
                return(
                    <li>
                        <Link to={props.link} className="nLink  cPointer"><div className="meLiTitle ptop"><FcDoughnutChart class="meLiIcon"/>{props.name}</div></Link>
                    </li>
                )
            }

        // Pestaña Calendario
        case "Calendario":
            if(props.extend){
                return(
                    <li>
                        <div className="meLiTitle cPointer ptop" onClick={()=>Toggle()}><FcPlanner class="meLiIcon"/><p>{props.name}</p>{toggle ?
                        <BsChevronUp size="15px"/>
                        :
                        <BsChevronDown size="15px"/>
                        }
                        </div>
                        <ul className={toggle? "":"menuLiDisactive"}>{props.children}</ul>
                    </li>
                )
            }
            else{
                return(
                    <li>
                        <Link to={props.link} className="nLink  cPointer"><div className="meLiTitle ptop"><FcPlanner class="meLiIcon"/>{props.name}</div></Link>
                    </li>
                )
            }
        default:
            if(props.extend){
                return(
                    <li>
                        <div className="meLiTitle cPointer" onClick={()=>Toggle()}><p>{props.name}</p>{toggle ?
                <BsChevronUp size="15px"/>
                :
                <BsChevronDown size="15px"/>
                }
                </div>
                        <ul className={toggle? "":"menuLiDisactive"}>{props.children}</ul>
                    </li>
                )
            }
            else{
                if(props.link){
                    return(
                        <li>
                            <Link to={props.link} className="nLink  cPointer"><div className="meLiTitle" onClick={()=>Toggle()}>{props.name}</div></Link>
                        </li>
                    )
                }
                return(
                    <li>
                        <Link to={props.link} className="nLink  cPointer">
                            <div className="meLiTitle" >
                                {props.name}
                        </div>
                        </Link>
                    </li>
                )
            }
    }
}

export default MenuList;