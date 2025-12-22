const key = "carrito";
export const guardarCarrito = (carrito) => {
  localStorage.setItem(key, JSON.stringify(carrito));
};
export const obtenerCarrito = () => {
  return JSON.parse(localStorage.getItem(key)) || []; // ssi el local no encuentra devuelve vacio
};
export const vaciarCarritoS = (carrito) => {
  localStorage.removeItem(key);
};
