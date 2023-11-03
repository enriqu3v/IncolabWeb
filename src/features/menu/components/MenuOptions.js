const opt = [
  
  // Pestaña Configuracion
  {
    name:"Configuración",
    extend:true,
    sons:[{
        name:"Configuración de usuarios",
        extend:true,
        sons:[{
                name:"Gestión de usuarios",
                link:"/usuarios",
                route:"Configuracion/Configuracion de usuarios/Gestion de usuarios",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus tellus nibh, id sodales diam pellentesque a. Sed at odio nec nunc mattis ullamcorper sed sit amet neque. Cras pulvinar magna id nisl aliquet iaculis. Duis tincidunt rutrum porta. "
              },{
                name:"Gestión de perfiles",
                link:"/perfiles",
                route:"Configuracion/Configuracion de usuarios/Gestion de perfiles",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus tellus nibh, id sodales diam pellentesque a. Sed at odio nec nunc mattis ullamcorper sed sit amet neque. Cras pulvinar magna id nisl aliquet iaculis. Duis tincidunt rutrum porta. "
              }
        ]
    }]
  },
  
  // Pestaña Equipo
  {
    name:"Equipo",
    extend:true,
    sons:[{
      name: "Gestión de  Equipos",
      link:"/Equipos",
      route:"Equipo/Gestion de Equipos",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus tellus nibh, id sodales diam pellentesque a."
    }]
  },
  
  // Pestaña Reportes
  {
    name:"Reportes",
    extend:true,
    sons:[
      {
        name:"Gestion de Reporte de Daños",
        link:"/reporteDaños",
        route:"Reportes/Gestion de Reporte de Daños",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus tellus nibh, id sodales diam pellentesque a. "
      },{
        name:"Gestion de Reporte de Mantenimientos",
        link:"/reporteMantenimiento",
        route:"Reportes/Gestion de Reporte de Mantenimientos",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus tellus nibh, id sodales diam pellentesque a. "
      },{
        name:"Indicadores de Gestion",
        link:"/indicadoresGestion",
        route:"Reportes/Indicadores de Gestion",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus tellus nibh, id sodales diam pellentesque a. "
      }
    ]
  },

  // Pestaña Inventario
  {
    name:"Inventario",
    extend:false,
    sons:[]
  },
  
  // Pestaña Calendario
  {
    name:"Calendario",
    extend:false,
    sons:[]
  }
]

export default opt;