
const provinces = [
    { name: 'Castilla y León', top: '30%', left: '45%' },
    { name: 'Cataluña', top: '33%', left: '80%' },
    { name: 'Comunidad de Madrid', top: '40%', left: '51%' },
    { name: 'Andalucía', top: '65%', left: '50%' },
    { name: 'Comunidad Valenciana', top: '50%', left: '70%' },
    { name: 'Castilla la Mancha', top: '50%', left: '55%' },
    { name: 'Galicia', top: '22%', left: '26%' },
    { name: 'País Vasco', top: '20%', left: '50%' },
    { name: 'Aragón', top: '33%', left: '70%' },
    { name: 'Murcia', top: '60%', left: '65%' }
];


let currentRound = 0;
let score = 0;


const cityInput = document.getElementById('city-input');
const submitBtn = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');
const marker = document.getElementById('marker');
const scoreDisplay = document.getElementById('score');
const roundDisplay = document.getElementById('round-info');


function changeRound() {
    if (currentRound < provinces.length) {
        const province = provinces[currentRound];
        
        
        marker.style.top = province.top;
        marker.style.left = province.left;
        
        
        roundDisplay.textContent = `Ronda ${currentRound + 1} de ${provinces.length}`;
        
        
        cityInput.value = '';
        feedback.textContent = '';
    } else {
        
        feedback.textContent = `Juego terminado. Tu puntuación final es: ${score}`;
        feedback.className = '';
        submitBtn.disabled = true; 
    }
}


function checkAnswer() {
    const playerCity = cityInput.value.trim().toLowerCase();
    const correctCity = provinces[currentRound].name.toLowerCase();
    
    if (correctCity.includes(playerCity)) {
        score++;
        scoreDisplay.textContent = `Puntuación: ${score}`;
        feedback.textContent = '¡Correcto! Has adivinado la provincia.';
        feedback.className = 'correct';
    } else {
        feedback.textContent = '¡Incorrecto! Intenta de nuevo.';
        feedback.className = 'incorrect';
    }


    currentRound++;
    setTimeout(changeRound, 1500); 
}


changeRound();

submitBtn.addEventListener('click', checkAnswer);

cityInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});