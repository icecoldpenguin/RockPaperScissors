let userchoice;
let compchoice;
let comppoints = 0;
let userpoints = 0;
const arr = ["rock", "paper", "scissors"];

function checkWinner() {
    let winner;

    if (userpoints === 10) {
        winner = `You won the game! 🎊`;
        document.body.style.backgroundColor = "hsl(136, 71%, 48%)";
    } else {
        winner = `Computer won the game. 🖥️`;
        document.body.style.backgroundColor = "hsl(0, 71.3%, 47.8%)";
    }

    document.getElementById("result").textContent = `${winner} Game has ended! Thank you for playing. (Reload to play again.)`;

    // Disable all buttons
    document.getElementById("button1").disabled = true;
    document.getElementById("button2").disabled = true;
    document.getElementById("button3").disabled = true;
}

function updateScore() {
    document.getElementById("cp").textContent = `Computer: ${comppoints} pts`;
    document.getElementById("up").textContent = `User: ${userpoints} pts`;
}

document.getElementById("button1").onclick = function() {
    compchoice = arr[Math.floor(Math.random() * 3)];
    console.log(compchoice);

    if (compchoice === "rock") {
        document.getElementById("result").textContent = "You both selected Rock 🪨. It's a tie!";
    } else if (compchoice === "paper") {
        document.getElementById("result").textContent = "You selected rock 🪨, computer selected paper 📃. Computer wins 🖥️.";
        comppoints++;
    } else {
        document.getElementById("result").textContent = "You selected rock 🪨, computer selected scissors ✂️. You win!";
        userpoints++;
    }
    updateScore();
    if (userpoints === 10 || comppoints === 10) {
        checkWinner();
    }
}

document.getElementById("button2").onclick = function() {
    compchoice = arr[Math.floor(Math.random() * 3)];
    console.log(compchoice);

    if (compchoice === "rock") {
        document.getElementById("result").textContent = "You selected paper 📃, computer selected rock 🪨. You win!";
        userpoints++;
    } else if (compchoice === "paper") {
        document.getElementById("result").textContent = "You both selected paper 📃. It's a tie!";
    } else {
        document.getElementById("result").textContent = "You selected paper 📃, computer selected scissors ✂️. Computer wins 🖥️.";
        comppoints++;
    }
    updateScore();
    if (userpoints === 10 || comppoints === 10) {
        checkWinner();
    }
}

document.getElementById("button3").onclick = function() {
    compchoice = arr[Math.floor(Math.random() * 3)];
    console.log(compchoice);

    if (compchoice === "rock") {
        document.getElementById("result").textContent = "You selected scissors ✂️, computer selected rock 🪨. Computer wins 🖥️.";
        comppoints++;
    } else if (compchoice === "paper") {
        document.getElementById("result").textContent = "You selected scissors ✂️, computer selected paper 📃. You win!";
        userpoints++;
    } else {
        document.getElementById("result").textContent = "You both selected scissors ✂️. It's a tie!";
    }
    updateScore();
    if (userpoints === 10 || comppoints === 10) {
        checkWinner();
    }
}