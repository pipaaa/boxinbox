const player = document.getElementById('player');
let playerX = 50; // Posición inicial del jugador

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        playerX += 10; // Mover a la derecha
    } else if (event.key === 'ArrowLeft') {
        playerX -= 10; // Mover a la izquierda
    }

    player.style.left = playerX + 'px';
});
