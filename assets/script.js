var buttonEl = document.querySelector("#buttons");
var questionEl = document.querySelector("#question");
var progressEl = document.querySelector("#progress");
var whatQuestionEl = document.querySelector("#whatQuestion");
var timerEl = document.querySelector("#timer");
var scoreEl = document.querySelector("#score");
var nameFormEl = document.querySelector("#name-form");
var highScores = [];
var highTime = [];
var highName = [];

//Questions object
var myQuestions = [
    {
        question: "Who invented JavaScript?",
        answers: {
            1: "Douglas Crockford",
            2: "Sheryl Sandberg",
            3: "Brendan Eich"
        },
        correctAnswer: "3"
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
            1: "Node.js",
            2: "TypeScript",
            3: "npm"
        },
        correctAnswer: "3"
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: {
            1: "Angular",
            2: "jQuery",
            3: "RequireJS",
            4: "ESLint"
        },
        correctAnswer: "4"
    }
];
var yourScore = 0;
var c = 0;
var t;
var timer_is_on = 0;
var secondsLeft = 60;

//Start Button
var startButton = document.createElement("button");
startButton.textContent = "Start";
questionEl.textContent = "Press start to begin quiz.";
whatQuestionEl.textContent = "Quiz";
buttonEl.appendChild(startButton);

//Checks localstorage for highscores
init();

//Timer starts after start button is hit
function timedTimer() {
    if (secondsLeft === 0) {
        alert("Times up");
        clearTimeout(t);
        endQuiz();
    } else {
        secondsLeft--;
        timerEl.textContent = secondsLeft;
    }
    t = setTimeout(timedTimer, 1000);
}

//Start timer func
function startTimer() {
    if (!timer_is_on) {
        timer_is_on = 1;
        timedTimer();
    }
}

//Quiz start and Question 1
function startQuiz() {
    startTimer();
    questionEl.textContent = myQuestions[0].question;
    startButton.remove();
    whatQuestionEl.textContent = "Question 1";
    for (var i = 1; i < 4; i++) {
        var choicesEl = document.createElement("button");
        choicesEl.textContent = myQuestions[0].answers[i];
        choicesEl.id = "button" + i;
        buttonEl.appendChild(choicesEl);
    }
    var choice1 = document.getElementById("button1");
    var choice2 = document.getElementById("button2");
    var choice3 = document.getElementById("button3");

    choice1.addEventListener("click", function () {
        progressEl.textContent = "Wrong Answer";
        secondsLeft = secondsLeft - 5;
        choice1.remove();
        choice2.remove();
        choice3.remove();
        secondQuestion();
    });
    choice2.addEventListener("click", function () {
        progressEl.textContent = "Wrong Answer";
        secondsLeft = secondsLeft - 5;
        choice1.remove();
        choice2.remove();
        choice3.remove();
        secondQuestion();
    });
    choice3.addEventListener("click", function () {
        progressEl.textContent = "Correct Answer";
        yourScore++;
        choice1.remove();
        choice2.remove();
        choice3.remove();
        secondQuestion();
    });
}

//Second Question
function secondQuestion() {
    questionEl.textContent = myQuestions[1].question;
    startButton.remove();

    whatQuestionEl.textContent = "Question 2";
    for (var i = 1; i < 4; i++) {
        var choicesEl = document.createElement("button");
        choicesEl.textContent = myQuestions[1].answers[i];
        choicesEl.id = "button" + i;
        buttonEl.appendChild(choicesEl);
    }
    var choice1 = document.getElementById("button1");
    var choice2 = document.getElementById("button2");
    var choice3 = document.getElementById("button3");

    choice1.addEventListener("click", function () {
        progressEl.textContent = "Wrong Answer";
        secondsLeft = secondsLeft - 5;
        choice1.remove();
        choice2.remove();
        choice3.remove();
        thirdQuestion();
    });
    choice2.addEventListener("click", function () {
        progressEl.textContent = "Wrong Answer";
        secondsLeft = secondsLeft - 5;
        choice1.remove();
        choice2.remove();
        choice3.remove();
        thirdQuestion();
    });
    choice3.addEventListener("click", function () {
        progressEl.textContent = "Correct Answer";
        yourScore++
        choice1.remove();
        choice2.remove();
        choice3.remove();
        thirdQuestion();
    });
}

