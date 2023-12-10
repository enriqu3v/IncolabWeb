import { Document,Page,View,Text,Font } from "@react-pdf/renderer";
import React from "react";
import { DataContext } from "../../controladores/Context";
import arial from "../styles/fonts/arial.ttf"

function FoliarBPdf({data}) {
    const pages =[]
    for(var i = data.inicial;i<=data.final;i++){
      pages.push(
        i
      )
    }
    const pal = ()=>{
      if(data.palabra != "Sin palabra"){
        return(data.palabra+": ")
      }else{
          return null
        }
      }
    console.log(data)
    
    Font.register({ family: 'Arial', src: arial});
    return(
        <Document>
          {pages.map((pg)=>{return(
              <Page size="A4"style={{ fontFamily: 'Arial',fontSize:10, paddingHorizontal:15,paddingVertical:14}}>
                  <View style={{justifyContent:"space-between", alignItems:"flex-start",flexDirection:"row"}}>
                  {data.nEmpresa?
                      <Text style={{fontWeight:1000, fontSize:17}}>{data.empresa}</Text>
                    :null
                  } 
                    <Text>{pal()}{pg}</Text>
                  </View>
                  {data.NIT?
                    <View>
                      <Text>N.I.T: {data.nit}</Text>
                    </View>
                    :null
                  }
                  {data.nLibro !=""?
                    <View>
                      <Text>{data.nLibro}</Text>
                    </View>
                    :null
                  }
                </Page>
              )})
          }
      </Document>
    )
}

export default FoliarBPdf;






