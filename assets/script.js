var startButton = document.querySelector(".start-button");
var firstPage = document.querySelector("#first-question-page");
var mainPage = document.querySelector("#main-page");
var mode = "active"

startButton.addEventListener ("click", function() {
    if (mode === "active") {
    mainPage.setAttribute("class", "hidden")
    }
    else {
        mode = "hidden"
        firstPage.setAttribute("class", "active")
    }
})






// Time function will be placed inside on click function for start button
// var timeEl = document.querySelector(".time")
// var secondsLeft = 60;

// function setTime()
// var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left"

//     if(secondsLeft === 0) {
//         clearInterval(timerInterval);
//         initialsPage()
//     }
// }, 1000)

// function initialsPage() {
//     initialsPage.style.display = "block";
//     document.body.append(initialsPage);   
// }

// setTime();