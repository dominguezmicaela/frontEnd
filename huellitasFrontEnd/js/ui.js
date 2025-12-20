//  Funcion para actualizar el contador del carrito
export const actualizarContador =(carrito)=>{
    const contador= document.getElementById("contador-carrito")
    if(contador){contador.textContent=carrito.length}
}
// funcion para mostrar un mensaje como alerta
export const mostrarMensaje=(texto)=>{alert(texto)}