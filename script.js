// Declare all variables here
var buttonStart = document.getElementById("start-btn");
// var buttonNext = document.getElementById("next-btn");
var quizLaunch = document.getElementById("start-quiz");
var questionContainer = document.getElementById("question-container");
var quizComplete = document.getElementById("quiz-complete");
var questionEl = document.getElementById("question-title");
var buttonChoices = document.getElementById("answer-buttons");
var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");
var btn3 = document.getElementById("btn-3");
var btn4 = document.getElementById("btn-4");

var highscoresLink = document.getElementById("score-leaderboard");
var timerEl = document.getElementById("time-spent");
var startTime = 75;

var scores = [];

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
    quizLaunch.classList.add("hide");
    questionContainer.classList.remove("hide");
    // buttonNext.classList.remove("hide");  
    showQuestion();    
} 

function showQuestion() {
    for(i = 0; i < questions.length; i++) {
        questionEl.innerText = questions[i].title;
        btn1.innerHTML = questions[i].choices[0];
        btn2.innerHTML = questions[i].choices[1];
        btn3.innerHTML = questions[i].choices[2];
        btn4.innerHTML = questions[i].choices[3];
    };
}

function selectAnswer() {
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
