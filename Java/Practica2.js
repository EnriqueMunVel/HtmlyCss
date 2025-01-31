function restaropacidad() {

    let opacidad = parseFloat(cuadrado.style.opacity || 1);
    
    if (opacidad > 0) {
        cuadrado.style.opacity = opacidad - 0.1;
    }
}

function sumaropacidad() {

    let opacidad = parseFloat(cuadrado.style.opacity || 1);

    if (opacidad < 1) {
        cuadrado.style.opacity = opacidad + 0.1;
    }
}
 
