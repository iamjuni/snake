"use strict";
const game = () => {
    // Board variables
    let blockSize = 25;
    let col = 16;
    let row = col;
    let board;

    // Set up game while window loads
    window.onload = function () {
        // Get board element and specify size
        board = document.getElementById("board");
        board.height = row * blockSize;
        board.width = col * blockSize;

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
        // Create food element with class of food
        let food = document.createElement("div");
        food.className = "food"; 
        food.style.height = `${blockSize}px`;
        food.style.width = `${blockSize}px`;
        food.style.backgroundColor = "#fc5d8d";
        board.appendChild(food);
    
        // Generate random coordinates for food
        foodX = Math.floor(Math.random() * col) * blockSize;
        foodY = Math.floor(Math.random() * row) * blockSize;
    
        // Position food
        food.style.position = "fixed";
        food.style.top = `${foodY}px`;
        food.style.left = `${foodX}px`;
    
        // Return food
        return apple;
    }

    // Moving snake
    let x, y;

    function changeDirection(key) {
        switch(key) {
            case "ArrowUp" && "W":
                x = 0;
                y -= 1;
                break;
            
            case "ArrowDown" && "S":
                x = 0;
                y += 1;
                break;
            
            case "ArrowRight" && "D":
                x += 1;
                y = 0;
                break;

            case "ArrowLeft" && "A":
                x -= 1;
                y = 0;
                break;
        }
    }

    // Update game
    function update(){}
};

game();
