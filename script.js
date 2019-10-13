// Declare all variables here
var buttonStart = document.getElementById("start-btn");
// var buttonNext = document.getElementById("next-btn");
var quizContainer = document.getElementById("quiz-area");
var quizLaunch = document.getElementById("start-quiz");
var questionContainer = document.getElementById("question-container");
var quizComplete = document.getElementById("quiz-complete");
var questionEl = document.getElementById("question-title");
var buttonChoices = document.getElementById("answer-buttons");
var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");
var btn3 = document.getElementById("btn-3");
var btn4 = document.getElementById("btn-4");
var answerDisplay = document.getElementById("answers-display");
var endQuizScreen = document.getElementById("quiz-end-title");
var submitScore = document.getElementById("submit-initials");
var highscoresDisplay = document.getElementById("highscores");
var leaderboardInitials = document.getElementById("initials-div");
var leaderboardScore = document.getElementById("score-div");

var returnToQuiz = document.getElementById("return-quiz");
var highscoresLink = document.getElementById("score-leaderboard");
var timerEl = document.getElementById("time-spent");
var startTime = 75;

var highscores = [];
var scoreNames = [];

// var questionsIndex = 0;

// Set ending timer = to score

// Code for the timer - initialize at 75 sec and countdown to 0
function timerCountdown() {
    var timerInterval = setInterval(function() {
        startTime--;
        timerEl.textContent = startTime + " seconds remaining";

        if(startTime === 0 | qIndex === questions.length) {
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

var qIndex = 0;

function showQuestion() {
    if (qIndex === questions.length | startTime === 0) {
        endQuizScreen.classList.remove("hide");
        questionContainer.classList.add("hide");
        var score = startTime;
        alert("Your score is " + score);
        highscores.push(score);
        // console.log(highscores);
        
        // buttonNext.classList.add("hide");
    } else {
        questionEl.innerText = questions[qIndex].title;
        btn1.innerHTML = questions[qIndex].choices[0];
        btn2.innerHTML = questions[qIndex].choices[1];
        btn3.innerHTML = questions[qIndex].choices[2];
        btn4.innerHTML = questions[qIndex].choices[3];
    }
}

function selectAnswer() {

    if (event.target.textContent === questions[qIndex].answer) {
        alert("That's correct!");
    }  else {
        alert("That's incorrect!");
        startTime = startTime - 10;
    } 
// // Evaluate if the innerHTML of the clicked button matches answer

// // Display CORRECT

// // Else subtract 10 secs from timer

// // Display INCORRECT

// // Points value is pushed to scores array

// // Load next question
}

// If time runs out OR all questions are answered, user is presented with their final score

// Player can enter initals to store score

// Final score stored in localStorage to be displayed when SCORE-LEADERBOARD is clicked

// function viewHighscores() {


// }

// Clicking the "Start Quiz" button presents the user with questions and initializes the timer

buttonStart.addEventListener("click", function() {
    timerCountdown();
    launchQuiz();
});

// Event listener for when a user clicks on their answer
    // Call selectAnswer()

buttonChoices.addEventListener("click", function() {
    selectAnswer();
    qIndex++;
    showQuestion();

});

// buttonNext.addEventListener("click", function() {

// });

submitScore.addEventListener("click", function() {
    var scoreInitials = document.getElementById("enter-intials").value;

    var playerScore = {
        initials: [scoreInitials],
        score: [highscores]
    }

    console.log(playerScore);

    function populateStorage () {
        localStorage.setItem("player score", JSON.stringify(playerScore));
        localStorage.setItem("initials", JSON.stringify(scoreInitials));
    }

    // scoreNames.push(scoreInitials);
    // console.log(highscores);
    // console.log(scoreNames); 
    // function populateStorage() {
    //     localStorage.setItem("score", JSON.stringify(highscores));
    //     localStorage.setItem("initials", JSON.stringify(scoreNames));
    // }
    populateStorage(playerScore);
})

// Event listener for when a user clicks on SCORE-LEADERBOARD

highscoresLink.addEventListener("click", function() {

    highscoresDisplay.classList.toggle("hide");
    quizLaunch.classList.add("hide");
    endQuizScreen.classList.add("hide");
    highscoresLink.classList.toggle("hide");
    returnToQuiz.classList.toggle("hide");

    var scoreList = JSON.parse(localStorage.getItem("playerScore"));
    
    leaderboardInitials.append.textContent = scoreList.initials;
    leaderboardScore.append.textContent = scoreList.highscore;

})

returnToQuiz.addEventListener("click", function () {
    highscoresLink.classList.toggle("hide");
    returnToQuiz.classList.toggle("hide");
    quizLaunch.classList.toggle("hide");
    highscoresDisplay.classList.toggle("hide");
})

