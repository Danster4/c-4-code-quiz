// access main element in DOM using document.main
var main = document.querySelector("#main")
var mainTitle = document.querySelector("#main-title")
var mainContent = document.querySelector("#main-content")
var mainButtonSection = document.querySelector("#main-button-section")
var timer = document.querySelector("#timer")
var lowerSection = document.querySelector("#lower-section")

var score = 0;

var countdown = 75;

var questionNumber = 1


// array of questions
var questionsList = [
  {
    question: "What is Danny\'s favorite color?", 
    answers: {
      a: "Blue",
      b: "Yellow",
      c: "Green",
      d: "Red"
    },
    correctAnswer: "c"
  },
      
  {
    question: "What is Danny\'s favorite number?", 
    answers: {
      a: "25",
      b: "4",
      c: "42",
      d: "208"
    },
    correctAnswer: "b"
  },

  {
    question: "What is Danny\'s favorite city?", 
    answers: {
      a: "Syracuse",
      b: "Tampa",
      c: "Ljublijana",
      d: "Chicago"
    },
    correctAnswer: "c"
  },
]



var countdownFunc = function() {
  var countdown = 75;

  var timeInterval = setInterval(function() {
    if (countdown === 0) {
      timer.textContent = ""
      clearInterval(timeInterval)
      // (add) link to high score page below... 

    } else {
      timer.textContent = "Time: " + countdown;
      countdown--;
    }
   }, 1000);
}




var quiz = function() {

  countdownFunc();


  for (var i = 0; i <questionsList.length; i++) {
    var answer =[]
    
    var questionTitle = document.createElement = "h3"
    questionTitle = questionsList[i].question
    mainContent.appendChild(questionTitle)

    var answerChoices = document.querySelector("#list-item")
    answerChoices.textContent("answer 1")
    mainContent.appendChild(answerChoices)


    if (
      (answer === correctAnswer)
    ){
      score++;
      var rightAnswerDisplay = document.createElement("h2")
      rightAnswerDisplay.textContent = "Right Answer!"
      lowerSection.appendChild(rightAnswerDisplay);
    } else {
      var wrongAnswerDisplay = document.createElement("h2")
      wrongAnswerDisplay.textContent = "Wrong Answer!"
      lowerSection.appendChild(wrongAnswerDisplay);
    }
  }
}


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

  startButton.addEventListener('click', function() {
    h1StartEl.remove();
    paragraphStartEl.remove();
    startButton.remove(); 
    quiz();
  });
}





startPage();



// var quiz = function() {
//   for (var i = 0; i < questionsList.length; i++) {
//     var h1QuizEl = document.createElement('h1')
//     h1QuizEl.textContent = 'Question ' + questionNumber
//     h1QuizEl.setAttribute('style', 'margin: auto; width: 50%; text-align: center;');
//     mainTitle.appendChild(h1QuizEl)

//     var questionTitleEl 
//     // = document.querySelector(questionsList[i].question)
//     questionTitleEl = document.createElement('h2')
//     questionTitleEl.textContent = "HEre is question"
//     mainContent.appendChild(questionTitleEl)

    

//     questionNumber++;

//   };
// }
    
  // for (var i = 0; i < questionsList.length; i++) {

  //   var h1QuizEl = document.createElement('h1')
  //   h1QuizEl.textContent = 'Question ' + questionNumber
  //   h1QuizEl.setAttribute('style', 'margin: auto; width: 50%; text-align: center;');
  //   mainTitle.appendChild(h1QuizEl)

  //   var questionDisplayed = document.createElement('h2')
  //   questionDisplayed = questionsList[i].question
  //   questionDisplayed.setAttribute('style', 'margin: auto; width: 50%; text-align: center;');
  //   mainContent.appendChild(questionDisplayed)

  //   var answer = questionsList[i].correctAnswer
  //   var answerChoices = document.createElement("button")
  //   answerChoices = questionsList[i].answers

  //   if ()


    // var questionTitle = createElement="h3"
    // questionTitle.textContent = questionsList[i].question
    // mainContent.appendChild(questionTitle)


    
    
    // questionNumber++;
    
//   }

// }
    

  // var questionChoices = 
  
  // var submitButton = document.createElement("button")
    // submitButton.className = "submitButton"
    // submitButton.textContent = 'Submit'
    // submitButton.setAttribute('style', 'margin: auto; width: 10%; text-align: center; border-radius: 15px;');
    // mainButtonSection.appendChild(submitButton)




    // if (
    //     (answer === true && questions[i].a === "True") ||
    //     (answer === false && questions[i].a === "False")
    // ){
    //   score++;
    //   alert('You got the right answer! Noice!');
    // } else {
    //   // var wrongAnswerDisplay = document.createElement("h2")
    //   // wrongAnswerDisplay.textContent = "Wrong Answer!"
    //   // lowerSection.appendChild(wrongAnswerDisplay);
    // }
  
  
// variable to keep track of the user's score
// var score = 0;

// for (var i = 0; i < questions.length; i++) {
//   var answer = 
// }

 // dot notation for objects

      // var output =[];

      // questionsList.forEach (
      //   (currentQuestion, questionNumber) => {

      //     var answers = [];

      //     for(letter in currentQuestion.answers) {

      //       answers.push (
      //         `<label>
      //         <input type="radio" name="question${questionNumber}" value="${letter}">
      //         ${letter} :
      //         ${currentQuestion.answers[letter]}
      //       </label>`
      //       );
      //     }
      //   }
      // )


      // var correctAnswerSelected = function() {
      //   score++;
      //   var correctHeadingEl = document.createElement('h1')
      //   correctHeadingEl.textContent = 'Correct!'
      //   lowerSection.appendChild(correctHeadingEl)
        
      // }
      
      // var wrongAnswerSelected = function() {
      
      //   var wrongHeadingEl = document.createElement('h1')
      //   wrongHeadingEl.textContent = 'Wrong!'
      //   lowerSection.appendChild(wrongHeadingEl)
        
      // }