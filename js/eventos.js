//---------------------------------------------CREACION DE ELEMENTOS EN EL HTML-----------------------------------------------------------------------------------

const crearContenido=(opciones)=>{

    return`
    <div class="platillo">

    <img class="images__platillos" src=${opciones.Imagen}>
    <h2 class="nombre_alimento">${opciones.nombre}</h2>
    <h2 class="precio_alimento">${opciones.precio}$</h2>
                
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
    
    }).then(()=>eventos())
    .catch((error)=>console.log("Algo salio mal"))

function eventos(){

    for(const comida of platillos){

        comida.addEventListener("click",()=>{

        comida.style.background="black";
        notificacion("agregado alcarrito","green");
        agregarCarrito();

        setTimeout(()=>{
        comida.style.background="white"
        },500)

        })
    }

}

}


//----------------------------------------------------VERIFICACION Y GUARADO DE DATOS DEL FORMULARIO------------------------------------------------------------------

function sesionUsuario(){


const secion={
correo:cliente.value,
contraseña:clave.value,

}

let datosAlmacenados=JSON.stringify(secion)

localStorage.setItem("user", datosAlmacenados);


}

const datosStorage=()=>{

    const infoSesion=JSON.parse(localStorage.getItem("user"));

    cliente.value=infoSesion.correo
    clave.value=infoSesion.contraseña
    sesionActiva.innerText=infoSesion.correo;
    
}

function recuperarInformacion(){

localStorage.getItem("user") && datosStorage()

}

recuperarInformacion();

    
    const datosIncompletos= ()=> {
        return (usuario.value.trim() == "" || clave.value.trim() == "")
    }
    
    
    const DatosCompletados=()=>{
    
    datosIncompletos()? notificacion("Por favor rellena los campos para iniciar sesion", "orange", "warning") :  iniciarSesion()
   
    
    
          
    }
    
    // //-------------------------------SWEET ALERT Y NOTIFICACIONES PARA EL FORUMULARIO----------------------------------------------------------------------------
    
    const notificacion=(notificacion, color, icon, )=>{
    
    Swal.fire({   
    icon:icon || 'success',
    title: notificacion,
    position:'top-end',
    showConfirmButton:false,
    toast:true,
    timer:1000,
    background:color || "gray",
    color:"white"
    })
    
    }
    
    const iniciarSesion=()=>{
    
        Swal.fire({
            position: 'center',
            title: 'Iniciando sesion',
            showConfirmButton: false,
            timer: 3000,
            background:"black",
            color:"white"
          }).then(()=>{
         
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Sesion iniciada',
                background:"green",
                showConfirmButton: false,
                timer: 1500,
                color:"white",
               
          })
    
    }).then(()=>{ 
    barra.innerHTML=''
     barra.style.background="#ff642c"})
    
    }
    
//----------------------------------EVENTOS A SUCEDER AL OPRIMIR EL BOTON DE INICIO-----------------------------------------------------------------------------

        
        document.addEventListener("submit", (e)=>{
        
        e.preventDefault();
        sesionUsuario();
        DatosCompletados();
        
        });
        
        

      