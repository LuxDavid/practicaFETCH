class Ordenes {
    constructor(comida,precio) {
        this.comida = comida;
        this.precio = precio;
    }
}

const contenedor=document.getElementById("contenido_principal");

let correoUsuario="";

let claveUsuario="";

const opciones=document.getElementsByClassName("platillo");

const carrito = [];

const nombres=document.getElementsByClassName("nombre_alimento");

const cliente=document.getElementById("usuario");

const clave=document.getElementById("clave");

const url=`js/datos.json`

const barra=document.querySelector("#lateral");

const eliminar=document.querySelectorAll(".eliminar");

const orden= document.querySelector(".listaCompras");

const total=document.querySelector("#total");

const pagar=document.querySelector(".concluirPago")

