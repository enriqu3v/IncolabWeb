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
        case "Configuracion":
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

        // Pestaña Equipo
        case "Equipo":
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

        //Pestaña de Reportes
        case "Reportes":
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

        // Pestaña Inventario
        case "Inventario":
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

        // Pestaña Calendario
        case "Calendario":
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
                        <div className="meLiTitle">{props.name}</div>
                    </li>
                )
            }
    }
}

export default MenuList;