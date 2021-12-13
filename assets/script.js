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
    question: "This is a question",
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

// function for what happens on click of start quiz
function startQuiz() {
    mainPage.classList.add("hide");
    questionContainer.classList.remove("hide");
    currentQuestionIndex = 0;
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
  // resetState()
  questionEl.innerText = question.question
  questions.answers.forEach(answer, function() {
    button.innerText = answer.text;
    button.classList.add("btn");
  })


}

// button.addEventListener("click", selectAnswer())






