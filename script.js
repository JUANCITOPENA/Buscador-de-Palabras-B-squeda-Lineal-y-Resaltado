// Lista fija de palabras
const palabras = [
    "ciencia de datos", "análisis de datos", "programación web", "móvil", "desktop",
    "temas informáticos", "Python", "JavaScript", "SQL", "machine learning", "big data",
    "API", "HTML", "CSS", "React", "Angular", "Node.js", "Java", "Swift", "Android", "iOS",
    "data science", "data analysis", "web development", "software engineering", "data visualization",
    "cloud computing", "database", "front-end", "back-end"
];

// Función para buscar la palabra ingresada por el usuario
function buscarPalabra() {
    const palabraIngresada = document.getElementById("palabraBusqueda").value;

    // Obtener el contenedor para mostrar los resultados
    const contenedor = document.getElementById("contenedor");

    // Crear un elemento para mostrar la lista y resultados
    const resultadoElemento = document.getElementById("resultado");
    
    let encontrado = false;
    let posicion = -1;

    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].toLowerCase().includes(palabraIngresada.toLowerCase())) {
            encontrado = true;
            posicion = i + 1; // Sumamos 1 para mostrar la posición empezando desde 1
            break;
        }
    }

    if (encontrado) {
        resultadoElemento.innerHTML = `<p>Palabra "${palabraIngresada}" encontrada en la posición ${posicion}.</p>`;
        // Resaltar la palabra encontrada
        const listaPalabras = document.getElementById("listaPalabras").getElementsByTagName("span");
        for (let i = 0; i < listaPalabras.length; i++) {
            listaPalabras[i].classList.remove("resaltado");
        }
        listaPalabras[posicion - 1].classList.add("resaltado");
    } else {
        resultadoElemento.innerHTML = `<p>Palabra "${palabraIngresada}" no encontrada en la lista.</p>`;
    }
}
