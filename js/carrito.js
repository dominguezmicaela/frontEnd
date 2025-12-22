import { alertaCarritoVacio, alertaCompraExitosa, alertaEliminarProducto, alertaProductoEliminadoExitoso } from "./alertas.js";
import { eliminarProducto, vaciarCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito,guardarCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

const renderizarCarrito = () => {
  const carrito = obtenerCarrito();
  actualizarContador(carrito);
  const contenedor = document.getElementById("contenedor-carrito");
  const divAcciones = document.getElementById("acciones-carrito");
  const divResumen = document.getElementById("resumen-carrito");
  
  contenedor.innerHTML = "";
  divAcciones.innerHTML = "";
  divResumen.innerHTML="";

  if (carrito.length == 0) {
    
    divResumen.style.display="none";// oculta el resumen
    //llamo a la funcion de alerta para el carrito vacio
    alertaCarritoVacio();
    return; /// salgo del renderizado de carrito
  }
  //si hay producto muestro el resumen
  divResumen.style.display="block";
  // creo las trajetas si hay productos
  carrito.forEach((producto, indice) => {

    //tarjeta ppal
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("card-carrito");
    //titulo
    const titulo = document.createElement("h3");
    titulo.textContent = producto.nombre;
    titulo.classList.add("titulo-producto-carrito");
    //cuerpo tarjeta 
    const cuerpoTarjeta = document.createElement("div");
    cuerpoTarjeta.classList.add("cuerpo-tarjeta");
    //columna izquierda
    const colIzquierda = document.createElement("div");
    colIzquierda.classList.add("columna-izquierda");
    //crear imagen
    const img = document.createElement("img");
    img.alt = producto.nombre;
    img.src = `../${producto.img}`;
    img.classList.add("img-producto-carrito");
    // creo los controles
    const divContador = document.createElement("div");
    divContador.classList.add("contador-cantidad");
const btnRestar = document.createElement("button");
    btnRestar.classList.add("btn-cantidad");
    btnRestar.textContent = "-";
    btnRestar.addEventListener("click", () => {
        if(producto.cantidad > 1) {
            producto.cantidad--;
            guardarCarrito(carrito);
            renderizarCarrito();
        }
    });

    const spanCantidad = document.createElement("span");
    spanCantidad.textContent = producto.cantidad;

    const btnSumar = document.createElement("button");
    btnSumar.classList.add("btn-cantidad");
    btnSumar.textContent = "+";
    btnSumar.addEventListener("click", () => {
        producto.cantidad++;
        guardarCarrito(carrito);
        renderizarCarrito();
    });

    divContador.append(btnRestar, spanCantidad, btnSumar);

    // Precio
    const precio = document.createElement("p");
    precio.classList.add("precio-producto");
    precio.textContent = `$${producto.precio * producto.cantidad}`;

    // Agregamos todo a la izquierda
    colIzquierda.append(img, divContador, precio);


    // descripción
    const colCentro = document.createElement("div");
    colCentro.classList.add("columna-centro");
    
    const divDescripcion = document.createElement("div");
    divDescripcion.classList.add("cuadro-descripcion");
    const textoDesc = document.createElement("p");
    // Usamos la descripción del JSON, o un texto por defecto si está vacía
    textoDesc.textContent = producto.desc || "Descripción del producto no disponible."; 
    divDescripcion.appendChild(textoDesc);
    colCentro.appendChild(divDescripcion);


    // boton eliminar
    const colDerecha = document.createElement("div");
    colDerecha.classList.add("columna-derecha");

    const btnEliminar = document.createElement("button");
    btnEliminar.classList.add("btn", "btn-eliminar-carrito");
    btnEliminar.textContent = "Eliminar producto";
    
    btnEliminar.addEventListener("click", () => {
      alertaEliminarProducto(producto.nombre).then((result) => {
        if(result.isConfirmed) {
            eliminarProducto(indice);
            renderizarCarrito();
            alertaProductoEliminadoExitoso(producto.nombre);
        }
      })
    });
    colDerecha.appendChild(btnEliminar);

    cuerpoTarjeta.append(colIzquierda, colCentro, colDerecha);
    tarjeta.append(titulo, cuerpoTarjeta); // Título arriba, cuerpo abajo
    contenedor.appendChild(tarjeta);
  });

  //boton para vaciar el carrito
  const btnVaciar = document.createElement("button");
  btnVaciar.classList.add("btn", "btn-vaciar-carrito"); 
  btnVaciar.textContent = "Vaciar Carrito";
  btnVaciar.addEventListener("click", () => {
    vaciarCarrito();
    renderizarCarrito();
    alertaCarritoVacio();
  });
  divAcciones.appendChild(btnVaciar);

  // RESUMEN
  const total = carrito.reduce((acc, p) => acc + (p.precio * p.cantidad), 0);
  const totalCantidad = carrito.reduce((acc, p) => acc + p.cantidad, 0);
  
  const divTotal = document.createElement("div");
  divTotal.classList.add("caja-resumen");

  const resumenTitulo = document.createElement("h3");
  resumenTitulo.textContent = "Resumen de compra";

  const divFilaProductos = document.createElement("div");
  divFilaProductos.classList.add("fila-resumen");
  divFilaProductos.innerHTML = `<p>Productos (${totalCantidad})</p><p>$${total}</p>`;

  const divFilaEnvio = document.createElement("div");
  divFilaEnvio.classList.add("fila-resumen");
  divFilaEnvio.innerHTML = `<p>Envío</p><p class="texto-verde">Gratis</p>`;

  const hr = document.createElement("hr");

  const divFilaTotal = document.createElement("div");
  divFilaTotal.classList.add("fila-resumen", "total-grande");
  divFilaTotal.innerHTML = `<p>Total</p><p>$${total}</p>`;

  const btnFinalizar = document.createElement("button");
  btnFinalizar.classList.add("btn", "btn-finalizar");
  btnFinalizar.textContent = "Continuar compra";
  btnFinalizar.style.width = "100%";
  
  btnFinalizar.addEventListener("click", () => {
      alertaCompraExitosa().then(() => {
          vaciarCarrito();
          renderizarCarrito();
          alertaCompraExitosa();
          window.location.href = "../index.html";
      });
  });

  divTotal.append(resumenTitulo, divFilaProductos, divFilaEnvio, hr, divFilaTotal, btnFinalizar);
  divResumen.appendChild(divTotal);
};

document.addEventListener("DOMContentLoaded", () => {
  renderizarCarrito();
});
