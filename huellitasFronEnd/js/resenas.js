import { alertaResenaPublicada } from "./alertas.js";
const resenasIniciales = [
  {
    nombre: "Juan",
    estrellas: "⭐⭐⭐⭐⭐",
    comentario: "Le encanto a mi perro el alimento",
  },
  {
    nombre: "María García",
    estrellas: "⭐⭐⭐",
    comentario:
      "Tardo un poco en llegar la cama pero conformes. Lola duerme muy comoda",
  },
  {
    nombre: "Lucas Ruiz",
    estrellas: "⭐⭐⭐⭐⭐",
    comentario: "Excelente atencion al cliente, muy recomendados.",
  },
  {
    nombre: "Ana Clara",
    estrellas: "⭐⭐⭐⭐",
    comentario:
      "Compré el bebedero automático y mis gatos lo aman en especial para este calor..",
  },
];

// cargar resenas
const cargarResenas = () => {
  const contenedor = document.getElementById("track-resenas");

  const resenasGuardadas =
    JSON.parse(localStorage.getItem("resenasHuellitas")) || resenasIniciales;

  contenedor.innerHTML = "";

  resenasGuardadas.forEach((resena) => {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("card-resena");

    tarjeta.innerHTML = `
            <div class="estrellas">${resena.estrellas}</div>
            <p class="comentario">"${resena.comentario}"</p>
            <h4 class="autor-resena">- ${resena.nombre}</h4>
        `;

    contenedor.appendChild(tarjeta);
  });
};

// mover carrusel con flechas
const iniciarBotonesCarrusel = () => {
  const track = document.getElementById("track-resenas");
  const btnPrev = document.getElementById("btn-prev-resena");
  const btnNext = document.getElementById("btn-next-resena");

  if (btnPrev && btnNext && track) {
    btnNext.addEventListener("click", () => {
      track.scrollBy({ left: 320, behavior: "smooth" }); // Mueve el ancho de una tarjeta
    });

    btnPrev.addEventListener("click", () => {
      track.scrollBy({ left: -320, behavior: "smooth" });
    });
  }
};

//agregar resenas
const agregarResena = (e) => {
  e.preventDefault();
  const nombre = document.getElementById("inputNombre").value;
  const cantidadEstrellas = document.getElementById("inputEstrellas").value;
  const comentario = document.getElementById("inputComentario").value;
  const estrellasDibujo = "⭐".repeat(cantidadEstrellas);

  const nuevaResena = {
    nombre: nombre,
    estrellas: estrellasDibujo,
    comentario: comentario,
  };

  const resenasGuardadas =
    JSON.parse(localStorage.getItem("resenasHuellitas")) || resenasIniciales;
  resenasGuardadas.push(nuevaResena);

  localStorage.setItem("resenasHuellitas", JSON.stringify(resenasGuardadas));

  document.getElementById("form-resena").reset();

  // Recargamos las tarjetas y hacemos scroll al final para ver la nueva
  cargarResenas();

  // Scroll automático hacia la derecha para ver la nueva
  const track = document.getElementById("track-resenas");
  setTimeout(() => {
    track.scrollLeft = track.scrollWidth;
  }, 100);
   alertaResenaPublicada();

  
};

// 4. Inicialización
document.addEventListener("DOMContentLoaded", () => {
  cargarResenas();
  iniciarBotonesCarrusel(); // Activamos los botones

  const formulario = document.getElementById("form-resena");
  if (formulario) {
    formulario.addEventListener("submit", agregarResena);
  }
});
