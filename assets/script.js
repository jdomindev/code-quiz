var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: [
      { text: "strings", correct: false },
      { text: "booleans", correct: false },
      { text: "alerts", correct: true },
      { text: "numbers", correct: false },
    ],
  },
  {
    question: "The condition in an if / else statement is enclosed within ___.",
    answers: [
      { text: "quotes", correct: false },
      { text: "curly brackets", correct: false },
      { text: "parentheses", correct: true },
      { text: "square brackets", correct: false },
    ],
  },
  {
    question: "Arrays in JavaScript can be used to store ___.",
    answers: [
      { text: "numbers and strings", correct: false },
      { text: "other arrays", correct: false },
      { text: "booleans", correct: false },
      { text: "all of the above", correct: true },
    ],
  },
  {
    question: "String values must be enclosed within ___ when being assigned to variables.",
    answers: [
      { text: "commas", correct: false },
      { text: "curly brackets", correct: false },
      { text: "quotes", correct: true },
      { text: "parentheses", correct: false },
    ],
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      { text: "JavaScript", correct: false },
      { text: "terminal/bash", correct: false },
      { text: "for loops", correct: false },
      { text: "console.log", correct: true },
    ],
  }
];

var startButton = document.querySelector(".start-button");
var mainPage = document.querySelector("#main-page");
var questionContainer = document.querySelector(".question-container");
var currentQuestion = 0;

// function for what happens on click of start quiz
function startQuiz() {
  // hides main page and shows the question container
  mainPage.classList.add("hide");
  questionContainer.classList.remove("hide");
  setNextQuestion();
}

startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", setTime);

// Timer function
var timeEl = document.querySelector(".time");
var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time Left: " + secondsLeft + " seconds";

    if (secondsLeft <= 0 || currentQuestion > questions.length - 1) {
      clearInterval(timerInterval);
      setInitialsPage();
    }
  }, 1000);
}
// 
var questionEl = document.querySelector("#question");
var answerButtons = document.querySelector("#answer-buttons");

function findCorrectAnswer(answer) {
  return answer.correct
  }

function selectAnswer(event) {
  var selectedAnswer = event.target.innerText;
  console.log(event.target);
 
  var correctAnswer = questions[currentQuestion].answers.find(findCorrectAnswer)
  console.log(correctAnswer);
  if (selectedAnswer === correctAnswer.text) {
  window.alert("Correct!")
  }else {
  window.alert("Wrong")
  // subtracts time when wrong
  secondsLeft = secondsLeft - 10
  }
  // removes answer buttons from html after answer is selected
  answerButtons.innerHTML = ""
  // makes sure next question in array is set
  currentQuestion++;
  setNextQuestion();
}

// function to set next question to values in array of questions
function setNextQuestion() {
  // sets which question + answer set will appear
  for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
  var answerButton = document.createElement("button");
  answerButton.setAttribute("class", "btn");
  answerButton.addEventListener("click", function(event){selectAnswer(event)});
  questionEl.innerText = questions[currentQuestion].question;
  answerButton.innerText = questions[currentQuestion].answers[i].text;
  answerButtons.appendChild(answerButton);
  }
};

var initialsPage = document.querySelector("#initials-page");
var score = document.querySelector(".score");

function setInitialsPage() {
  initialsPage.classList.remove("hide");
  questionContainer.classList.add("hide");
  score.innerText = "Your final score was " + secondsLeft;
}

var initialsButton = document.querySelector("#submit-initials");

initialsButton.addEventListener("click", submitInitials);

var highScorePage = document.querySelector("#high-score-page");
var allUserScores = []

function submitInitials() {
  var initials = document.querySelector(".initials").value;
  if (initials === "") {
    window.alert("Please enter your name/initials");
  } else {
    // hide initials page and go to high-score page
    initialsPage.classList.add("hide");
    highScorePage.classList.remove("hide");
    // value of score is secondsLeft
    // grab value of initials input + score
    
    var userScore = {initials: initials, score: secondsLeft};
    allUserScores.unshift(userScore);
  // set values to local storage
    localStorage.setItem("allUserScores", JSON.stringify(allUserScores));
    getInitials();
  }
}

function getInitials() {
  // retrieve values from local storage
    var lastEntry = JSON.parse(localStorage.getItem("allUserScores"));
// Appends values from storage into list 
    var scoreList = document.querySelector("#score-list")
    scoreList.textContent = lastEntry[0].initials + " -- " + lastEntry[0].score;
}

// event listener for clear button to clear scores
var clearButton = document.querySelector("#clear-button")

clearButton.addEventListener("click", function(){
  allUserScores.innerText = ""
});

// function to view scores from main page or while on question container
var viewScores = document.querySelector("#view-scores")

viewScores.addEventListener("click", function(){
  mainPage.classList.add("hide");
  questionContainer.classList.add("hide");
  highScorePage.classList.remove("hide");
  })

// function to return to main page from highscores page
var homeButton = document.querySelector("#return-home")

homeButton.addEventListener("click", function(){
  highScorePage.classList.add("hide");
  mainPage.classList.remove("hide");
  secondsLeft = 60;
  currentQuestion = 0;
  })

