// Definir las provincias y sus coordenadas (coordenadas aproximadas)
const provinces = [
    { name: 'Madrid', top: '30%', left: '40%' },
    { name: 'Barcelona', top: '25%', left: '60%' },
    { name: 'Valencia', top: '40%', left: '50%' },
    { name: 'Sevilla', top: '65%', left: '50%' },
    { name: 'Zaragoza', top: '35%', left: '45%' },
    { name: 'Murcia', top: '55%', left: '55%' },
    { name: 'Granada', top: '70%', left: '45%' },
    { name: 'Bilbao', top: '20%', left: '50%' },
    { name: 'Alicante', top: '40%', left: '55%' },
    { name: 'La Coruña', top: '10%', left: '60%' }
];

// Variables del juego
let currentRound = 0;
let score = 0;

// Obtener elementos del DOM
const cityInput = document.getElementById('city-input');
const submitBtn = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');
const marker = document.getElementById('marker');
const scoreDisplay = document.getElementById('score');
const roundDisplay = document.getElementById('round-info');

// Función para cambiar la provincia y actualizar el marcador
function changeRound() {
    if (currentRound < provinces.length) {
        const province = provinces[currentRound];
        
        // Establecer la posición del marcador
        marker.style.top = province.top;
        marker.style.left = province.left;
        
        // Actualizar la ronda y la provincia a adivinar
        roundDisplay.textContent = `Ronda ${currentRound + 1} de ${provinces.length}`;
        
        // Limpiar la entrada de texto y feedback
        cityInput.value = '';
        feedback.textContent = '';
    } else {
        // Fin del juego
        feedback.textContent = `Juego terminado. Tu puntuación final es: ${score}`;
        feedback.className = '';
        submitBtn.disabled = true; // Desactivar el botón
    }
}

// Función para comprobar la respuesta del jugador
function checkAnswer() {
    const playerCity = cityInput.value.trim().toLowerCase();
    const correctCity = provinces[currentRound].name.toLowerCase();
    
    if (playerCity === correctCity) {
        score++;
        scoreDisplay.textContent = `Puntuación: ${score}`;
        feedback.textContent = '¡Correcto! Has adivinado la provincia.';
        feedback.className = 'correct';
    } else {
        feedback.textContent = '¡Incorrecto! Intenta de nuevo.';
        feedback.className = 'incorrect';
    }

    // Avanzar a la siguiente ronda
    currentRound++;
    setTimeout(changeRound, 1500); // Cambiar de ronda después de 1.5 segundos
}

// Iniciar la primera ronda
changeRound();

// Evento al hacer clic en el botón de comprobar
submitBtn.addEventListener('click', checkAnswer);

// Permitir comprobar la respuesta al presionar "Enter"
cityInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});