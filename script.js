// Clicking the "Start Quiz" button presents the user with questions and initializes the timer


// Code for the timer - initialize at 75 sec and countdown to 0
var timerEl = document.getElementById("time-spent");

var startTime = 75;

function timerCountdown() {
    var timerInterval = setInterval(function() {
        startTime--;
        timerEl.textContent = startTime + " seconds remaining";

        if(startTime === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function sendMessage() {
    timerEl.textContent = "Time is up!";
}

// Code for displaying the questions - link to the questions.js object arrays somehow

// Code for the score calculation. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penal

// If time runs out OR all questions are answered, user is presented with their final score

// Player can enter initals to store score

// Final score stored in localStorage and displayed when user clicks on SCORE-LEADERBOARD