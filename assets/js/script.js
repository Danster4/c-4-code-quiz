// access main element in DOM using document.main
var main = document.querySelector("body")

// function for start page
var startPage = function() {
  var h1StartEl = document.createElement('h1')
  h1StartEl.textContent = 'Welcome to the Coding Quiz!'
  h1StartEl.setAttribute('style', 'margin: auto; width: 50%; text-align: center;');
  main.appendChild(h1StartEl)

  var paragraphStartEl = document.createElement("p")
  paragraphStartEl.textContent = 'Enjoy this coding quiz that will test your skills as a web developer!'
  paragraphStartEl.textContent += '\nYou will have 75 seconds to complete the quiz.\nPlease click the start button to begin!'
  paragraphStartEl.setAttribute('style', 'margin: auto; width: 50%; text-align: center;');
  main.appendChild(paragraphStartEl);
}

// array of questions
var questions = [
  {q: "What is Danny\'s favorite color?", 
    a: "Blue",
    a: "Yellow",
    a: "Green",
    a: "Red"},
  
    {q: "What is Danny\'s favorite number", 
    a: "4",
    a: "15",
    a: "7",
    a: "21"},

    {q: "What is Danny\'s favorite ice cream flavor?", 
    a: "Rocky Road",
    a: "Vanilla",
    a: "Caramel",
    a: "Chocolate"},
]

// variable to keep track of the user's score
// var score = 0;

// for (var i = 0; i < questions.length; i++) {
//   var answer = 
// }

startPage();