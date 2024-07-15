"use strict";
const food = () => {
    let foodX = 0;
    let foodY = 0;

    function generateFood() {
        foodX = Math.floor(Math.random() * col) * blockSize; 
        foodY = Math.floor(Math.random() * row) * blockSize; 
    }
}

export { food };