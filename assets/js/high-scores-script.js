var main = document.querySelector("#main")
var mainTitle = document.querySelector("#main-title")
var mainAboveContent = document.querySelector("#main-above-content")
var mainContent = document.querySelector("#main-content")
var mainSubContent = document.querySelector("#main-sub-content")
var mainButtonSection = document.querySelector("#main-button-section")
var timer = document.querySelector("#timer")
var lowerSection = document.querySelector("#lower-section")

var highScoresH1 = document.createElement("h1")
  highScoresH1.textContent = 'High Scores Chart!'
  highScoresH1.setAttribute('style', 'margin: auto; width: 50%; text-align: center;');
  mainTitle.appendChild(highScoresH1);

var highScoresP = document.createElement("p")
  highScoresP.textContent = 'Please type your name to save your high score!'
  highScoresP.setAttribute('style', 'margin: auto; width: 50%; text-align: center;');
  mainAboveContent.appendChild(highScoresP);

// insert table here

var highScoresList = document.createElement("h3")
  highScoresList.textContent = "John - 10 points"
  highScoresList.className = "highScoresList"
  highScoresList.setAttribute('style', 'margin: auto; width: 50%; text-align: center;');
  mainSubContent.appendChild(highScoresList)


  // use .getItem to put name value key from localStorage into form

// insert form to fill out name
var nameForm = document.createElement('textarea')
  nameForm.className = "nameForm"
  nameForm.setAttribute('style', 'margin: auto; width: 50%; text-align: center;');
  mainContent.appendChild(nameForm)
  // nameForm.setAttribute(type, 'tex')




var submitHSFunction = function() {
  var nameFormInfo = document.querySelector("nameForm").value;
  document.querySelector("highScoresList").innerHTML = nameFormInfo;
  highScoresH1.remove();
  highScoresP.remove();
  nameForm.remove();
  submitButton.textContent = "Retake Quiz"
};

// insert submit button
var submitButton = document.createElement("button")
  submitButton.className = "submitButton"
  submitButton.textContent = 'Submit'
  submitButton.setAttribute('style', 'margin: auto; width: 10%; text-align: center; border-radius: 15px;');
  mainButtonSection.appendChild(submitButton)
  submitButton.onclick(submitHSFunction());
  // use .setItem to put name value key into localStorage

  