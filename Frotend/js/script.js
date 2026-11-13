
const carrusel = document.getElementById("carrusel");
const indicadores = document.getElementById("indicadores");

let indiceActual = 0;

const proyectos = document.querySelectorAll(".proyecto");

function moverCarrusel(direccion) {

    indiceActual += direccion;

    if (indiceActual >= proyectos.length) {
        indiceActual = 0;
    }

    if (indiceActual < 0) {
        indiceActual = proyectos.length - 1;
    }

    actualizarCarrusel();
}

function actualizarCarrusel() {

    const proyecto = proyectos[indiceActual];

    carrusel.scrollTo({
        left: proyecto.offsetLeft - carrusel.offsetLeft,
        behavior: "smooth"
    });

    document.querySelectorAll(".indicadores span").forEach((punto, i) => {
        punto.classList.toggle("activo", i === indiceActual);
    });
}

// Crear indicadores automáticamente

proyectos.forEach((proyecto, i) => {

    const punto = document.createElement("span");

    punto.addEventListener("click", () => {
        indiceActual = i;
        actualizarCarrusel();
    });

    indicadores.appendChild(punto);

});

// Movimiento automático cada 5 segundos

setInterval(() => {
    moverCarrusel(1);
}, 5000);

actualizarCarrusel();
