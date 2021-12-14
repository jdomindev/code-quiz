var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: [
      { text: "strings", correct: false },
      { text: "booleans", correct: false },
      { text: "alerts", correct: true },
      { text: "numbers", correct: false},
    ]
  },
  {
    question: "The condition in an if / else statement is enclosed within ___.",
    answers: [
      { text: "quotes", correct: false },
      { text: "curly brackets", correct: false },
      { text: "parentheses", correct: true },
      { text: "square brackets", correct: false},
    ]
  }
];

// Look to activity 3 - #21-24 for checking if answer is right or wrong

// buttonOne.addEventListener("click", checkAnswer);
// function checkAnswer() {
//   if (questions[0].answers[i] === questions[0].correctAnswer) {
//     console.log(Correct);
//   } else {
//     console.log(incorrect);
//   }
// }


var startButton = document.querySelector(".start-button");
var mainPage = document.querySelector("#main-page");
var questionContainer = document.querySelector(".question-container")
var currentQuestion = 0

// function for what happens on click of start quiz
function startQuiz() {
    mainPage.classList.add("hide");
    questionContainer.classList.remove("hide");
    setNextQuestion();
}

startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", setTime);

// Timer function
var timeEl = document.querySelector(".time");
var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time Left: " + secondsLeft + " seconds";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      setInitialsPage();
      // set OR in condition for if last question reached
    }
  }, 1000);
}

var initialsPage = document.querySelector("#initials-page")
var score = document.querySelector(".score")

function setInitialsPage() {
  initialsPage.classList.remove("hide");
  questionContainer.classList.add("hide");
  score.innerText = "Your final score was " + secondsLeft;
}

var highScoreButton = document.querySelector("#high-score-button");

highScoreButton.addEventListener("click", showHighScores);

var highScorePage = document.querySelector("#high-score-page");

function showHighScores() {
  initialsPage.classList.add("hide");
  highScorePage.classList.remove("hide");
}

var questionEl = document.querySelector("#question");
var answerButtons = document.querySelector("#answer-buttons");
var button = document.createElement("button");

// function to set next question to values in array of questions
function setNextQuestion() {
  // resetState()
  questionEl.innerText = questions[currentQuestion].question
  questions.answers.forEach(answers, function(){
    var button = document.createElement("button");
    button.innerText = answers.text;
    button.classList.add("btn");
  })
    
  }
  // button.addEventListener("click", selectAnswer())
  // answerButtons.appendChild(button)

  // answerButtons.innerText = questions[currentQuestion].answers.text;
  // button.classList.add("btn");

   
    // if (answers.correct) {
    //   button.dataset.correct = answers.correct;
    // }
    
    

var nextButton = document.querySelector("#next-button")

// function to hide next button after answer selected and removes answer buttons from previous question
// function resetState() {
//   nextButton.classList.add("hide")
//   while (answerButtons.firstChild) {
//     answerButtons.firstChild.removeChild(answerButtons.firstChild)
//   }
// }

// function selectAnswer(event) {
//   var selectedAnswer = event.target;
//   var correct = selectedAnswer.dataset.correct;
//   setStatusClass(document.body, correct)
//   Array.from(answerButtons.children).forEach(button, function(){
//     setStatusClass(button, button.dataset.correct)
//   })
// }

// function setStatusClass(element,correct) {
//   clearStatusClass(element)
//   if (correct) {
//     element.textContent("correct")
//   }else {
//     element.textContent("wrong")
//     // add something to subtract time
//   }
// }

// function clearStatusClass(element) {
//   element.textContent.remove("correct")
//   element.textContent.remove("wrong")
// }