//Third Question
function thirdQuestion() {
    questionEl.textContent = myQuestions[2].question;
    startButton.remove();

    whatQuestionEl.textContent = "Question 3";
    for (var i = 1; i < 5; i++) {
        var choicesEl = document.createElement("button");
        choicesEl.textContent = myQuestions[2].answers[i];
        choicesEl.id = "button" + i;
        buttonEl.appendChild(choicesEl);
    }
    var choice1 = document.getElementById("button1");
    var choice2 = document.getElementById("button2");
    var choice3 = document.getElementById("button3");
    var choice4 = document.getElementById("button4");

    choice1.addEventListener("click", function () {
        progressEl.textContent = "Wrong Answer";
        secondsLeft = secondsLeft - 5;
        choice1.remove();
        choice2.remove();
        choice3.remove();
        choice4.remove();
        endQuiz();
    });
    choice2.addEventListener("click", function () {
        progressEl.textContent = "Wrong Answer";
        secondsLeft = secondsLeft - 5;
        choice1.remove();
        choice2.remove();
        choice3.remove();
        choice4.remove();
        endQuiz();
    });
    choice3.addEventListener("click", function () {
        progressEl.textContent = "Wrong Answer";
        secondsLeft = secondsLeft - 5;
        choice1.remove();
        choice2.remove();
        choice3.remove();
        choice4.remove();
        endQuiz();
    });
    choice4.addEventListener("click", function () {
        progressEl.textContent = "Correct Answer";
        yourScore++
        choice1.remove();
        choice2.remove();
        choice3.remove();
        choice4.remove();
        endQuiz();
    });
}

//End of quiz with highscore adding
function endQuiz() {
    clearTimeout(t);
    secondsLeft = 60 - secondsLeft;
    yourScore = yourScore / 3;
    yourScore = yourScore * 100;
    yourScore = Math.round(yourScore);
    questionEl.textContent = "Your score: " + yourScore + " In " + secondsLeft + " seconds!";
    if (yourScore === 3) {
        progressEl.textContent = "Great job!";
    } else if (yourScore === 2) {
        progressEl.textContent = "Good job!";
    } else {
        progressEl.textContent = "Study more!";
    }
    var nameInput = document.createElement("input");
    nameInput.id = "names";
    nameFormEl.appendChild(nameInput);

    nameFormEl.addEventListener("submit", function (event) {
        event.preventDefault();
    
        var scoreText = nameInput.value.trim();
    
        if (scoreText === "") {
            return;
        }
    
        highName.push(scoreText);
        highScores.push(yourScore);
        highTime.push(secondsLeft);

        nameInput.value = "";
    
        storeScores();
        renderHighscore();
        nameInput.remove();
    });
}

//Builds highscore board
function renderHighscore() {
    scoreEl.textContent = "";
    questionEl.textContent = "Highscores:";

    for (var i = 0; i < highName.length; i++) {
        var highNames = highName[i];
        var highScore = highScores[i];
        var highTimes = highTime[i];

        var li = document.createElement("li");
        li.textContent = highNames + ": " + highScore + " in " + highTimes + " seconds";
        scoreEl.appendChild(li);
    }
    var clearButton = document.createElement("button");
    clearButton.textContent = "Clear";
    clearButton.id = "clear-button";
    buttonEl.appendChild(clearButton);
    clearButton.addEventListener("click", clearScores);
}

//Checking localstorage
function init() {
    var storedNames = JSON.parse(localStorage.getItem("highName"));
    var storedScores = JSON.parse(localStorage.getItem("highScore"));
    var storedTimes = JSON.parse(localStorage.getItem("highTime"));

    if (storedNames !== null) {
        highName = storedNames;
    }
    if (storedScores !== null) {
        highScores = storedScores;
    }
    if (storedTimes !== null) {
        highTime = storedTimes;
    }

}

//Stores scores into the local storage
function storeScores() {
    localStorage.setItem("highName", JSON.stringify(highName));
    localStorage.setItem("highScore", JSON.stringify(highScores));
    localStorage.setItem("highTime", JSON.stringify(highTime));
}

//Clears score board
function clearScores() {
    localStorage.clear();
    scoreEl.textContent = "";
}

//Starts quiz
startButton.addEventListener("click", startQuiz);