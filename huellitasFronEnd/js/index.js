//importo lo que necesito usar
import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador, mostrarMensaje } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-tarjetas");
  const carrito = obtenerCarrito();
  actualizarContador(carrito);
  fetch("./data/productos.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error HTTP status: ${res.status}`); // prestar atencion al tipo de comillas
      }
      return res.json();
    })
    .then((data) => {
      //aca se hace el renderizado de las tarjetas con el for
      data.forEach((producto) => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("card");
        const img = document.createElement("img");
        img.alt = producto.nombre;
        img.src = `./${producto.img}`;
        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;
        const precio = document.createElement("p");
        precio.textContent = `$${producto.precio}`;
        const boton = document.createElement("button");
        boton.classList.add("btn");
        boton.textContent = "Agregar al carrito";
        boton.addEventListener("click", () => {
          agregarAlCarrito(producto);
        });
        tarjeta.appendChild(img);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(boton);
        contenedor.appendChild(tarjeta);
      });
    })
    .catch((error) => console.log(error));
});
