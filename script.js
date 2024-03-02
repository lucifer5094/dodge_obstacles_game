const player = document.getElementById('player');
const obstacle = document.getElementById('obstacle');

let isGameOver = false;

document.addEventListener('keydown', (event) => {
  if (!isGameOver) {
    if (event.key === 'ArrowLeft' && player.style.left !== '0px') {
      movePlayer(-50);
    } else if (event.key === 'ArrowRight' && player.style.left !== '350px') {
      movePlayer(50);
    }
  }
});

function movePlayer(distance) {
  const currentPosition = parseInt(player.style.left) || 0;
  const newPosition = currentPosition + distance;
  player.style.left = newPosition + 'px';
}

function checkCollision() {
  const playerRect = player.getBoundingClientRect();
  const obstacleRect = obstacle.getBoundingClientRect();

  if (
    playerRect.top < obstacleRect.bottom &&
    playerRect.bottom > obstacleRect.top &&
    playerRect.left < obstacleRect.right &&
    playerRect.right > obstacleRect.left
  ) {
    gameOver();
  }
}

function gameOver() {
  isGameOver = true;
  alert('Game Over! You collided with the obstacle.');
}

setInterval(checkCollision, 10);
