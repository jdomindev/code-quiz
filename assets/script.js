var questions = [
  {
    question: "This is a question",
    answers: [
      { text: "answer1", correct: true },
      { text: "answer2", correct: false },
      { text: "answer3", correct: false },
      { text: "answer4", correct: false},
    ]
  },
  {
    question: "This is a question2",
    answers: [
      { text: "answer1", correct: true },
      { text: "answer2", correct: false },
      { text: "answer3", correct: false },
      { text: "answer4", correct: false},
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
var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time Left: " + secondsLeft + " seconds";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      setInitialsPage();
    }
  }, 1000);
}

function setInitialsPage() {
  var initialsPage = document.querySelector("#initials-page")
  initialsPage.classList.remove("hide");
  // somehow hide page based on current page index
}

var questionEl = document.querySelector("#question");
var answerButtons = document.querySelector("#answer-buttons");
var button = document.createElement("button");

// function to set next question to values in array of questions
function setNextQuestion() {
  resetState()
  questionEl.innerText = questions[currentQuestion].question
  questions.answers.forEach(answers, function() {
    button.innerText = answers.text;
    button.classList.add("btn");
    if (answers.correct) {
      button.dataset.correct = answers.correct;
    }
    button.addEventListener("click", selectAnswer())
    answerButtons.appendChild(button)
  })
}

var nextButton = document.querySelector("#next-button")

// function to hide next button after answer selected and removes answer buttons from previous question
function resetState() {
  nextButton.classList.add("hide")
  while (answerButtons.firstChild) {
    answerButtons.firstChild.removeChild(answerButtons.firstChild)
  }
}

function selectAnswer() {}






