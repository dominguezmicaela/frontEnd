
const estilosComunes = {
    popup: 'alerta-huellitas',
    title: 'titulo-alerta',
    confirmButton: 'btn-confirmar',
    cancelButton: 'btn-cancelar'
};

// alerta producto agregado
export const alertaProductoAgregado = (producto) => {
    // Retornamos la promesa por si quieres hacer algo más después
    return Swal.fire({
        title: "¡Producto agregado!",
        text: `Agregaste ${producto.nombre} al carrito`,
        // Sugerencia: Asegúrate que producto.img tenga la ruta completa o manéjala dinámicamente
        imageUrl: producto.img, 
        imageWidth: 100,
        imageAlt: producto.nombre,
        customClass: estilosComunes,
        buttonsStyling: false,
        showCancelButton: true,
        confirmButtonText: "Seguir comprando",
        cancelButtonText: "Ir al carrito"
    }).then((result) => {
        // Swal.DismissReason.cancel es cuando se pulsa el botón de cancelar explícitamente
        if (result.dismiss === Swal.DismissReason.cancel) {
            // Nota: Revisa que esta ruta sea correcta dependiendo de dónde estés
            window.location.href = "./carrito.html"; 
        }
    });
};

//alerta de compra exitosa
export const alertaCompraExitosa = () => {
    return Swal.fire({
        title: "¡Compra realizada!",
        text: "Gracias por elegir Huellitas. Te enviaremos el detalle a tu correo.",
        icon: "success",
        customClass: estilosComunes,
        buttonsStyling: false,
        confirmButtonText: "Volver al inicio"
    });
};

// alerta de eproducto eliminado
export const alertaEliminarProducto = (nombre) => {
    return Swal.fire({
        title: "¿Eliminar producto?",
        text: `¿Estás seguro de que quieres quitar ${nombre} del carrito?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
        customClass: estilosComunes,
        buttonsStyling: false
    });
};

// alerta carrito vacio
export const alertaCarritoVacio = () => {
    Swal.fire({
        title: "¡Tu carrito está vacío!",
        text: "Parece que no has elegido nada aún. ¿Quieres ver nuestros productos?",
        icon: "question",
        confirmButtonText: "Ir a la tienda",
        customClass: estilosComunes,
        buttonsStyling: false,
        allowOutsideClick: false
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "../index.html";
        }
    });
};