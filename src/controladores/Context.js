import React,{Component,createContext} from "react";
import axios from "axios";
import { redirect, useNavigate, Redirect} from "react-router-dom";

export const DataContext = createContext();

/*general level context provider, in this document are the main functions of the system in general*/
var authAxios = null 
export class DataProvider extends Component{
    constructor(args){
      super(args);
      this.state = {
        user:{sucursales:[],sucursal:null,loged:false},
        profiles: [
        ],
        Users:[],
        gender:[],
        typeDocument: [],
        department :[],
        city:[],
        empresas:[],
        typesOfVouchers:[],
        vouchersCategory:[],
        vouchers:[],
        thirds:[],
        centroCostos:[],
        pucs:{data:[]},
        explanatoryNotes:[],
        typesOfExplanatoryNotes:[],
        typesOfTaxes:[],
        typesOfPucs:[],
        branches:[],
        departamentos:[],
        municipios:[],
        roles:[],
        menu:true
      }
      this.logIn1 = this.logIn1.bind(this);
      this.logIn2 = this.logIn2.bind(this);
      this.getProfiles = this.getProfiles.bind(this);
      this.getUser = this.getUser.bind(this);
      this.getUserId = this.getUserId.bind(this);
      this.createUser = this.createUser.bind(this);
      this.changeUser = this.changeUser.bind(this);
      this.changeStateUser = this.changeStateUser.bind(this);
      this.getGender = this.getGender.bind(this);
      this.getTypeDocument = this.getTypeDocument.bind(this);
      this.getDepartment = this.getDepartment.bind(this);
      this.getCity = this.getCity.bind(this);
      this.changeStateProfile = this.changeStateProfile.bind(this);
      this.changeStateUser = this.changeStateUser.bind(this);
      this.changeProfile = this.changeProfile.bind(this);
      this.createProfile = this.createProfile.bind(this);
      this.changePassword = this.changePassword.bind(this);
      this.AuthAxios = this.AuthAxios.bind(this);
      this.changeMenu = this.changeMenu.bind(this);
      this.getEmpresas = this.getEmpresas.bind(this);
      this.getTypesOfVouchers = this.getTypesOfVouchers.bind(this);
      this.createTypesOfVouchers = this.createTypesOfVouchers.bind(this);
      this.changeTypesOfVouchers = this.changeTypesOfVouchers.bind(this);
      this.changeStateTypesOfVouchers = this.changeStateTypesOfVouchers.bind(this);
      this.getVouchers = this.getVouchers.bind(this);
      this.getVouchersCategory = this.getVouchersCategory.bind(this);
      this.getThirds = this.getThirds.bind(this);
      this.getCentroCostos = this.getCentroCostos.bind(this);
      this.getPucsAux = this.getPucsAux.bind(this);
      this.getPucsMadre = this.getPucsMadre.bind(this);
      this.createVoucher= this.createVoucher.bind(this);
      this.changeVoucher= this.changeVoucher.bind(this);
      this.getVoucher= this.getVoucher.bind(this);
      this.reverseVoucher= this.reverseVoucher.bind(this);
      this.getExplanatoryNotes= this.getExplanatoryNotes.bind(this);
      this.createExplanatoryNote= this.createExplanatoryNote.bind(this);
      this.changeExplanatoryNote= this.changeExplanatoryNote.bind(this);
      this.getTypesOfExplanatoryNotes= this.getTypesOfExplanatoryNotes.bind(this);
      this.deleteExplanatoryNote= this.deleteExplanatoryNote.bind(this);
      this.getTypesOfTaxes= this.getTypesOfTaxes.bind(this);
      this.getTypesOfPucs= this.getTypesOfPucs.bind(this);
      this.getPucs= this.getPucs.bind(this);
      this.getPucsId= this.getPucsId.bind(this);
      this.createPuc= this.createPuc.bind(this);
      this.changePuc= this.changePuc.bind(this);
      this.changeStatePuc= this.changeStatePuc.bind(this);
      this.deletePuc= this.deletePuc.bind(this);
      this.getPucsJerarquia= this.getPucsJerarquia.bind(this);
      this.getBranch= this.getBranch.bind(this);
      this.deleteBranch= this.deleteBranch.bind(this);
      this.getMunicipios= this.getMunicipios.bind(this);
      this.getDepartamentos= this.getDepartamentos.bind(this);
      this.createBranch= this.createBranch.bind(this);
      this.changeBranch= this.changeBranch.bind(this);
      this.getRoles= this.getRoles.bind(this);
      this.associateBranch= this.associateBranch.bind(this);
};
 AuthAxios(){
    authAxios =  axios.create({
    headers:{
        Authorization:"Bearer " +this.state.user.token
    }
})}
changeMenu(){
    this.setState((prevState)=>({
        ...prevState,
        menu:!prevState.menu
    }))
}
async logIn1(user){
    var prueba = false;
    if(user.user.length >=3){
        if(user.user.length<=15){
            if(!user.user.includes(" ")){
                if(user.password.length >=3){
                    if(user.password.length<=15){
                        var data={};
                        await axios.post('http://167.114.129.229:5000/api/Usuarios/login', {
                            password: user.password,
                            username: user.user
                        })
                        .then(function (response) {
                            prueba= true;
                            data={...response.data.data,sucursal:null}
                        })
                        .catch(function (error) {
                            console.log(error);
                            alert(error.response.data.errors[0])
                        });
                        console.log(prueba)
                        if(prueba){
                            this.setState((prevState,props)=>({
                                ...prevState,
                                user:{
                                    ...data,
                                    logued:true
                                }
                            }))
                            alert("usuario logueado con exito");
                            return new Promise((resolve,reject)=>{
                                    resolve({data:true})
                                    reject({data:true})
                                }
                            )
                        }
                    }
                    else{
                        alert("la contraseña suministrada no cumple con los parametros de validacion (tiene una longitud mayor a 15)");
                    }
                }
                else{
                    alert("la contraseña suministrada no cumple con los parametros de validacion (tiene una longitud menor a 3)");
                }
            }
            else{
                alert("el usuario suministrado no cumple con los parametros de validacion (contiene espacios)")
            }
            
        }
        else{
            alert("el usuario suministrado no cumple con los parametros de validacion (tiene una longitud mayor a 15)");
        }
    }
    else{
        alert("el usuario sumministrado no cumple con los parametros de validacion (tiene una longitud menor a 3)");
    }
    
    return new Promise((resolve,reject)=>{
        resolve({data:false})
        reject({data:false})
    }
)
}
logIn2(id){
    this.setState({
        ...this.state,
        user:{
            ...this.state.user,
            sucursal:this.state.user.sucursales[id]
        }
    })
    this.AuthAxios()
}
logOut(){
    this.setState((prevState)=>({
        ...prevState,
        user:{sucursales:[],sucursal:null}
    }))
}

async changePassword(oldPassword,newPassword1,newPassword2){
    var prueba = false
    if(newPassword1 == newPassword2){
        if(newPassword1.length >= 8){
            if(oldPassword != newPassword1){
                await authAxios.post('http://167.114.129.229:5000/api/Usuarios/cambiarclave', {
                    oldPassword: oldPassword,
                    newPassword: newPassword1
                })
                .then(function (response) {
                    prueba = true;
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                    alert(error.response.data.errors.NewPassword[0])
                    redirect("/")
                });
            }
            else{
                alert("la contraseña antigua es igual a la actual")
            }
        }
        else{
            alert("la contraseña nueva debe ser mayor o igual 8 caracteres")
        }
        
    }
    else{
        alert("la nueva contraseña es diferente en los 2 campos")
    }
    if(prueba){
        this.setState((prevState)=>({
            ...prevState,
            user:{sucursales:[],sucursal:null}
        }))
        alert("contraseña cambiada con exito")
    }
    return new Promise((resolve,reject)=>{
        resolve({data:prueba})
        reject({data:prueba})
        }
    )
}
async getProfiles(){
    var data=null;
    await authAxios.get("http://167.114.129.229:5000/api/Roles").then(function (response) {
        data = response.data.data
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      this.setState((prevState)=>({
          ...prevState,
          profiles:data
      }))
}
async createProfile(data){
    if(data != "" ){
        if(data.length < 255){
            var aprov = false;
            var idi= 0
            await authAxios.post("http://167.114.129.229:5000/api/Roles",{nombre:data}).then(function (response) {
                idi= response.data.data.id
                aprov=true;
                alert("perfil creado con exito");
            })
            .catch(function (error) {
                console.log(error);
                alert(error.response.data.errors[0])
            });
            if(aprov){
                var profiles = this.state.profiles
                profiles.push({codigo:idi,detalle:data, estado:true})
                this.setState((prevState)=>({
                    ...prevState,
                    profiles
                }))
                return new Promise((resolve,reject)=>{
                    resolve({data:true})
                    reject({data:true})
                    }
                )
            }
        }
        else{
            alert("los detalles del perfil deben tener una longitud menor a 255 caracteres")
        }
    }
    else{
        alert("los detalles del perfil deben ser diferentes de vacio")
    }
        return new Promise((resolve,reject)=>{
                resolve({data:false})
                reject({data:false})
            }
        )
}
async changeStateProfile(id,code){
    var aprov = false;
    await authAxios.put("http://167.114.129.229:5000/api/Roles/estado",
        {
            id:code,
            estado:!(this.state.profiles[id].estado)
        }
    ).then(function (response) {
        console.log(response);
        aprov=true;
      })
      .catch(function (error) {
        console.log(error);
      });
    if(aprov){
        var profiles = this.state.profiles
        profiles[id]={...profiles[id], estado:!profiles[id].estado}
        this.setState((prevState)=>({
            ...prevState,
            profiles
        }))
    }
}    

async getUser(){
    var data=null;
    await authAxios.get("http://167.114.129.229:5000/api/Usuarios").then(function (response) {
        data = response.data.data
        console.log(response.data.data)
      })
      .catch(function (error) {
        console.log(error);
      });
      this.setState((prevState)=>({
          ...prevState,
          Users:data
      }))
} 

async getUserId(id){
    var data=null;
    await authAxios.get("http://167.114.129.229:5000/api/Usuarios/"+id).then(function (response) {
        data = response.data.data
        console.log(response.data.data)
      })
      .catch(function (error) {
        console.log(error);
      });
      if(data!=null){
        return new Promise((resolve,reject)=>{
            resolve({data})
            reject({data})
            }
        )
      }
      return new Promise((resolve,reject)=>{
          resolve({data:false})
          reject({data:false})
          }
      )
} 

async createUser(data){
  
  await authAxios.post("http://167.114.129.229:5000/api/Usuarios",data).then(function (response) {
      
    })
    .catch(function (error) {
      console.log(error);
    });
}

async getGender(){
    var data=null;
    await authAxios.get("http://167.114.129.229:5000/api/Generos").then(function (response) {
       data = response.data
       
    
      })
      .catch(function (error) {
        console.log(error);
      });
      this.setState((prevState)=>({
          ...prevState,
          gender:data
      }))
} 

async getTypeDocument(){
    var data=null;
    await authAxios.get("http://167.114.129.229:5000/api/TipoDocumentos").then(function (response) {
       data = response.data
       
    
      })
      .catch(function (error) {
        console.log(error);
      });
      this.setState((prevState)=>({
          ...prevState,
          typeDocument:data
      }))
} 

async getDepartment(){
    var data=null;
    await authAxios.get("http://167.114.129.229:5000/api/Departamentos").then(function (response) {
       data = response.data
       
    
      })
      .catch(function (error) {
        console.log(error);
      });
      this.setState((prevState)=>({
          ...prevState,
          department:data
      }))
} 

async getCity(departamentoId){
    var data=null;
    
    await authAxios.get(`http://167.114.129.229:5000/api/Municipios/departamento/${departamentoId}`).then(function (response) {
       data = response.data.data
       

    })
      .catch(function (error) {
        console.log(error);
      });
      this.setState((prevState)=>({
          ...prevState,
          city:data
      }))
} 


async changeStateUser(id){
   
    var aprov = false;
   
    console.log(id)
    
    await authAxios.put("http://167.114.129.229:5000/api/Usuarios/estado",
        {
            id:id,
            estado:!this.state.Users[id-1].estado
        }
    ).then(function (response) {
        console.log(response);
        aprov=true;
      })
      .catch(function (error) {
        console.log(error);
      });

      if(aprov){
        var User = this.state.Users;
        User[id-1]={...User[id-1], estado:!User[id-1].estado}
        this.setState((prevState) => ({
            ...prevState,
            User
        }))
      }
}
      

async changeUser(id, data){
  var aprov = false;
  await authAxios.put(`http://167.114.129.229:5000/api/Usuarios/${id}`,data)
                  .then(function(response){
                    console.log(response);
                    aprov=true
                  })
                  .catch(function (error){
                    console.log(error);
                  });
                  if(aprov){
                    var user = this.state.Users
                    user[id] = {...user[id], data}
                    this.setState((prevState) =>({
                      ...prevState,
                      user
                    }))
                  }
}

async changeProfile(id,data){
    var aprov = false;
    console.log(id)
    console.log(data)
    if(this.state.profiles[id].detalle != data){
        if(data != ""){
            await authAxios.put("http://167.114.129.229:5000/api/Roles/"+this.state.profiles[id].codigo,
                {detalle:data}
            ).then(function (response) {
                console.log(response);
                aprov=true;
                alert("el perfil fue actualizado con exito")
            })
            .catch(function (error) {
                console.log(error);
                alert(error.response.data.errors[0])
            });
            if(aprov){
                var profiles = this.state.profiles
                profiles[id]={...profiles[id], detalle:data}
                this.setState((prevState)=>({
                    ...prevState,
                    profiles
                }))
                return new Promise((resolve,reject)=>{
                    resolve({data:true})
                    reject({data:true})
                })
            }
        }
        else{
            alert("los detalles del perfil deben ser diferentes de vacio")
        }
    }
    else{
        alert("los detalles del perfil que se desea cambiar deben ser diferentes de los detalles antiguos del perfil")
    }
    
    return new Promise((resolve,reject)=>{
        resolve({data:false})
        reject({data:false})
    })
}
changeProfilePermisions(){
    
}
async getEmpresas(){
   var aprov=false;
   var data= null;
   await authAxios.get("http://167.114.129.229:5000/api/Empresas",).then(function (response) {
       console.log(response);
       data= response.data.data
       aprov=true;
     })
     .catch(function (error) {
       console.log(error);
       alert(error.response.data.errors[0])
     });
     if(aprov){
       this.setState((prevState) => ({
        ...prevState,
        empresas:data
    }))
     }
}
async getTypesOfVouchers(){
   var aprov=false;
   var data= null;
   await authAxios.get("http://167.114.129.229:5000/api/TipoComprobantes").then(function (response) {
       console.log(response);
       data= response.data.data
       aprov=true;
     })
     .catch(function (error) {
       console.log(error);
       alert(error.response.data.errors[0])
     });
     if(aprov){
       this.setState((prevState) => ({
        ...prevState,
        typesOfVouchers:data
    }))
     }
}
async createTypesOfVouchers(data){
            console.log(data);
            const{tipo,descripcion,consecutivo,tipoConsecutivo,tipoDocumento,idCategoria} = data
            var aprov = false;
            var dta= {tipo,
                descripcion,
                consecutivo:parseInt(consecutivo),
                tipoConsecutivo,
                tipoDocumento:parseInt(tipoDocumento),
                idCategoria:parseInt(idCategoria),
                idSucursal: this.state.user.sucursal.id}
            console.log(dta)
            await authAxios.post("http://167.114.129.229:5000/api/TipoComprobantes",
                dta

            ).then(function (response) {
                aprov=true;
                alert("tipo de comprobante creado con exito");
            })
            .catch(function (error) {
                alert("error al crear el tipo de comprobante");
                console.log(error);
                alert(error.response.data.errors[0])
            });
            if(aprov){
                return new Promise((resolve,reject)=>{
                    resolve({data:true})
                    reject({data:true})
                    }
                )
            }
        
        return new Promise((resolve,reject)=>{
                resolve({data:false})
                reject({data:false})
            }
        )
}
async changeTypesOfVouchers(id,data){
    var aprov = false;
    console.log(id)
    console.log(data)
    const{descripcion,tipoConsecutivo,tipoDocumento,idCategoria} = data
        if(data != ""){
            await authAxios.put("http://167.114.129.229:5000/api/TipoComprobantes/"+id,
                {
                    descripcion,
                    tipoConsecutivo,
                    idCategoria:parseInt(idCategoria),
                    tipoDocumento:parseInt(tipoDocumento),
                    idSucursal: this.state.user.sucursal.id
                }
            ).then(function (response) {
                console.log(response);
                aprov=true;
                alert("el perfil fue actualizado con exito")
            })
            .catch(function (error) {
                console.log(error);
                alert(error.response.data.errors[0])
            });
            if(aprov){
                return new Promise((resolve,reject)=>{
                    resolve({data:true})
                    reject({data:true})
                })
            }
        }
        else{
            alert("los detalles del perfil deben ser diferentes de vacio")
        }
    
    
    return new Promise((resolve,reject)=>{
        resolve({data:false})
        reject({data:false})
    })
}
async changeStateTypesOfVouchers(id){
    var aprov = false;
    await authAxios.delete("http://167.114.129.229:5000/api/TipoComprobantes/"+this.state.typesOfVouchers[id].id
    ).then(function (response) {
        console.log(response);
        aprov=true;
        alert("el tipo de comprobante fue desactivado con exito")
    })
    .catch(function (error) {
        console.log(error);
        alert("el tipo de comprobante no pudo ser desactivado")
        alert(error.response.data.errors[0])
    });
    if(aprov){
        var tipes = this.state.typesOfVouchers
        tipes[id].estaActivo = !tipes[id].estaActivo
        this.setState((prevState)=>({
            ...prevState,
            typesOfVouchers:tipes
        }))
    }
}    

async getVouchers(){
   var aprov=false;
   var data= null;
   await authAxios.get("http://167.114.129.229:5000/api/Comprobantes").then(function (response) {
       console.log(response);
       data= response.data.data
       aprov=true;
     })
     .catch(function (error) {
       console.log(error);
       alert(error.response.data.errors[0])
     });
     if(aprov){
       this.setState((prevState) => ({
        ...prevState,
        vouchers:data
    }))
     }
}
async createVoucher(data){
    console.log(data)
    const{idTipoComprobante,codigoCategoriaComprobante,idTerceroGeneral,ccoFecha,ccoDocumento,
            ccoDetalle, comprobanteDetalles} = data
    var aprov = false;
    console.log(comprobanteDetalles)
    if(idTipoComprobante != 0 && codigoCategoriaComprobante != "" && idTerceroGeneral!= 0 && ccoFecha!="" && ccoDocumento != "" && ccoDetalle!= ""){
        var fCDetails = comprobanteDetalles.filter((e)=>((e.dcoBase!=0 || e.dcoCredito!=0 || e.dcoDebito!=0) && e.dcoDetalle!="" && e.idCentrocosto!=0 && e.idPuc!=0 && e.idTercero!=0))
        console.log(fCDetails);
        var cDetails = fCDetails.map((e)=>{
            const {idCentrocosto,idPuc,idTercero,dcoBase,dcoTarifa,dcoDebito,dcoCredito,dcoDetalle} = e
                return ({
                        idCentrocosto:parseInt(idCentrocosto),
                        idPuc:parseInt(idPuc),
                        idTercero:parseInt(idTercero),
                        dcoBase:parseInt(dcoBase),
                        dcoTarifa:parseInt(dcoTarifa),
                        dcoDebito:parseInt(dcoDebito),
                        dcoCredito:parseInt(dcoCredito),
                        dcoDetalle
                    })
            })
        if(cDetails.length >=2){
            var dta= {
                idSucursal:this.state.user.sucursal.id,
                idTipocomprobante:parseInt(idTipoComprobante),
                codigoCategoriaComprobante,
                idTercero: parseInt(idTerceroGeneral),
                ccoFecha,
                ccoDocumento,
                ccoDetalle,
                comprobanteDetalles: cDetails
            }
            console.log(dta)
            await authAxios.post("http://167.114.129.229:5000/api/Comprobantes",
                dta).then(function (response) {
                aprov=true;
                alert("Comprobante creado con exito");
            })
            .catch(function (error) {
                console.log(error);
                alert(error.response.data.errors[0])
            });
            if(aprov){
                return new Promise((resolve,reject)=>{
                    resolve({data:true})
                    reject({data:true})
                    }
                )
            }

        }
        else{
            alert("porfavor ingrese almenos 2 registros antes de crear el comprobante")
        }
    }
    else{
        alert("porfavor rellene todos los campos antes de registrar un comprobante")
    }
    return new Promise((resolve,reject)=>{
            resolve({data:false})
            reject({data:false})
        }
    )
}
async changeVoucher(id,data){
    console.log(data)
    const{idTipoComprobante,idTercero,cooFecha,ccoDocumentoReferencial,
            ccoDetalle, comprobanteDetalles} = data
    var aprov = false;
    console.log(comprobanteDetalles)
    if(idTipoComprobante != 0 && idTercero!= 0 && cooFecha!="" && ccoDocumentoReferencial != "" && ccoDetalle!= ""){
            
        var fCDetails = comprobanteDetalles.filter((e)=>((e.dcoBase!=0 || e.dcoCredito!=0 || e.dcoDebito!=0) && e.dcoDetalle!="" && e.idCentrocosto!=0 && e.idPuc!=0 && e.idTercero!=0))
        
        var cDetails = fCDetails.map((e)=>{
            const {id,idCentrocosto,idPuc,idTercero,dcoBase,dcoTarifa,dcoDebito,dcoCredito,dcoDetalle} = e
                return ({
                        id,
                        idCentrocosto:parseInt(idCentrocosto),
                        idPuc:parseInt(idPuc),
                        idTercero:parseInt(idTercero),
                        dcoBase:parseInt(dcoBase),
                        dcoTarifa:parseInt(dcoTarifa),
                        dcoDebito:parseInt(dcoDebito),
                        dcoCredito:parseInt(dcoCredito),
                        dcoDetalle
                    })
            })
            
        if(cDetails.length >=2){
            var dta= {
                idSucursal:this.state.user.sucursal.id,
                idTipocomprobante:parseInt(idTipoComprobante),
                idTercero: parseInt(idTercero),
                ccoFecha:cooFecha,
                ccoDocumento:ccoDocumentoReferencial,
                ccoDetalle,
                comprobanteDetalles: cDetails
            }
            console.log(dta)
                    await authAxios.put("http://167.114.129.229:5000/api/Comprobantes/"+id,
                        dta
                    ).then(function (response) {
                        console.log(response);
                        aprov=true;
                        alert("el perfil fue actualizado con exito")
                    })
                    .catch(function (error) {
                        console.log(error);
                        alert(error.response.data.errors[0])
                    });
                    if(aprov){
                        var profiles = this.state.profiles
                        profiles[id]={...profiles[id], detalle:data}
                        alert("actualizado")
                        return new Promise((resolve,reject)=>{
                            resolve({data:true})
                            reject({data:true})
                        })}
        }else{
            alert("porfavor ingrese almenos 2 registros antes de crear el comprobante")
            console.log(cDetails);
            console.log(cDetails.length);
        }
    }else{
        alert("porfavor rellene todos los campos antes de registrar un comprobante")
    }
    return new Promise((resolve,reject)=>{
        resolve({data:false})
        reject({data:false})
    })
}
async getVouchersCategory(){
    var aprov = false;
    var data;
    await authAxios.get("http://167.114.129.229:5000/api/CategoriaComprobantes",)
    .then(function (response) {
        console.log(response);
        aprov=true;
        data= response.data.map((data,id)=>(
            {
                codigo:data.codigo,
                id:data.id,
                nombre:data.nombre
            }
        ));
        
    })
    .catch(function (error) {
        console.log(error);
        alert(error.response.data.errors[0])
    });
    if(aprov){
        console.log(data);
        this.setState((prevState) => ({
            ...prevState,
            vouchersCategory:data
        }))
    }

}
async getThirds(){
    var aprov = false;
    var data;
    await authAxios.get("http://167.114.129.229:5000/api/Terceros",)
    .then(function (response) {
        console.log(response);
        aprov=true;
        data= response.data
    })
    .catch(function (error) {
        console.log(error);
        alert(error.response.data.errors[0])
    });
    if(aprov){
        console.log(data);
        this.setState((prevState) => ({
            ...prevState,
            thirds:data
        }))
    }

}
async getCentroCostos(){
    var aprov = false;
    var data;
    await authAxios.get("http://167.114.129.229:5000/api/CentroCostos",)
    .then(function (response) {
        console.log(response);
        aprov=true;
        data= response.data
        
    })
    .catch(function (error) {
        console.log(error);
        alert(error.response.data.errors[0])
    });
    if(aprov){
        console.log(data);
        this.setState((prevState) => ({
            ...prevState,
            centroCostos:data
        }))
    }

}
async getPucsAux(){
    var aprov = false;
    var data;
    await authAxios.get("http://167.114.129.229:5000/api/Pucs/auxiliar",)
    .then(function (response) {
        console.log(response);
        aprov=true;
        data= response.data
        
    })
    .catch(function (error) {
        console.log(error);
        alert(error.response.data.errors[0])
    });
    if(aprov){
        console.log(data);
        this.setState((prevState) => ({
            ...prevState,
            pucs:data
        }))
    }

}
async getVoucher(id){
    var aprov = false;
    var data;
    await authAxios.get("http://167.114.129.229:5000/api/Comprobantes/"+id,)
    .then(function (response) {
        console.log(response);
        aprov=true;
        data= response.data
    })
    .catch(function (error) {
        console.log(error);
        alert(error.response.data.errors[0])
    });
    return new Promise((resolve,reject)=>{
        resolve({data})
        reject({data:false})
    })
}
async reverseVoucher(id){
    var aprov = false;
    await authAxios.put("http://167.114.129.229:5000/api/Comprobantes/reversar/"+id)
    .then(function (response) {
        console.log(response);
        alert("se reverso el comprobante")
        aprov=true;
    })
    .catch(function (error) {
        console.log(error);
        alert(error.response.data.description)
    });
    if(aprov){
        console.log("comprobante reversado");
        this.getVouchers();
    }
}
async getExplanatoryNotes(){
    var aprov = false;
    var data;
    await authAxios.get("http://167.114.129.229:5000/api/NotaAclaratorias",)
    .then(function (response) {
        console.log(response);
        aprov=true;
        data= response.data.data
        
    })
    .catch(function (error) {
        console.log(error);
        alert(error.response.data.errors[0])
    });
    if(aprov){
        console.log(data);
        this.setState((prevState) => ({
            ...prevState,
            explanatoryNotes:data
        }))
    }
}
async createExplanatoryNote(data){
    console.log(data);
    const{fecha,idTipoNota,idPuc,titulo,detalle} = data
    var aprov = false;
    if(fecha!=""){
        if(idTipoNota!=0){
            if(idPuc!=0){
                if(titulo!=""){
                    if(detalle!=""){
                        var dta = {
                            fecha,
                            idTipoNota: parseInt(idTipoNota),
                            idPuc:parseInt(idPuc),
                            titulo,
                            detalle
                        }
                        console.log(dta)
                        await authAxios.post("http://167.114.129.229:5000/api/NotaAclaratorias",
                            dta).then(function (response) {
                            aprov=true;
                            alert("Nota aclaratoria creada con exito");
                        })
                        .catch(function (error) {
                            console.log(error);
                            alert(error.response.data.errors[0])
                        });
                        if(aprov){
                            return new Promise((resolve,reject)=>{
                                resolve({data:true})
                                reject({data:true})
                                }
                            )
                        }
                    }else{
                        alert("porfavor ingrese una descripcion valida.")
                    }
                }else{
                    alert("porfavor ingrese un titulo valido.")
                }
            }else{
                alert("porfavor ingrese un comprobante valido.")
            }
        }else{
            alert("porfavor ingrese un tipo de nota valido.")
        }
    }else{
        alert("porfavor ingrese una fecha valida.")
    }
    return new Promise((resolve,reject)=>{
            resolve({data:false})
            reject({data:false})
        }
    )
}
async changeExplanatoryNote(id,data){
    console.log(data);
    const{fecha,idTipoNota,idPuc,titulo,detalle} = data
    var aprov = false;
    if(fecha!=""){
        if(idTipoNota!=0){
            if(idPuc!=0){
                if(titulo!=""){
                    if(detalle!=""){
                        var dta = {
                            fecha,
                            idTipoNota: parseInt(idTipoNota),
                            idPuc:parseInt(idPuc),
                            titulo,
                            detalle
                        }
                        console.log(dta)
                        await authAxios.put("http://167.114.129.229:5000/api/NotaAclaratorias/"+id,
                            dta).then(function (response) {
                            aprov=true;
                            alert("Nota aclaratoria actualizada con exito");
                        })
                        .catch(function (error) {
                            console.log(error);
                            alert(error.response.data.errors[0])
                        });
                        if(aprov){
                            return new Promise((resolve,reject)=>{
                                resolve({data:true})
                                reject({data:true})
                                }
                            )
                        }
                    }else{
                        alert("porfavor ingrese una descripcion valida.")
                    }
                }else{
                    alert("porfavor ingrese un titulo valido.")
                }
            }else{
                alert("porfavor ingrese un comprobante valido.")
            }
        }else{
            alert("porfavor ingrese un tipo de nota valido.")
        }
    }else{
        alert("porfavor ingrese una fecha valida.")
    }
    return new Promise((resolve,reject)=>{
            resolve({data:false})
            reject({data:false})
        }
    )
}
async getTypesOfExplanatoryNotes(){
    var aprov = false;
    var data;
    await authAxios.get("http://167.114.129.229:5000/api/NotaAclaratoriaTipos",)
    .then(function (response) {
        console.log(response);
        aprov=true;
        data= response.data
    })
    .catch(function (error) {
        console.log(error);
        alert(error.response.data.errors[0])
    });
    if(aprov){
        console.log(data);
        this.setState((prevState) => ({
            ...prevState,
            typesOfExplanatoryNotes:data
        }))
    }
}
async deleteExplanatoryNote(id){
    var aprov = false;
    await authAxios.delete("http://167.114.129.229:5000/api/NotaAclaratorias/"+id)
    .then(function (response) {
        console.log(response);
        alert("se elimino la nota aclaratoria")
        aprov=true;
    })
    .catch(function (error) {
        console.log(error);
        alert(error.response.data.description)
    });
    if(aprov){
        this.getExplanatoryNotes();
        return new Promise((resolve,reject)=>{
                resolve({data:true})
                reject({data:true})
            }
        )
    }
    return new Promise((resolve,reject)=>{
            resolve({data:false})
            reject({data:false})
        }
    )
}
async getTypesOfTaxes(){
    var aprov = false;
    var data;
    await authAxios.get("http://167.114.129.229:5000/api/TipoImpuestos",)
    .then(function (response) {
        console.log(response);
        aprov=true;
        data= response.data;
    })
    .catch(function (error) {
        console.log(error);
        alert(error.response.data.errors[0])
    });
    if(aprov){
        console.log(data);
        this.setState((prevState) => ({
            ...prevState,
            typesOfTaxes:data
        }))
    }
}
async getTypesOfPucs(){
    var aprov = false;
    var data;
    await authAxios.get("http://167.114.129.229:5000/api/PucTipos")
    .then(function (response) {
        console.log(response);
        aprov=true;
        data= response.data.data;
    })
    .catch(function (error) {
        console.log(error);
        alert(error.response.data.errors[0])
    });
    if(aprov){
        console.log(data);
        this.setState((prevState) => ({
            ...prevState,
            typesOfPucs:data
        }))
    }
}
async getPucsMadre(){
    var aprov = false;
    var data;
    await authAxios.get("http://167.114.129.229:5000/api/Pucs/madre",{status:true})
    .then(function (response) {
        console.log(response);
        aprov=true;
        data= response.data;
    })
    .catch(function (error) {
        console.log(error);
        alert(error.response.data.errors[0])
    });
    if(aprov){
        console.log(data);
        this.setState((prevState) => ({
            ...prevState,
            pucs:data
        }))
    }
}
async getPucs(){
    var aprov = false;
    var data;
    await authAxios.get("http://167.114.129.229:5000/api/Pucs",{status:true})
    .then(function (response) {
        console.log(response);
        aprov=true;
        data= response.data
    })
    .catch(function (error) {
        console.log(error);
        alert(error.response.data.errors[0])
    });
    if(aprov){
        console.log(data);
        this.setState((prevState) => ({
            ...prevState,
            pucs:data
        }))
    }
}
async getPucsId(id){
    var aprov = false;
    var data;
    await authAxios.get("http://167.114.129.229:5000/api/Pucs/"+id)
    .then(function (response) {
        console.log(response);
        aprov=true;
        data= response.data;
    })
    .catch(function (error) {
        console.log(error);
        alert(error.response.data.errors[0])
    });
    if(aprov){
        console.log(data);
        return new Promise((resolve,reject)=>{
                resolve({data})
                reject({data})
            }
        )
    }
    return new Promise((resolve,reject)=>{
            resolve({data:[]})
            reject({data:[]})
        }
    )
}
async createPuc(data){
    console.log(data);
    const{codAuxiliar,auxiliar,tipoCuenta,tipoImpuesto,reqBase,difFiscal,naturaleza,
        codClase,codGrupo,codCuenta,codSubCuenta,clase,grupo,cuenta,subCuenta} = data
    var aprov = false;
    var descripciones=[{codigo:codClase,descripcion:clase},{codigo:codGrupo,descripcion:grupo},{codigo:codCuenta,descripcion:cuenta},{codigo:codSubCuenta,descripcion:subCuenta}]
    var dta = {
        codigo:codAuxiliar,
        nombre: auxiliar,
        idPucTipo:parseInt(tipoCuenta),
        idTipoImpuesto:parseInt(tipoImpuesto),
        pacBase:reqBase,
        pacAjusteNiif:difFiscal,
        pacNaturaleza:parseInt(naturaleza),
        descripciones
    }
    console.log(dta)
    await authAxios.post("http://167.114.129.229:5000/api/Pucs",
        dta).then(function (response) {
        aprov=true;
        alert("Puc creado con exito");
    })
    .catch(function (error) {
        console.log(error);
        alert(error.response.data.errors[0])
    });
    if(aprov){
        return new Promise((resolve,reject)=>{
            resolve({data:true})
            reject({data:true})
            }
        )
    }
    return new Promise((resolve,reject)=>{
            resolve({data:false})
            reject({data:false})
        }
    )
}
async changePuc(id,data){
    console.log(data);
    const{nombre,codigo,idPucTipo,idTipoImpuesto,pacBase,pacAjusteNiif,pacNaturaleza} = data
    var aprov = false;
    if(parseInt(codigo)<1000000){
        var dta = {
            nombre
        }
    }else{
        var dta = {
            nombre,
            idPucTipo:parseInt(idPucTipo),
            idTipoImpuesto:parseInt(idTipoImpuesto),
            pacBase,
            pacAjusteNiif,
            pacNaturaleza:parseInt(pacNaturaleza)
        }
    }
    console.log(dta)
    await authAxios.put("http://167.114.129.229:5000/api/Pucs/"+id,
        dta).then(function (response) {
        aprov=true;
        alert("Puc actualizado con exito");
    })
    .catch(function (error) {
        console.log(error);
        alert(error.response.data.errors[0])
    });
    if(aprov){
        return new Promise((resolve,reject)=>{
            resolve({data:true})
            reject({data:true})
            }
        )
    }
    return new Promise((resolve,reject)=>{
            resolve({data:false})
            reject({data:false})
        }
    )
}
async getPucsJerarquia(id){
    var aprov = false;
    var data;
    await authAxios.get("http://167.114.129.229:5000/api/Pucs/descripcion?Codigo="+id)
    .then(function (response) {
        console.log(response);
        aprov=true;
        data= response.data;
    })
    .catch(function (error) {
        console.log(error);
    });
    if(aprov){
        return new Promise((resolve,reject)=>{
            resolve({data})
            reject({data:true})
            }
        )
    }
    return new Promise((resolve,reject)=>{
            resolve({data:false})
            reject({data:false})
        }
    )
}
async deletePuc(id){
    var aprov = false;
    await authAxios.delete("http://167.114.129.229:5000/api/Pucs/"+id)
    .then(function (response) {
        console.log(response);
        alert("se elimino el puc")
        aprov=true;
    })
    .catch(function (error) {
        console.log(error);
        alert("no fue posible eliminar el puc")
        alert(error.response.data.description)
    });
    if(aprov){
        this.getPucs();
        return new Promise((resolve,reject)=>{
                resolve({data:true})
                reject({data:true})
            }
        )
    }
    return new Promise((resolve,reject)=>{
            resolve({data:false})
            reject({data:false})
        }
    )
}
async getBranch(){
    var aprov = false;
    var data;
    await authAxios.get("http://167.114.129.229:5000/api/Sucursales")
    .then(function (response) {
        console.log(response);
        aprov=true;
        data= response.data.data;
    })
    .catch(function (error) {
        console.log(error);
    });
    if(aprov){
        this.setState((prevState) => ({
            ...prevState,
            branches:data
        }))
        return new Promise((resolve,reject)=>{
            resolve({data:true})
            reject({data:true})
            }
        )
    }
    return new Promise((resolve,reject)=>{
            resolve({data:false})
            reject({data:false})
        }
    )
}
async deleteBranch(id){
    var aprov = false;
    await authAxios.delete("http://167.114.129.229:5000/api/Sucursales/"+id)
    .then(function (response) {
        console.log(response);
        alert("se elimino la sucursal")
        aprov=true;
    })
    .catch(function (error) {
        console.log(error);
        alert("no fue posible eliminar la sucursal")
        alert(error.response.data.description)
    });
    if(aprov){
        this.getBranch();
        return new Promise((resolve,reject)=>{
                resolve({data:true})
                reject({data:true})
            }
        )
    }
    return new Promise((resolve,reject)=>{
            resolve({data:false})
            reject({data:false})
        }
    )
}
async getMunicipios(){
    var aprov = false;
    var data;
    await authAxios.get("http://167.114.129.229:5000/api/Municipios")
    .then(function (response) {
        console.log(response);
        aprov=true;
        data= response.data;
    })
    .catch(function (error) {
        console.log(error);
    });
    if(aprov){
        this.setState((prevState) => ({
            ...prevState,
            municipios:data
        }))
        return new Promise((resolve,reject)=>{
            resolve({data:true})
            reject({data:true})
            }
        )
    }
    return new Promise((resolve,reject)=>{
            resolve({data:false})
            reject({data:false})
        }
    )
}
async getDepartamentos(){
    var aprov = false;
    var data;
    await authAxios.get("http://167.114.129.229:5000/api/Departamentos")
    .then(function (response) {
        console.log(response);
        aprov=true;
        data= response.data;
    })
    .catch(function (error) {
        console.log(error);
    });
    if(aprov){
        this.setState((prevState) => ({
            ...prevState,
            departamentos:data
        }))
        return new Promise((resolve,reject)=>{
            resolve({data:true})
            reject({data:true})
            }
        )
    }
    return new Promise((resolve,reject)=>{
            resolve({data:false})
            reject({data:false})
        }
    )
}
async createBranch(data){
            console.log(data);
            const{codigo,nombre,direccion,telefono,departamento,idMunicipio} = data
            var aprov = false;
            var dta= {
                codigo,
                nombre,
                direccion,
                telefono,
                departamento:parseInt(departamento),
                idMunicipio:parseInt(idMunicipio)
            }
            console.log(dta)
            await authAxios.post("http://167.114.129.229:5000/api/Sucursales",
                dta

            ).then(function (response) {
                aprov=true;
                alert("Sucursal creada con exito");
            })
            .catch(function (error) {
                alert("error al crear la sucursal");
                console.log(error);
                alert(error.response.data.errors[0])
            });
            if(aprov){
                this.getBranch();
                return new Promise((resolve,reject)=>{
                    resolve({data:true})
                    reject({data:true})
                    }
                )
            }
        
        return new Promise((resolve,reject)=>{
                resolve({data:false})
                reject({data:false})
            }
        )
}
async changeBranch(id,data){
    console.log(data);
    const{nombre,direccion,telefono,departamento,idMunicipio} = data
    var aprov = false;
    var dta= {
        nombre,
        direccion,
        telefono,
        departamento:parseInt(departamento),
        idMunicipio:parseInt(idMunicipio)
    }
    console.log(dta)
    await authAxios.put("http://167.114.129.229:5000/api/Sucursales/"+id,
        dta).then(function (response) {
        aprov=true;
        alert("Sucursal actualizada con exito");
    })
    .catch(function (error) {
        console.log(error);
        alert(error.response.data.errors[0])
    });
    if(aprov){
        return new Promise((resolve,reject)=>{
            resolve({data:true})
            reject({data:true})
            }
        )
    }
    return new Promise((resolve,reject)=>{
            resolve({data:false})
            reject({data:false})
        }
    )
}
async changeStatePuc(id,data){
    console.log(data);
    var aprov = false;
    await authAxios.put("http://167.114.129.229:5000/api/Pucs/estado/"+id,
        {estado:data}).then(function (response) {
        aprov=true;
        alert("Estado de la cuenta ha cambiado con exito");
    })
    .catch(function (error) {
        console.log(error);
        alert("error al desactivar la cuenta")
    });
    if(aprov){
        this.getPucs();
        return new Promise((resolve,reject)=>{
            resolve({data:true})
            reject({data:true})
            }
        )
    }
    return new Promise((resolve,reject)=>{
            resolve({data:false})
            reject({data:false})
        }
    )
}
async associateBranch(data){
    console.log(data);
    var aprov = false;
    await authAxios.post("http://167.114.129.229:5000/api/Sucursales/user",
        data).then(function (response) {
        aprov=true;
        alert("Usuario asociado correctamente");
    })
    .catch(function (error) {
        console.log(error);
        alert("error al asociar usuario")
    });
    if(aprov){
        this.getPucs();
        return new Promise((resolve,reject)=>{
            resolve({data:true})
            reject({data:true})
            }
        )
    }
    return new Promise((resolve,reject)=>{
            resolve({data:false})
            reject({data:false})
        }
    )
}
async getRoles(){
    var aprov = false;
    var data;
    await authAxios.get("http://167.114.129.229:5000/api/Roles")
    .then(function (response) {
        console.log(response);
        aprov=true;
        data= response.data.data;
    })
    .catch(function (error) {
        console.log(error);
    });
    if(aprov){
        this.setState((prevState) => ({
            ...prevState,
            roles:data
        }))
        return new Promise((resolve,reject)=>{
            resolve({data:true})
            reject({data:true})
            }
        )
    }
    return new Promise((resolve,reject)=>{
            resolve({data:false})
            reject({data:false})
        }
    )
}
    render(){
        const {state,
            logIn1,
            logIn2,
            getProfiles,
            changeStateProfile,
            createProfile,
            changeProfile,
            changePassword,
            getUser,
            createUser,
            getGender,
            getTypeDocument,
            getDepartment,
            getCity,
            changeStateUser,
            changeMenu,
            changeUser,
            getEmpresas,
            getTypesOfVouchers,
            createTypesOfVouchers,
            changeTypesOfVouchers,
            getVouchers,
            changeStateTypesOfVouchers,
            getVouchersCategory,
            getThirds,
            getCentroCostos,
            getPucsAux,
            createVoucher,
            getVoucher,
            changeVoucher,
            reverseVoucher,
            getExplanatoryNotes,
            createExplanatoryNote,
            getTypesOfExplanatoryNotes,
            deleteExplanatoryNote,
            changeExplanatoryNote,
            getTypesOfTaxes,
            getTypesOfPucs,
            getPucsMadre,
            getPucs,
            getPucsId,
            createPuc,
            changePuc,
            changeStatePuc,
            getPucsJerarquia,
            deletePuc,
            getBranch,
            deleteBranch,
            getMunicipios,
            getDepartamentos,
            createBranch,
            changeBranch,
            getRoles,
            getUserId,
            associateBranch
        } = this
        return(
            <DataContext.Provider value={{
                GlobalState:state,
                logIn1,logIn2,getProfiles,changeStateProfile,createProfile,getUser,changeStateUser,getGender,
                getTypeDocument, getDepartment,getCity, createUser, changeProfile,changePassword,changeMenu,changeUser,getEmpresas,
                getTypesOfVouchers, createTypesOfVouchers, changeTypesOfVouchers, getVouchers, changeStateTypesOfVouchers, 
                getVouchersCategory, getThirds, getCentroCostos,getPucsAux, createVoucher,getVoucher,changeVoucher, reverseVoucher,
                getExplanatoryNotes,createExplanatoryNote,getTypesOfExplanatoryNotes,deleteExplanatoryNote,changeExplanatoryNote,getTypesOfTaxes,
                getTypesOfPucs,getPucsMadre,getPucs,getPucsId,createPuc,getPucsJerarquia,changePuc,deletePuc, getBranch, deleteBranch,getMunicipios,
                getDepartamentos, createBranch, changeBranch, getRoles,changeStatePuc, getUserId,associateBranch
              }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
    
}
