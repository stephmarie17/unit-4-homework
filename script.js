// Declare all variables here
var buttonStart = document.getElementById("start");
var quizLaunch = document.getElementById("start-quiz");
var questionOne = document.getElementById("question-1");
var questionTwo = document.getElementById("question-2");
var questionThree = document.getElementById("question-3");
var questionFour = document.getElementById("question-3");
var quizComplete = document.getElementById("quiz-complete");

var highscoresLink = document.getElementById("score-leaderboard");
var timerEl = document.getElementById("time-spent");
var startTime = 75;

// Code for the timer - initialize at 75 sec and countdown to 0
function timerCountdown() {
    var timerInterval = setInterval(function() {
        startTime--;
        timerEl.textContent = startTime + " seconds remaining";

        if(startTime === 0) {
            clearInterval(timerInterval);
            sendMessage();
            return;
        }
    }, 1000);
}

function sendMessage() {
    timerEl.textContent = "Time is up!";
}

// Code for displaying the questions - link to the questions.js object arrays somehow
function launchQuiz() {
    quizLaunch.style.display = "none";
    questionOne.style.display = "block";
}    

// Code for the score calculation. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalized
    // Use if/else statements to determine if time will be penalized

// If time runs out OR all questions are answered, user is presented with their final score

// Player can enter initals to store score

// Final score stored in localStorage and displayed when user clicks on SCORE-LEADERBOARD

// Clicking the "Start Quiz" button presents the user with questions and initializes the timer

buttonStart.addEventListener("click", function() {
    timerCountdown();
    launchQuiz();
});