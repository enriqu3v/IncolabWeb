import React, { useContext, useState } from "react";
import { FaBars,  FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DataContext } from "../../controladores/Context";
import NSearchOptions from "../../features/menu/components/NSearchOptions";
import Navbar from "./Navbar";
import Menu from "./Menu";


function Layer(props) {
  const {GlobalState} = useContext(DataContext);
  return (
    <div className=
    {GlobalState.menu?
      "containerPrincipal"
      :
      "containerPrincipal disableMenu"
    }>
      <Navbar/>
      {GlobalState.menu?
        <Menu/>
        :
        null
      }
        <div className="contentContainer">
          {props.children}
        </div>
      </div>
  );
}

export default Layer;