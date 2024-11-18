let gameBoard = document.getElementById("gameBoard");
let startGameBtn = document.getElementById("startGame");
let speedSelector = document.getElementById("speedSelector");
let snake = [{ x: 200, y: 200 }];
let snakeDirection = { x: 20, y: 0 };
let food = { x: 0, y: 0 };
let gameInterval;
let score = 0;

let stepSize = 20; // Default step size
let borderSize = 600; // Default game board size

// Dynamically set borderSize and stepSize based on media queries
function updateGameSettings() {
    const gameBoardStyle = getComputedStyle(gameBoard);
    borderSize = parseInt(gameBoardStyle.width); // Get the current game board width
    stepSize = borderSize / 30; // Divide the game board into a 30x30 grid
}

// Start Game
startGameBtn.addEventListener("click", startGame);

function startGame() {
    updateGameSettings(); // Ensure the game settings match the current screen size
    snake = [{ x: stepSize * 10, y: stepSize * 10 }]; // Start position
    snakeDirection = { x: stepSize, y: 0 };
    score = 0;
    document.getElementById("score").textContent = `Score: ${score}`;
    placeFood();

    clearInterval(gameInterval);
    const speed = parseInt(speedSelector.value);
    gameInterval = setInterval(gameLoop, speed);
}

function gameLoop() {
    updateSnakePosition();
    if (checkCollision()) {
        endGame();
    } else {
        if (checkFoodCollision()) {
            placeFood();
        } else {
            snake.pop();
        }
        drawGame();
    }
}

function updateSnakePosition() {
    const head = {
        x: snake[0].x + snakeDirection.x,
        y: snake[0].y + snakeDirection.y,
    };
    snake.unshift(head);
}

function placeFood() {
    food.x = Math.floor(Math.random() * (borderSize / stepSize)) * stepSize;
    food.y = Math.floor(Math.random() * (borderSize / stepSize)) * stepSize;
}

function checkFoodCollision() {
    if (snake[0].x === food.x && snake[0].y === food.y) {
        score++;
        document.getElementById("score").textContent = `Score: ${score}`;
        return true;
    }
    return false;
}

function checkCollision() {
    if (
        snake[0].x < 0 ||
        snake[0].x >= borderSize ||
        snake[0].y < 0 ||
        snake[0].y >= borderSize
    ) {
        return true;
    }
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }
    return false;
}

function endGame() {
    clearInterval(gameInterval);
    alert("Game Over!");
    score = 0;
    document.getElementById("score").textContent = `Score: ${score}`;
    snake = [];
    gameBoard.innerHTML = "";
}

function drawGame() {
    gameBoard.innerHTML = "";
    snake.forEach(segment => {
        const snakeElement = document.createElement("div");
        snakeElement.style.position = "absolute";
        snakeElement.style.width = `${stepSize}px`;
        snakeElement.style.height = `${stepSize}px`;
        snakeElement.style.left = `${segment.x}px`;
        snakeElement.style.top = `${segment.y}px`;
        snakeElement.style.backgroundColor = "green";
        gameBoard.appendChild(snakeElement);
    });

    const foodElement = document.createElement("div");
    foodElement.style.position = "absolute";
    foodElement.style.width = `${stepSize}px`;
    foodElement.style.height = `${stepSize}px`;
    foodElement.style.left = `${food.x}px`;
    foodElement.style.top = `${food.y}px`;
    foodElement.style.backgroundColor = "red";
    foodElement.style.borderRadius = "50%";
    gameBoard.appendChild(foodElement);
}

document.addEventListener("keydown", event => {
    switch (event.key) {
        case "ArrowUp":
            if (snakeDirection.y === 0) snakeDirection = { x: 0, y: -stepSize };
            break;
        case "ArrowDown":
            if (snakeDirection.y === 0) snakeDirection = { x: 0, y: stepSize };
            break;
        case "ArrowLeft":
            if (snakeDirection.x === 0) snakeDirection = { x: -stepSize, y: 0 };
            break;
        case "ArrowRight":
            if (snakeDirection.x === 0) snakeDirection = { x: stepSize, y: 0 };
            break;
    }
});
