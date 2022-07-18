class Ordenes {
    constructor(comida,precio) {
        this.comida = comida;
        this.precio = precio;
    }
}

const contenedor=document.getElementById("contenido_principal");

let correoUsuario="";

let claveUsuario="";

const carrito = [];

const cliente=document.getElementById("usuario");

const clave=document.getElementById("clave");

const url=`js/datos.json`

const barra=document.querySelector("#lateral");

const eliminar=document.querySelectorAll(".eliminar");

const orden= document.querySelector(".listaCompras");

const total=document.querySelector("#total");

const pagar=document.querySelector(".concluirPago")

const platillos=document.getElementsByClassName("platillo");

const nombres=document.getElementsByClassName("nombre_alimento");

const precios=document.getElementsByClassName("precio_alimento")

const sesionActiva=document.getElementById("sesionIniciada");

// const producto5=new Ordenes("lonche","20")

const pedido=[nombres, precios];