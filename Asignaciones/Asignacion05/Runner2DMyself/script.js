document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('player');
    const obstacle = document.getElementById('obstacle');
    const startBtn = document.getElementById('start-btn');

    let isJumping = false;
    let isGameOver = false;

    // Reset
    startBtn.addEventListener('click', () => {
        if (isGameOver) location.reload();
    });

    // Saltar
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && !isJumping) {
            jump();
        }
    });

    function jump() {
        isJumping = true;
        let jumpCount = 0;
        const jumpInterval = setInterval(() => {
            if (jumpCount < 15) {
                player.style.bottom = `${parseInt(player.style.bottom || 20) + 5}px`;
            } else if (jumpCount < 30) {
                player.style.bottom = `${parseInt(player.style.bottom || 20) - 5}px`;
            } else {
                clearInterval(jumpInterval);
                isJumping = false;
            }
            jumpCount++;
        }, 20);
    }

    const checkCollision = setInterval(() => {
        const playerRect = player.getBoundingClientRect();
        const obstacleRect = obstacle.getBoundingClientRect();

        if (
            playerRect.right > obstacleRect.left &&
            playerRect.left < obstacleRect.right &&
            playerRect.bottom > obstacleRect.top
        ) {
            alert('Game Over!');
            isGameOver = true;
            clearInterval(checkCollision);
        }
    }, 10);
});
