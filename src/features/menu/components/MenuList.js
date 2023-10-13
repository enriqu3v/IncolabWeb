import React, { useState } from "react";
import "../../../features/menu/utils/styles/menuList.css"
import { BsChevronDown,BsBoxSeam, BsGem, BsGear, BsCashCoin, BsClipboardData, BsCreditCardFill, BsBarChartLineFill, BsPeopleFill, BsChevronUp } from "react-icons/bs";
import { Link } from "react-router-dom";

function MenuList(props){
    const [toggle,setToggle] = useState(false);
    const Toggle =()=>setToggle(!toggle);
    switch(props.name){
        case "Configuracion":
        return(
            <li>
                <div className="meLiTitle cPointer"  onClick={()=>Toggle()}><BsGear class="meLiIcon"/><p>{props.name}</p>{toggle ?
                <BsChevronUp size="15px"/>
                :
                <BsChevronDown size="15px"/>
                }
                </div>
                <ul className={toggle? "":"menuLiDisactive"}>{props.children}</ul>
            </li>
        )
        case "Inventario":
        return(
            <li>
                <div className="meLiTitle cPointer" onClick={()=>Toggle()}><BsBoxSeam class="meLiIcon"/><p>{props.name}</p>{toggle ?
                <BsChevronUp size="15px"/>
                :
                <BsChevronDown size="15px"/>
                }
                </div>
                <ul className={toggle? "":"menuLiDisactive"}>{props.children}</ul>
            </li>
        )
        case "Joyeria":
        return(
            <li>
                <div className="meLiTitle cPointer" onClick={()=>Toggle()}><BsGem class="meLiIcon"/><p>{props.name}</p>{toggle ?
                <BsChevronUp size="15px"/>
                :
                <BsChevronDown size="15px"/>
                }
                </div>
                <ul className={toggle? "":"menuLiDisactive"}>{props.children}</ul>
            </li>
        )
        case "Tesoreria":
        return(
            <li>
                <div className="meLiTitle cPointer" onClick={()=>Toggle()}><BsCashCoin class="meLiIcon"/><p>{props.name}</p>{toggle ?
                <BsChevronUp size="15px"/>
                :
                <BsChevronDown size="15px"/>
                }
                </div>
                <ul className={toggle? "":"menuLiDisactive"}>{props.children}</ul>
            </li>
        )
        
        case "Contabilidad":
        return(
            <li>
                <div className="meLiTitle cPointer" onClick={()=>Toggle()}><BsClipboardData class="meLiIcon"/><p>{props.name}</p>{toggle ?
                <BsChevronUp size="15px"/>
                :
                <BsChevronDown size="15px"/>
                }
                </div>
                <ul className={toggle? "":"menuLiDisactive"}>{props.children}</ul>
            </li>
        )
        
        case "Credito":
        return(
            <li>
                <div className="meLiTitle cPointer" onClick={()=>Toggle()}><BsCreditCardFill class="meLiIcon"/><p>{props.name}</p>{toggle ?
                <BsChevronUp size="15px"/>
                :
                <BsChevronDown size="15px"/>
                }
                </div>
                <ul className={toggle? "":"menuLiDisactive"}>{props.children}</ul>
            </li>
        )
        
        case "Facturacion":
        return(
            <li>
                <div className="meLiTitle cPointer" onClick={()=>Toggle()}><BsBarChartLineFill class="meLiIcon"/><p>{props.name}</p>{toggle ?
                <BsChevronUp size="15px"/>
                :
                <BsChevronDown size="15px"/>
                }
                </div>
                <ul className={toggle? "":"menuLiDisactive"}>{props.children}</ul>
            </li>
        )
        
        case "Cuentas por pagar":
        return(
            <li>
                <div className="meLiTitle cPointer" onClick={()=>Toggle()}><BsCashCoin class="meLiIcon"/><p>{props.name}</p>{toggle ?
                <BsChevronUp size="15px"/>
                :
                <BsChevronDown size="15px"/>
                }
                </div>
                <ul className={toggle? "":"menuLiDisactive"}>{props.children}</ul>
            </li>
        )
        case "Nomina":
        return(
            <li>
                <div className="meLiTitle cPointer" onClick={()=>Toggle()}><BsPeopleFill class="meLiIcon"/><p>{props.name}</p>{toggle ?
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