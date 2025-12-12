
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
        imageUrl: producto.img, 
        imageWidth: 100,
        imageAlt: producto.nombre,
        customClass: estilosComunes,
        buttonsStyling: false,
        showCancelButton: true,
        confirmButtonText: "Seguir comprando",
        cancelButtonText: "Ir al carrito"
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.cancel) {
           window.location.href = "pages/carrito.html";
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
export const alertaProductoEliminadoExitoso = (nombre) => {
    return Swal.fire({
        title: "¡Eliminado!",
        text: `El producto ${nombre} ha sido quitado del carrito.`,
        icon: "success",
        confirmButtonText: "Aceptar",
        customClass: estilosComunes, // ¡Importante para que use tus estilos!
        buttonsStyling: false
    });
};
// alerta resena

export const alertaResenaPublicada = () => {
    return Swal.fire({
        title: "¡Gracias por tu opinión!",
        text: "Tu reseña ha sido publicada con éxito.",
        icon: "success",
        customClass: estilosComunes, // Usa tus estilos beige/verde
        buttonsStyling: false,       // Desactiva los estilos por defecto
        confirmButtonText: "Genial",
        timer: 3000,                 // Se cierra sola a los 3 segundos (opcional)
        timerProgressBar: true
    });
};