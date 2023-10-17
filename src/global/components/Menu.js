import React from "react";
import "../../features/menu/utils/styles/menu.css"
import MenuList from "../../features/menu/components/MenuList";
import "../../features/menu/utils/styles/menu.css"
import opt from "../../features/menu/components/MenuOptions";


function Menu() {
    /*aqui se definen los items del menu de forma dinamica, para que en caso de crear nuevos items, simplemente tengan que editarse desde aqui existen las rutas bases en la clase MenuList, las cuales son identificadas en un switch y se les agrega el icono que les perteneces, no obstante, estas tienen unos items MenuList hijos, los cuales tambien se mapean, pero para evitar que se produzcan errores al mapear un array sin objetos y retorne undefined al mapearlos debe ponerese extended true para indicar que tendran hijos y estos podran mapearse, esto puede hacerse 2 niveles, ya que en el ultimo .map simplemente contempla items que no tienen hijos y los cuales conducen a una ruta (link), si requiere hacer un menu con mas items hijos es necesario editar la logica del ultimo .map*/
  
  return (
      <div className="menu">
        <ul>
          {
            opt.map((item)=>(
              <MenuList name={item.name}>
                {
                  item.extend?
                  item.sons.map((item2)=>(
                    <MenuList name={item2.name} extend={item2.extend?true:false}>
                      {
                        item2.extend?
                        item2.sons.map((item3)=>(
                          <MenuList name={item3.name} link={item3.link}/>
                        ))
                        :
                        null
                      }
                    </MenuList>
                  ))
                  :
                  null
                }
              </MenuList>
            ))
          }
        </ul>
      </div>
  );
}

export default Menu;