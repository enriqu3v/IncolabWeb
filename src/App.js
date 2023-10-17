import React, { useContext } from "react";
import Login from "./features/login/pages/Login";
import "./global/styles/baseStyles.css"
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import Profiles from './features/profiles/pages/Profiles';
import ListUser from './features/users/pages/ListUser';
import { DataContext } from "./controladores/Context";
import TypesOfVouchers from "./features/typesOfVouchers/pages/TypesOfVouchers";
import Vouchers from "./features/vouchers/pages/Vouchers";
import ChangePassword from "./features/changePassword/pages/ChangePassword";
import LedgerAccounts from "./features/ledgerAccounts/pages/LedgerAccounts";
import { FaThinkPeaks } from "react-icons/fa";
import FoliarBooks from "./features/foliarBooks/pages/FoliarBooks";
import Navbar from "./global/components/Navbar";
import Menu from "./global/components/Menu";
import Layer from "./global/components/Layer";
import ExplanatoryNotes from "./features/explanatoryNotes/pages/ExplanatoryNotes";
import Branch from "./features/branch/pages/Branch";

function App() {
  const {GlobalState} = useContext(DataContext);
  
    // if(true){
    //   return(
    //     <BrowserRouter >
    //       <Routes>
    //         <Route path='/' element={<Login/>}/>
    //       </Routes>
    //     </BrowserRouter>
    //   )
    // }
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
          <Route path='/perfiles' element={
            <Layer>
                <Profiles/>
            </Layer>
          }/>
          <Route path='/tiposdecomprobantes' element={
            <Layer>
                <TypesOfVouchers/>
            </Layer>
          }/>
          <Route path='/comprobantes' element={
            <Layer>
                <Vouchers/>
            </Layer>
          }/>
          <Route path='/cambiarcontraseña' element={
            <Layer>
                <ChangePassword/>
            </Layer>
          }/>
          <Route path='/foliarlibros' element={
            <Layer>
                <FoliarBooks/>
            </Layer>
          }/>
          <Route path='/cuentascontables' element={
            <Layer>
                <LedgerAccounts/>
            </Layer>
          }/>
          <Route path='/notasaclaratorias' element={
            <Layer>
                <ExplanatoryNotes/>
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






