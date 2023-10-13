const opt = [{
    name:"Configuracion",
    extend:true,
    sons:[{
        name:"Configuracion de usuarios",
        extend:true,
        sons:[{
                name:"Gestion de usuarios",
                link:"/usuarios",
                route:"Configuracion/Configuracion de usuarios/Gestion de usuarios",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus tellus nibh, id sodales diam pellentesque a. Sed at odio nec nunc mattis ullamcorper sed sit amet neque. Cras pulvinar magna id nisl aliquet iaculis. Duis tincidunt rutrum porta. "
              },{
                name:"Gestion de perfiles",
                link:"/perfiles",
                route:"Configuracion/Configuracion de usuarios/Gestion de perfiles",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus tellus nibh, id sodales diam pellentesque a. Sed at odio nec nunc mattis ullamcorper sed sit amet neque. Cras pulvinar magna id nisl aliquet iaculis. Duis tincidunt rutrum porta. "
              }
        ]
    }]
  },{
    name:"Inventario",
    extend:false,
    sons:[]
  },{
    name:"Joyeria",
    extend:false,
    sons:[]
  },{
    name:"Tesoreria",
    extend:false,
    sons:[]
  },{
    name:"Contabilidad",
    extend:true,
    sons:[
    {
      name:"Actualizaciones",
      extend:true,
      sons:[{
              name:"Tipos de comprobantes",
              link:"/tiposdecomprobantes",
              route:"Contabilidad/Actualizaciones/Tipos de comprobantes",
              description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus tellus nibh, id sodales diam pellentesque a. Sed at odio nec nunc mattis ullamcorper sed sit amet neque. Cras pulvinar magna id nisl aliquet iaculis. Duis tincidunt rutrum porta. "
            },
            {
              name:"Cuentas contables",
              link:"/cuentascontables",
              route:"Contabilidad/Actualizaciones/Cuentas contables",
              description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus tellus nibh, id sodales diam pellentesque a. Sed at odio nec nunc mattis ullamcorper sed sit amet neque. Cras pulvinar magna id nisl aliquet iaculis. Duis tincidunt rutrum porta. "
            }
      ]
    },
    {
      name:"Registros",
      extend:true,
      sons:[{
              name:"Comprobantes",
              link:"/comprobantes",
              route:"Contabilidad/Registros/Comprobantes",
              description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus tellus nibh, id sodales diam pellentesque a. Sed at odio nec nunc mattis ullamcorper sed sit amet neque. Cras pulvinar magna id nisl aliquet iaculis. Duis tincidunt rutrum porta. "
            },
            {
              name:"Notas aclaratorias",
              link:"/notasaclaratorias",
              route:"Contabilidad/Registros/Notas aclaratorias",
              description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus tellus nibh, id sodales diam pellentesque a. Sed at odio nec nunc mattis ullamcorper sed sit amet neque. Cras pulvinar magna id nisl aliquet iaculis. Duis tincidunt rutrum porta. "
            }
      ]
    },
    {
      name:"Procesos",
      extend:true,
      sons:[{
              name:"Foliar libros",
              link:"/foliarlibros",
              route:"Contabilidad/Procesos/Foliar libros",
              description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus tellus nibh, id sodales diam pellentesque a. Sed at odio nec nunc mattis ullamcorper sed sit amet neque. Cras pulvinar magna id nisl aliquet iaculis. Duis tincidunt rutrum porta. "
            }
      ]
    }
]
  },{
    name:"Credito",
    extend:false,
    sons:[]
  },{
    name:"Facturacion",
    extend:false,
    sons:[]
  },{
    name:"Cuentas por pagar",
    extend:false,
    sons:[]
  },{
    name:"Nomina",
    extend:false,
    sons:[]
  }
]

export default opt;