//importo lo que necesito usar
import{agregarAlCarrito}from "./funcionesCarrito.js"
import {obtenerCarrito} from "./storage.js";
import { actualizarContador,mostrarMensaje } from "./ui.js";

document.addEventListener("DOMContentLoaded",()=>{
    const contenedor=document.getElementById("contenedor-tarjetas");
    const carrito=obtenerCarrito();
    actualizarContador(carrito);
    fetch("./data/productos.json")
    .then((res) =>{
        if(!res.ok){
            throw new Error(`Error HTTP status: ${res.status}`); // prestar atencion al tipo de comillas
        }
        return  res.json();
    })
    .then((data)=>{
        //aca se hace el renderizado de las tarjetas con el for
        data.forEach(producto => {
            const tarjeta=document.createElement("article");
            tarjeta.classList.add("card")
            const img= document.createElement("img")
            img.alt=producto.nombre
            img.src=`./${producto.img}`
            



            
        });
    })
    .catch(error=> console.log(error));
})
