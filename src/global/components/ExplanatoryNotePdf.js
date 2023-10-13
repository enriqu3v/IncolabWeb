import { Document,Page,View,Text,Font, Canvas, StyleSheet } from "@react-pdf/renderer";
import React from "react";
import { DataContext } from "../../controladores/Context";
import arial from "../styles/fonts/arial.ttf"

function ExplanatoryNotePdf({data}) {
    
    Font.register({ family: 'Arial', fonts: [
        { src: arial },
        { src: arial, fontWeight: 600 }
        ]});

    return(
        <Document>
            <Page size="A4"style={{ fontFamily: 'Arial',fontSize:10, paddingHorizontal:15,paddingVertical:14,lineHeight:"1.5px"}}>
                <View style={{justifyContent:"space-between", alignItems:"flex-start",flexDirection:"row"}}>
                    <Text style={{fontWeight:400, fontSize:17,color:"red"}}>COO - PRUEBAS</Text>
                    <Text style={{fontWeight:400, fontSize:17}}>Notas a los Estados Financieros</Text>
                </View>
                <View style={{justifyContent:"space-between", alignItems:"flex-start",flexDirection:"row"}}>
                    <Text style={{fontWeight:"600", fontSize:12, color:"gray"}}>N.I.T: 123456789</Text>
                    <Text style={{fontWeight:400, fontSize:12}}>Enero de 2023</Text>
                </View>
                <View>
                    <Text style={{fontWeight:400, fontSize:12,color:"gray"}}>Direccion: Calle 24 Carrera 10 y Tel:3007147495</Text>
                </View>
                <View>
                    <Canvas
                    style={{width:"100%",height:1,marginTop:10,marginBottom:5,backgroundColor:"black"}}
                    /> 
                </View>
                <View>
                    <Text style={{fontWeight:400, fontSize:14,color:"blue"}}>Nota 1</Text>
                </View>
                <View style={{justifyContent:"space-between", alignItems:"flex-start",flexDirection:"row"}}>
                    <Text style={{fontWeight:600, fontSize:14}}>ESTE ES EL TITULO DE LA NOTA DE EJEMPLO</Text>
                    <Text style={{fontWeight:600, fontSize:14,textDecoration:"underline"}}>123456789</Text>
                </View>
                <View>
                    <Text style={{fontWeight:400, fontSize:14}}>PRUEBA DE OBSERVACIONES</Text>
                </View>
            </Page>
        </Document>
    )
}

export default ExplanatoryNotePdf;






