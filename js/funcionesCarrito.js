import { alertaProductoAgregado } from "./alertas.js";
import { guardarCarrito, obtenerCarrito, vaciarCarritoS } from "./storage.js";
import { actualizarContador, mostrarMensaje } from "./ui.js";
//agregarr
export const agregarAlCarrito = (producto) => {
  const carrito = obtenerCarrito();
  const productoExistente = carrito.find((p) => p.id === producto.id);

  if (productoExistente) {
    // Si ya existe, sumamos la cantidad
    productoExistente.cantidad++;
  } else {
    // Si es nuevo, lo agregamos con cantidad base 1
    producto.cantidad = 1;
    carrito.push(producto);
  }

  guardarCarrito(carrito);
  actualizarContador(carrito);
  alertaProductoAgregado(producto);
};
//eliminar
export const eliminarProducto = (indice) => {
  const carrito = obtenerCarrito();
  carrito.splice(indice, 1); //modifica  array en el tercer argumento seria para reemplazar pero como no pase nada entonces lo elimina.
  guardarCarrito(carrito);
  actualizarContador(carrito);
  
};

//vaciar el carrito
export const vaciarCarrito = () => {
  vaciarCarritoS();
  actualizarContador([]);
  
};
