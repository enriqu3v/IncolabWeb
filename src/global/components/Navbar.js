import logo from "../assets/logo.jpg"
import React, { useContext, useState } from "react";
import { FaBars,  FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DataContext } from "../../controladores/Context";
import NSearchOptions from "../../features/menu/components/NSearchOptions";
import "../../features/menu/utils/styles/navbar.css"


function Navbar() {
  const {GlobalState,changeMenu,logOut} = useContext(DataContext);
  const[toggleUser,setToggleUser]= useState(false);
  const[Search,setSearch]= useState("");
  return (
      <div className="navbar">
          <FaBars className="naButton cPointer" onClick={()=>changeMenu()} />
          <div>LOGO DE LA EMPRESA</div>
          {/* Barra de busqueda */}
          <div className="naSearch">
            <input type="text" value={Search} onChange={(e)=>{setSearch(e.target.value)}}></input>
            <FaSearch className="naSeButton cPointer"/>
            {Search !== ""?
              <NSearchOptions search={Search} onclick={()=>setSearch("")}/>
              :
              null
            }
          </div>

          {/* Logo del perfil y mini-menú*/}
          <div className="naProfile cPointer" onClick={()=>setToggleUser(!toggleUser)}>
            <div className="naData">
              <p>{GlobalState.user.userName}</p><p>ADMIN</p>
            </div>
            <div className="naUser"></div>
          </div>
          {toggleUser?
          <ul className="naMenuUser"> 
            <Link to={"perfil"} className="nLink cPointer "><li>Perfil</li></Link>
            <Link to={"cambiarcontraseña"} className="nLink cPointer "><li> Cambiar contreaseña</li></Link>
            <Link to={"/"} className="nLink cPointer " onClick={()=>{logOut()}}><li>Cerrar Sesion</li></Link>
          </ul>:
          null }
      </div>
  );
}

export default Navbar;