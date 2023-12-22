import React, { useContext } from "react";
import Login from "./features/login/pages/Login";
import "./global/styles/baseStyles.css"
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import Profiles from './features/profiles/pages/Profiles';
import ListUser from './features/users/pages/ListUser';
import CrudEquipos from './features/equipos/pages/CrudEquipos'
import ReporteDaños from './features/reportes/pages/ReporteDaños'
import RepoteMantenimientos from './features/reportes/pages/ReporteMantenimientos'
import { DataContext } from "./controladores/Context";
import ChangePassword from "./features/changePassword/pages/ChangePassword";
import { FaThinkPeaks } from "react-icons/fa";
import Navbar from "./global/components/Navbar";
import Menu from "./global/components/Menu";
import Layer from "./global/components/Layer";


function App() {
  const {GlobalState} = useContext(DataContext);
  
     /* if(true){
       return(
         <BrowserRouter >
           <Routes>
             <Route path='/' element={<Login/>}/>
           </Routes>
         </BrowserRouter>
       )
     } */

    return(
      <BrowserRouter >
        <Routes>
          <Route path='/' element={
            <Layer>
              <ListUser/>
            </Layer>
          }/>
          <Route path='/usuarios' element={
            <Layer>
                <ListUser/>
            </Layer>
          }/>
          <Route path='/equipos' element={
            <Layer>
                <CrudEquipos/>
            </Layer>
          }/>
          <Route path='/reporteDaños' element={
            <Layer>
                <ReporteDaños/>
            </Layer>
          }/>
          <Route path='/reporteMantenimiento' element={
            <Layer>
                <RepoteMantenimientos/>
            </Layer>
          }/>
          <Route path='/indicadoresGestion' element={
            <Layer>
                <CrudEquipos/>
            </Layer>
          }/>
          <Route path='/vistainventario' element={
            <Layer>
                <CrudEquipos/>
            </Layer>
          }/>
          <Route path="*" element={
            <Layer>
                <Profiles/>
            </Layer>
          }/>
        </Routes>
      </BrowserRouter>
    )
}

export default App;






