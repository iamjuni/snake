"use strict";
const game = () => {
    // Board variables
    let blockSize = 25;
    let col = 16;
    let row = col;

    // Access board and style elements
    let board = document.getElementById("board");
    let style = document.querySelector("style");

    // Game settings
    let gameOver = false;
    let restart = false;
    let speed = 0;

    // Snake
    let snakeX = blockSize * 5;
    let snakeY = blockSize * 5;
    let snake;

    //Generate snake
    const snakeBlock = document.createElement("div");
    snakeBlock.className = "snake";
    snake = snakeBlock.className;

    snakeBlock.style.backgroundColor = "#49bdfc";

    // Snake size
    snakeBlock.style.height = `${blockSize}px`;
    snakeBlock.style.width = `${blockSize}px`;
    board.appendChild(snakeBlock);

    // Snake position
    snakeBlock.style.position = "absolute";
    snakeBlock.style.top = `${snakeY}px`;
    snakeBlock.style.left = `${snakeX}px`;

    // Food
    let foodX = 0;
    let foodY = 0;

    function generateFood() {
        const food = document.createElement("div");

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
    }

    // Change snake direction
    let direction = "right";

    function changeDirection(event) {
        switch (event) {
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
        document.addEventListener("keyup", changeDirection); // Moving snake
        setInterval(update, 1000 / 10); // Snake speed
    };

    // Update game
    function update() {
        if (gameOver) {
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
        snakeBlock.style.top = `${snakeY}px`;
        snakeBlock.style.left = `${snakeX}px`;
    }

    update();
};

game();
