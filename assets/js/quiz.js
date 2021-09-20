// access main element in DOM using document.main
var containerEl = document.querySelector("#container");
var questionContainerEl = document.querySelector("#question-container");
var questionEl = document.querySelector("#question");
var answerButtonsBoxEl = document.querySelector("#answer-buttons-box")
var controlsEl = document.querySelector(".controls");
var timerEl = document.querySelector("#timer");
var correctnessDisplayEl = document.querySelector("#correctness");


var nextButton = document.querySelector("#next-button")


var buttonChoice1 = document.querySelector("#button-choice-1")
var buttonChoice2 = document.querySelector("#button-choice-2")
var buttonChoice3 = document.querySelector("#button-choice-3")
var buttonChoice4 = document.querySelector("#button-choice-4")

var score = 0;

var countdown = 75;

var currentQuestionNumber = 0 
var correctAnswer = ""
var wrongAnswer = ""



var countdownFunc = function () {
  var countdown = 75;

  var timeInterval = setInterval(function () {
    if (countdown === 0) {
      timer.textContent = "";
      clearInterval(timeInterval);
      // (add) link to high score page below...
    } else {
      timer.textContent = "Time: " + countdown;
      countdown--;
    }
  }, 1000);
};



// array of questions
var questionsList = [
  {
    question: "What is Danny's favorite color?",
    answers: ["Blue", "Yellow","Green", "Red"], 
    correctAnswer: "Green"
  },
  {
    question: "What is Danny's favorite number?",
    answers: [ "55", "4", "108", "42"],
    correctAnswer: "4"
  },
  {
    question: "What is Danny's favorite city?",
    answers: [ "Ljubljana", "Chicago", "Madrid", "Tampa"],
    correctAnswer: "Ljubljana"
  },
];


function resetPage() {
  nextButton.classList.add('hide');
  // wrongAnswer.textContent = "";
  // correctAnswer.textContent = "";
}


function prepareQuestion2() {
  nextButton.classList.remove("hide")
  controlsEl.appendChild(nextButton)
  nextButton.addEventListener("click", question2Func) 
}

function prepareQuestion3() {
  nextButton.classList.remove("hide")
  controlsEl.appendChild(nextButton)
  nextButton.addEventListener("click", question3Func) 
}

function prepareHSPage() {
  console.log(score)
  localStorage.setItem("score", score)
  nextButton.classList.remove("hide")
  nextButton.setAttribute("style", "width: 10%; padding: 2px 5px")
  controlsEl.appendChild(nextButton)
  nextButton.textContent = "Submit High Score"
  nextButton.addEventListener("click", function() {
    window.location.href="./high-scores.html"
    score = 0;
  }) 
}

function startQuiz() {
  nextButton.classList.add('.hide')
  score = 0;
  question1Func();
}


function question1Func() {
  questionEl.textContent = questionsList[0].question

  buttonChoice1.textContent = questionsList[0].answers[0]
  buttonChoice1.addEventListener("click", function() {
    // wrongAnswerDisplay();
    prepareQuestion2();
  })
  buttonChoice2.textContent = questionsList[0].answers[1]
  buttonChoice2.addEventListener("click", function() {
    // wrongAnswerDisplay();
    prepareQuestion2();
  })
  buttonChoice3.textContent = questionsList[0].answers[2]
  buttonChoice3.addEventListener("click", function() {
    // correctAnswerDisplay();
    score++;
    prepareQuestion2();
  })
  buttonChoice4.textContent = questionsList[0].answers[3]
  buttonChoice4.addEventListener("click", function() {
    // wrongAnswerDisplay();
    prepareQuestion2();
  })
}


function question2Func() {
  resetPage()
  questionEl.textContent = questionsList[1].question

  buttonChoice1.textContent = questionsList[1].answers[0]
  buttonChoice1.addEventListener("click", function() {
    // wrongAnswerDisplay();
    prepareQuestion3();
  })
  buttonChoice2.textContent = questionsList[1].answers[1]
  buttonChoice2.addEventListener("click", function() {
    // correctAnswerDisplay();
    score++;
    prepareQuestion3();
  })
  buttonChoice3.textContent = questionsList[1].answers[2]
  buttonChoice3.addEventListener("click", function() {
    // wrongAnswerDisplay();
    prepareQuestion3();
  })
  buttonChoice4.textContent = questionsList[1].answers[3]
  buttonChoice4.addEventListener("click", function() {
    // wrongAnswerDisplay();
    prepareQuestion3();
  })
}

function question3Func() {
  resetPage()
  questionEl.textContent = questionsList[2].question

  buttonChoice1.textContent = questionsList[2].answers[0]
  buttonChoice1.addEventListener("click", function() {
    // correctAnswerDisplay();
    score++;
    prepareHSPage();
  })
  buttonChoice2.textContent = questionsList[2].answers[1]
  buttonChoice2.addEventListener("click", function() {
    // wrongAnswerDisplay();
    prepareHSPage();
  })
  buttonChoice3.textContent = questionsList[2].answers[2]
  buttonChoice3.addEventListener("click", function() {
    // wrongAnswerDisplay();
    prepareHSPage();
  })
  buttonChoice4.textContent = questionsList[2].answers[3]
  buttonChoice4.addEventListener("click", function() {
    // wrongAnswerDisplay();
    prepareHSPage();
  })
}


countdownFunc();
startQuiz();


