// access main element in DOM using document.main
var main = document.querySelector("#main")
var mainTitle = document.querySelector("#main-title")
var mainContent = document.querySelector("#main-content")
var mainButtonSection = document.querySelector("#main-button-section")

// var quiz = function(event) {
//   // var h1QuizEl = document.createElement('h1')
//   // h1QuizEl.textContent = 'Coding Quiz!'
//   // h1QuizEl.setAttribute('style', 'margin: auto; width: 50%; text-align: center;');
//   // mainTitle.appendChild(h1QuizEl)
// }




// function for start page
var startPage = function() {
  var h1StartEl = document.createElement('h1')
  h1StartEl.textContent = 'Welcome to the Coding Quiz!'
  h1StartEl.setAttribute('style', 'margin: auto; width: 50%; text-align: center;');
  mainTitle.appendChild(h1StartEl)

  var paragraphStartEl = document.createElement("p")
  paragraphStartEl.textContent = 'Enjoy this coding quiz that will test your skills as a web developer!'
  paragraphStartEl.textContent += '\n You will have 75 seconds to complete the quiz.'
  paragraphStartEl.textContent += '\n Please click the start button to begin!'
  paragraphStartEl.setAttribute('style', 'margin: auto; width: 35%; text-align: center;');
  mainContent.appendChild(paragraphStartEl);

  var startButton = document.createElement("button")
  startButton.className = "startButton"
  startButton.textContent = 'Start Code Quiz'
  startButton.setAttribute('style', 'margin: auto; width: 10%; text-align: center; border-radius: 15px;');
  mainButtonSection.appendChild(startButton)

  // startButton.addEventListener('click', quiz())
}

// array of questions
var questions = [
  {q: "What is Danny\'s favorite color?", 
    a: "Blue",
    a: "Yellow",
    a: "Green",
    a: "Red"
  },
  
  {q: "What is Danny\'s favorite number", 
    a: "4",
    a: "15",
    a: "7",
    a: "21"
  },

  {q: "What is Danny\'s favorite ice cream flavor?", 
    a: "Rocky Road",
    a: "Vanilla",
    a: "Caramel",
    a: "Chocolate"
  },
]

// variable to keep track of the user's score
// var score = 0;

// for (var i = 0; i < questions.length; i++) {
//   var answer = 
// }

startPage();