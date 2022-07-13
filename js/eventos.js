//---------------------------------------------CREAR OPCIONES ELEMENTOS EN EL HTML-----------------------------------------------------------------------------------

const crearContenido=(opciones)=>{


    
    return`
    <div class="platillo">

    <img src=${opciones.Imagen}/>
    <h2 class="nombre_alimento">${opciones.nombre}</h2>
    <h2>${opciones.precio}</h2>
                
    </div>
    
    `
    }
    
    const mostrarContenido=(url)=>{
    
    
    let opciones=""
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
    
    for (let info of data) {
    opciones += crearContenido(info)
    contenedor.innerHTML=opciones;
    }
    
    })
    .catch((error)=>console.log("Algo salio mal"))
    
    }
    
    
    
    
    
    
    
    // //----------------------------------------------------VERIFICACION Y GUARADO DE DATOS DEL FORMULARIO-------------------------------------------------------------------------------
    
    // function sesionUsuario(){
    //     // debugger
    
    // const secion={
    // correo:usuario.value,
    // contraseña:clave.value,
    
    // }
    
    // let datosAlmacenados=JSON.stringify(secion)
    
    // localStorage.setItem("user", datosAlmacenados);
    // }
    
    
    
    // const datosStorage=()=>{
    
    //     const infoSesion=JSON.parse(localStorage.getItem("user"));
    
    //     usuario.value=infoSesion.correo
    //     clave.value=infoSesion.contraseña
        
    // }
    
    
    
    // function recuperarInformacion(){
    
    // localStorage.getItem("user") && datosStorage()
    
    // }
    
    // // recuperarInformacion();
    
    // //---------------------------------------------------------------------------------------------------------------------
    
    // const datosIncompletos= ()=> {
    //     return (usuario.value.trim() == "" || clave.value.trim() == "")
    // }
    
    // //----------------------------------VERIFICACION DE FORMULARIO-------------------------------------------------------------------------------------
    
    // // const DatosCompletados=()=>{
    
    // //     datosIncompletos() ? notificacion("Por favor rellena los campos para iniciar sesion", "orange", "warning") : iniciarSesion()
    // // }
    
    // //----------------------------------NOTIFICAR AL AGREGAR AL CARRITO-------------------------------------------------------------------------------------
    
    // // const notificacion=(notificacion, color, icon, )=>{
    
    // // Swal.fire({   
    // // icon:icon || 'success',
    // // title: notificacion,
    // // position:'top-end',
    // // showConfirmButton:false,
    // // toast:true,
    // // timer:1000,
    // // timeProgressBar:true,
    // // background:color || "gray",
    // // color:"white"
    // // })
    
    // // }
    
    // // const iniciarSesion=()=>{
    
    // //     Swal.fire({
    // //         position: 'center',
    // //         title: 'Iniciando sesion',
    // //         showConfirmButton: false,
    // //         timeProgressBar:true,
    // //         timer: 3000,
    // //         background:"blue",
    // //         color:"white"
    // //       }).then(()=>{
         
    // //         Swal.fire({
    // //             position: 'center',
    // //             icon: 'success',
    // //             title: 'Sesion iniciada',
    // //             background:"green",
    // //             showConfirmButton: false,
    // //             timer: 1500,
    // //             color:"white"
    // //       })
    
    
    // // })
    
    // // }
    
    // //-------------------------------------------------------------BOTONES----------------------------------------------------------------
    // usuario.addEventListener("blur", (e)=>{
            
    //     correoUsuario= e.target.value;
        
    //     console.log(correoUsuario);
        
        
    //     });   
        
    //     //------------------------------------------------------------------------------------------------------------------------------------
        
    //     clave.addEventListener("blur", (e)=>{
                
    //         claveUsuario= e.target.value;
            
    //         console.log(claveUsuario);
            
            
    //         });   
        
    //     //----------------------------------------------------------------------------------------------------------------------------------
        
    //     // document.addEventListener("submit", (e)=>{
        
    //     // e.preventDefault();
    //     // sesionUsuario();
    //     // DatosCompletados();
        
    //     // });
        
    //     //--------------------------------------------------------------------------------------------------------------------------------------
        
    //     function tocarBotones(){
        
    //         const botones=document.getElementsByClassName("boton");
            
    //         for (const boton of botones) {
                
    //             boton.addEventListener("mouseover",()=>boton.className="sobreBoton");
    //             boton.addEventListener("mouseout",()=>boton.className="");
            
    //         }
            
    //         }
            
    //         // tocarBotones();