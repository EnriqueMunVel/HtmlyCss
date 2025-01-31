var numeroAleatorio = Math.floor(Math.random() * 10) + 1;
var intentos = 3;
function verificarNumero(boton) {
    var numeroSeleccionado = parseInt(boton.innerHTML);
    if (numeroSeleccionado === numeroAleatorio) {
        document.getElementById('result').innerHTML = "<p>¡Felicidades! Adivinaste el número correctamente.</p><img src='victoria.jpg' alt='Victoria'>";
        desactivarBotones();
    } else {
        intentos--;
        boton.disabled = true; 
        document.getElementById('intentos').innerHTML = "Intentos restantes: " + intentos;

        
        if (intentos === 0) {
            document.getElementById('result').innerHTML = "<p>Lo siento, perdiste. El número era " + numeroAleatorio + ". ¡Intenta otra vez!</p><img src='intenta_otra_vez.jpg' alt='Intenta otra vez'>";
            desactivarBotones();
        }
    }
}
// Número aleatorio entre 1 y 10
var numeroAleatorio = Math.floor(Math.random() * 10) + 1;
var intentos = 3;

// Función que se ejecuta cuando se hace clic en un botón
function verificarNumero(boton) {
    var numeroSeleccionado = parseInt(boton.innerHTML);

    // Verificar si el número seleccionado es el correcto
    if (numeroSeleccionado === numeroAleatorio) {
        document.getElementById('result').innerHTML = "<p>¡Felicidades! Adivinaste el número correctamente.</p><img src='victoria.jpg' alt='Victoria'>";
        desactivarBotones();
    } else {
        intentos--;
        boton.disabled = true; // Desactivar el botón seleccionado

        // Mostrar los intentos restantes
        document.getElementById('intentos').innerHTML = "Intentos restantes: " + intentos;

        // Si ya no quedan intentos, mostrar el mensaje de derrota
        if (intentos === 0) {
            document.getElementById('result').innerHTML = "<p>Lo siento, perdiste. El número era " + numeroAleatorio + ". ¡Intenta otra vez!</p><img src='intenta_otra_vez.jpg' alt='Intenta otra vez'>";
            desactivarBotones();
        }
    }
}

// Función para desactivar todos los botones
function desactivarBotones() {
    var botones = document.querySelectorAll("button");
    for (var i = 0; i < botones.length; i++) {
        botones[i].disabled = true;
    }
}

// Asignar la función a los botones
document.getElementById("boton1").onclick = function() { verificarNumero(this) };
document.getElementById("boton2").onclick = function() { verificarNumero(this) };
document.getElementById("boton3").onclick = function() { verificarNumero(this) };
document.getElementById("boton4").onclick = function() { verificarNumero(this) };
document.getElementById("boton5").onclick = function() { verificarNumero(this) };
document.getElementById("boton6").onclick = function() { verificarNumero(this) };
document.getElementById("boton7").onclick = function() { verificarNumero(this) };
document.getElementById("boton8").onclick = function() { verificarNumero(this) };
document.getElementById("boton9").onclick = function() { verificarNumero(this) };
document.getElementById("boton10").onclick = function() { verificarNumero(this) };