"use strict";
const game = () => {
    let blockSize = 25;
    let col = 16;
    let row = 16;

    let gameOver = false;
    let speed = 0;
    let board;

    window.onload = function () {
        board = document.getElementById("board");
        board.height = row * blockSize;
        board.width = col * blockSize;

        const style = document.createElement("style");
        const head = document.head;
        const styleRules = [board.height, board.width];
        let boardStyle = `board { height: ${styleRules[0]}px; \nwidth: ${styleRules[1]}px; \n}`;

        head.appendChild(style);
        style.append(boardStyle);

        const container = document.getElementById("board");
        const div = document.createElement("div");
        for (let i = 0; i < 257; i++) {
            container.appendChild(div);
        }
    };
};

game();
