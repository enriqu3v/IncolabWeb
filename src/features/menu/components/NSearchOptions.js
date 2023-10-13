import React from "react";
import "../utils/styles/nSearchOptions.css"
import "../utils/styles/menu.css"
import { Link } from "react-router-dom";
import opt from "../components/MenuOptions";


function NSearchOptions(props) {
  var options =[]
  /* aqui filtramos los datos del menu, para solo mostrar los que poseen un link, al cual podemos enviar al usuario, y asi renderizarlos en el menu */
  opt.forEach((op)=>{
      if(op.extend){
        op.sons.forEach((op2)=>{
            if(op2.extend){
              op2.sons.forEach((op3)=>{
                if(op3.link != undefined){
                  options.push(op3)
                }
              })
            }
            else{
              if(op2.link != undefined){
                options.push(op2)
              }
            }
        })
      }
    }
  )
  console.log(options)
  var opts = options.filter(option=> option.route.toLowerCase().includes(props.search.toLowerCase()) || option.description.toLowerCase().includes(props.search.toLowerCase()))
  return (
      <div className="naOptions">
        <ul>
          { 
          opts.map((opt, id)=>id===opts.length-1?(
            /* aqui se le quita la barra de abajo al ultimo elemento del submenu*/
            <Link to={opt.link} key={id} className="nLink cPointer" onClick={()=>props.onclick()}>
              <li>
                <p>{opt.route}</p>
                <p>{opt.description}</p>
                <div></div>
              </li>
            </Link>
          ):
          (
            /* aqui se renderizan los elementos normales del submenu*/
            <Link to={opt.link} key={id} className="nLink cPointer" onClick={()=>props.onclick()}>
              <li>
                <p>{opt.route}</p>
                <p>{opt.description}</p>
                <hr/>
              </li>
            </Link>
          )
          )}
        </ul>
      </div>
  );
}

export default NSearchOptions;