/**
 * script.js
 * 
 * This file contains the core game logic for the 2048 game. It includes functions for initializing the game board,
 * handling user inputs (keyboard and touch), managing game state (save and load), and updating the UI based on game
 * progress. The game logic includes movement handling, tile merging, and win/lose detection.
 */

document.addEventListener('DOMContentLoaded', () => {
    const gridDisplay = document.querySelector('#board');
    let squares = [];
    const width = 4; // Width of the grid
    let score = 0;

    /**
     * Initializes the game board by creating grid cells.
     * Each cell is represented as a div element with initial value set to 0.
     * It also sets ARIA roles for accessibility and triggers the generation of two initial tiles.
     */
    function createBoard() {
        for (let i = 0; i < width * width; i++) {
            const square = document.createElement('div');
            square.innerHTML = 0;
            square.setAttribute('role', 'gridcell');
            square.setAttribute('aria-label', 'Tile value ' + square.innerHTML);
            gridDisplay.appendChild(square);
            squares.push(square);
        }
        generate();
        generate();
    }

    // Generate a number randomly
    function generate() {
        let emptySquares = squares.filter(square => square.innerHTML == "0");
        if (emptySquares.length > 0) {
            let randomNumber = Math.floor(Math.random() * emptySquares.length);
            emptySquares[randomNumber].innerHTML = 2;
            checkForGameOver();
        }
    }

    // Refactored function to handle both left and right moves
    function move(direction) {
        const isRight = direction === 'right';
        for (let i = 0; i < 16; i++) {
            if (i % 4 === 0) {
                let totalOne = squares[i].innerHTML;
                let totalTwo = squares[i + 1].innerHTML;
                let totalThree = squares[i + 2].innerHTML;
                let totalFour = squares[i + 3].innerHTML;
                let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];

                let filteredRow = row.filter(num => num);
                let missing = 4 - filteredRow.length;
                let zeros = Array(missing).fill(0);
                let newRow = isRight ? zeros.concat(filteredRow) : filteredRow.concat(zeros);

                squares[i].innerHTML = newRow[0];
                squares[i + 1].innerHTML = newRow[1];
                squares[i + 2].innerHTML = newRow[2];
                squares[i + 3].innerHTML = newRow[3];
            }
        }
    }

    // Swipe Right
    function moveRight() {
        move('right');
    }

    // Swipe Left
    function moveLeft() {
        move('left');
    }

    // Assign Keycodes
    function control(e) {
        switch(e.keyCode) {
            case 37: // Left arrow key
                moveLeft();
                break;
            case 38: // Up arrow key
                moveUp();
                break;
            case 39: // Right arrow key
                moveRight();
                break;
            case 40: // Down arrow key
                moveDown();
                break;
        }
    }
    document.addEventListener('keyup', control);

    // Check for the number 2048 in the squares to win
    function checkForWin() {
        for (let i = 0; i < squares.length; i++) {
            if (squares[i].innerHTML == 2048) {
                alert('You WIN');
                document.removeEventListener('keyup', control);
            }
        }
    }

    // Check if there are no zeros on the board to lose
    function checkForGameOver() {
        let zeros = 0;
        for (let i = 0; i < squares.length; i++) {
            if (squares[i].innerHTML == 0) {
                zeros++;
            }
        }
        if (zeros === 0) {
            alert('You LOSE');
            document.removeEventListener('keyup', control);
        }
    }

    createBoard();
    setupTouchControls();
    const savedState = loadGameState();
    if (savedState) {
        restoreGame(savedState);
    }
    document.getElementById('best-score').innerText = bestScore;
});

// Add touch event listeners for mobile control
function setupTouchControls() {
    const gameContainer = document.getElementById('game-container');
    gameContainer.setAttribute('aria-label', 'Swipe area for controlling the game');

    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    gameContainer.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, false);

    gameContainer.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, false);

    function handleSwipe() {
        const xDiff = touchEndX - touchStartX;
        const yDiff = touchEndY - touchStartY;
        const minSwipeDistance = 30; // Minimum distance for a swipe to be recognized

        if (Math.abs(xDiff) > Math.abs(yDiff)) { // Most significant.
            if (Math.abs(xDiff) > minSwipeDistance) {
                if (xDiff > 0) {
                    moveRight(); // Right swipe
                } else {
                    moveLeft(); // Left swipe
                }
            }
        } else {
            if (Math.abs(yDiff) > minSwipeDistance) {
                if (yDiff > 0) {
                    moveDown(); // Down swipe
                } else {
                    moveUp(); // Up swipe
                }
            }
        }
    }
}
//Responsive Controls:
//create on screen clickable buttons so users can control the game
    document.getElementById('up-button').addEventListener('click', function() {
        moveUp();
    });
    document.getElementById('down-button').addEventListener('click', function() {
        moveDown();
    });
    document.getElementById('left-button').addEventListener('click', function() {
        moveLeft();
    });
    document.getElementById('right-button').addEventListener('click', function() {
        moveRight();
    });


//State Persistence:
// Function to save game state
function saveGameState(state) {
    try {
        localStorage.setItem('gameState', JSON.stringify(state));
    } catch (e) {
        console.error('Failed to save game state:', e);
    }
}

// Function to load game state
function loadGameState() {
    try {
        const state = localStorage.getItem('gameState');
        return state ? JSON.parse(state) : null;
    } catch (e) {
        console.error('Failed to load game state:', e);
        return null;
    }
}

// Example usage when the game state changes
document.addEventListener('gameStateChange', function(event) {
    saveGameState(event.detail.state);
});

// Example usage on game start
document.addEventListener('DOMContentLoaded', function() {
    const savedState = loadGameState();
    if (savedState) {
        // Restore the game to the saved state
        restoreGame(savedState);
    }
});

//Score Display:
//display the current score and the best score on the screen
let currentScore = 0;
let bestScore = parseInt(localStorage.getItem('bestScore')) || 0;

// Function to update the score display
function updateScore(newPoints) {
    currentScore += newPoints;
    document.getElementById('score').innerText = currentScore;
    updateBestScore();
}

// Function to update the best score
function updateBestScore() {
    if (currentScore > bestScore) {
        bestScore = currentScore;
        localStorage.setItem('bestScore', bestScore);
        document.getElementById('best-score').innerText = bestScore;
    }
}

// Example usage when tiles merge
function mergeTiles(tile1, tile2) {
    const combinedValue = parseInt(tile1.innerHTML) + parseInt(tile2.innerHTML);
    updateScore(combinedValue); // Add points based on tile values
    // Other merging logic...
}

// Reset score when starting a new game
function resetScore() {
    currentScore = 0;
    document.getElementById('score').innerText = currentScore;
}
function restoreGame(savedState) {
    // Assuming savedState contains an array of values for the grid and the current score
    squares.forEach((square, index) => {
        square.innerHTML = savedState.grid[index];
    });
    currentScore = savedState.score;
    document.getElementById('score').innerText = currentScore;
    // Additional logic to restore other parts of the game state if necessary
}
