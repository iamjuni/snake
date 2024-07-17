"use strict";
const game = () => {
    // Board variables
    let blockSize = 25;
    let col = 16;
    let row = col;
    let board, context;

    // Set up game while window loads
    window.onload = function () {
        // Get board element and specify size
        board = document.getElementById("board");
        board.height = row * blockSize;
        board.width = col * blockSize;
        context = board.getContext("2d");

        // Create and append div elements to board as blocks
        for (let i = 0; i < 256; i++) {
            const div = document.createElement("div");
            board.appendChild(div);
        }

        // Genrate food
        generateFood();
        document.addEventListener("keyup", changeDirection); // Moving snake

        // Set snake speed
        setInterval(update, 1000 / 10);
    };

    // Game settings
    let gameOver = false;
    let restart = false;
    let speed = 0;

    // Snake
    let snakeX = blockSize * 5;
    let snakeY = blockSize * 5;
    let snake = [{ snakeX, snakeY }];

    // Food
    let foodX = 0;
    let foodY = 0;
    let apple = [foodX, foodY];

    function generateFood() {
        foodX = Math.floor(Math.random() * col) * blockSize;
        foodY = Math.floor(Math.random() * row) * blockSize;
        return apple;
    }

    // Update game
    function update() {
        // Set food color and position
        let appleColor = "#fc5d8d";

    }
};

game();
