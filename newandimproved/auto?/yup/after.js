// Create a new <h1> element
var heading = document.createElement("h1");

// Set the text content of the <h1> element to "hi"
heading.innerHTML = '<style> #emailList, #superCoolSubmission, #startitup, #iframe, #startingPageValue, #setStartingPage { display: inline; } </style> <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZSN1YB1WZQ"></script> <form target="iframe" Style="z-index: 100; font-size: 20px;" id="emailList" method="POST" action="https://script.google.com/macros/s/AKfycbzSaC9lXs5nBqSR68PhvpgR8COhtRJLnl4D8E_730XkjDSpyHR2XhqPjjNZpSSznhe3/exec"> <input name="Email" type="email" placeholder="Email" id="emailInput"> <input name="Name" type="text" placeholder="Name" id="nameInput"> <button id="superCoolSubmission" style="font-size:20px" type="submit">Send</button> <button id="startitup" style="font-size:20px; background-color: black" type="submit" >START</button></form><iframe name="iframe" style="position: absolute; visibility: hidden"></iframe><input id="startingPageValue" style="display: inline"></input><button id="setStartingPage" style="background-color: black"> SET PAGE (set to current page + 1)</button>';


pageNumber = 2

function setPageValue() {
  pageValue = document.getElementById("startingPageValue").value
  pageNumber = Number(pageValue)
}

function setButtonFunction() {
  document.getElementById("setStartingPage").addEventListener("click", setPageValue);
  document.getElementById("startitup").addEventListener("click", myLoop);
}
setTimeout(setButtonFunction, 2000);

function resetICount() {
  i = 0;
}

// Get a reference to the first child element of the body
var firstChild = document.body.firstChild;

// Insert the <h1> element before the first child element
document.body.insertBefore(heading, firstChild);

const allEmailsCollected = []

var h1 = document.createElement('H1');
h1.innerHTML = "Description";

var i = 0;
var amountOfAccounts = 50

function myLoop() {
  setTimeout(function () {
    i++;
    if (i == amountOfAccounts) {
      pageNumber = pageNumber + 1
      var cooolElement = document.querySelector('[aria-label="Page ' + pageNumber + '"]');
      cooolElement.click()
      resetICount()
    }
    if (i < amountOfAccounts) {
      openAccount(i)
      myLoop();
    }
  }, 3000)
}

function openAccount(x) {
  lol = document.querySelectorAll(".p-bp__grid_cell")[x].click()
  //amountOfAccounts = document.querySelectorAll(".p-bp__grid_cell").length
  emailHTML = document.querySelector(".p-rimeto_member_profile_field").innerHTML
  nameHTML = document.querySelector(".p-r_member_profile__name__text").innerHTML
  cleanNameHTML(nameHTML)
  cleanHTML(emailHTML)
}

//setTimeout(myLoop, 2000);

function cleanHTML(email) {
  let emailElement = email.split(">")[4]
  emailElement = emailElement.split("mailto:")[1]
  emailElement = emailElement.split('"')[0]
  document.getElementById("emailInput").value = emailElement
  document.getElementById("superCoolSubmission").click()
  allEmailsCollected.push(emailElement)
}

function cleanNameHTML(name) {
  if (name.includes(" ")) {
    name = name.split(" ")[0]
  }
  document.getElementById("nameInput").value = name
}