
let score = 0;
let timeLeft = 30;
let gameInterval;
let isGameRunning = false;


const target = document.getElementById('target');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const gameArea = document.getElementById('game-area');

const gameAreaWidth = gameArea.offsetWidth;
const gameAreaHeight = gameArea.offsetHeight;


startBtn.addEventListener('click', startGame);


resetBtn.addEventListener('click', resetGame);


target.addEventListener('click', hitTarget);


function startGame() {
    if (isGameRunning) return;
    
    isGameRunning = true;
    score = 0;
    timeLeft = 30;
    
    updateDisplay();
    moveTarget();
    
 
    gameInterval = setInterval(() => {
        timeLeft--;
        updateDisplay();
        
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}


function resetGame() {
    clearInterval(gameInterval);
    isGameRunning = false;
    score = 0;
    timeLeft = 30;
    updateDisplay();
    target.style.display = 'none';
}


function endGame() {
    clearInterval(gameInterval);
    isGameRunning = false;
    target.style.display = 'none';
    alert(`Jogo terminado! Sua pontuação final é: ${score}`);
}


function moveTarget() {
    if (!isGameRunning) return;
    
    
    const maxX = gameAreaWidth - target.offsetWidth;
    const maxY = gameAreaHeight - target.offsetHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
  
    target.style.left = `${randomX}px`;
    target.style.top = `${randomY}px`;
    target.style.display = 'block';
}


function hitTarget() {
    if (!isGameRunning) return;
    
    score++;
    updateDisplay();
    target.style.display = 'none';
    
    
    setTimeout(moveTarget, 500);
}


function updateDisplay() {
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;
}