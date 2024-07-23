"use strict";
// Board variables
let blockSize = 25;
let col = 16;
let row = col;

// Access board and style elements
let board = document.getElementById("board");
let style = document.querySelector("style");

// Snake
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;
let snake;

//Generate snake
const snakeHead = document.createElement("div");
snakeHead.id = "snake-head";
snake = snakeHead.className = "snake";

snakeHead.style.backgroundColor = "#49bdfc";

// Snake size
snakeHead.style.height = `${blockSize}px`;
snakeHead.style.width = `${blockSize}px`;
board.appendChild(snakeHead);

// Snake position
snakeHead.style.position = "absolute";

// Food
const food = document.createElement("div");
let foodX, foodY;

function generateFood() {
    food.className = "apple";

    // Specify food height and width
    food.style.height = `${blockSize}px`;
    food.style.width = `${blockSize}px`;
    food.style.backgroundColor = "#fc5d8d";
    board.appendChild(food);

    // Generate random coordinates for food
    foodX = Math.floor(Math.random() * col) * blockSize;
    foodY = Math.floor(Math.random() * row) * blockSize;

    // Position food
    food.style.position = "relative";
    food.style.top = `${foodY}px`;
    food.style.left = `${foodX}px`;

    return food;
}

// Change snake direction
let direction = "right";

function changeDirection(e) {
    switch (e.key) {
        case "ArrowUp":
        case "w":
            direction = "up";
            break;

        case "ArrowDown":
        case "s":
            direction = "down";
            break;

        case "ArrowRight":
        case "d":
            direction = "right";
            break;

        case "ArrowLeft":
        case "a":
            direction = "left";
            break;
    }
}

// Set up game after window object loads
window.onload = function () {
    let height = row * blockSize;
    let width = col * blockSize;
    let size = `#board { \n height: ${height}px; \n width: ${width}px;}`;
    style.append(size);

    generateFood();
    document.addEventListener("keydown", changeDirection); // Moving snake
    setInterval(update, 1000 / 10); // Snake speed
};

// Update game
function update() {
    // Game over
    let gameOver = false;
    if (gameOver == true) {
        return;
    }

    // Snake movement
    switch (direction) {
        case "up":
            snakeY -= blockSize;
            break;

        case "down":
            snakeY += blockSize;
            break;

        case "right":
            snakeX += blockSize;
            break;

        case "left":
            snakeX -= blockSize;
            break;
    }

    // Reposition snake
    snakeHead.style.top = `${snakeY}px`;
    snakeHead.style.left = `${snakeX}px`;

    // Grow snake by eating food and adding segments
    if (snakeX == foodX && snakeY == foodY) {
        const segment = document.createElement("div");
        segment.className = "snake";
        segment.style.backgroundColor = snakeHead.style.backgroundColor;

        // Snake block size
        segment.style.height = snakeHead.style.height;
        segment.style.width = snakeHead.style.width;

        // Add new segment to snake body
        board.appendChild(segment);

        // Snake segment postion
        segment.style.position = "absolute";
        segment.style.top = `${snakeY}px`;
        segment.style.left = `${snakeX}px`;

        // Generate food
        generateFood();       
    }
}

update();