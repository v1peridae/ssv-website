var proceedButton = document.getElementById ("proceedButton");

if (proceedButton){
  proceedButton.addEventListener("click", redirectHome);
}

function redirectHome() {
  location.href = ("home.html");
  console.log = ("You're on the Home Page");
}


var mythsList = [
  "Myth - Sexual violence is as a result of clothing. <br> Fact - The only cause of sexual violence is choosing to violate another person. The victim’s appearance has no effect on their right to say no.",
  
  "Myth - Sexual violence only happens to women. <br> Fact - Men as well are victims of sexual violence.",
  
  "Myth - Only strangers are likely to sexually assault someone. <br> Fact - Among victims aged 18 to 29, ⅔ of them knew the offender. ",
];

var fact = document.getElementById("fact");
var generateFactsButton = document.getElementById ("generateFactsButton");
var count = 0;

if (generateFactsButton){
  generateFactsButton.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = mythsList[count];
  count++;
  if (count == mythsList.length) {
    count = 0;
      console.log("mythsList fact:", mythsList[count]);

  }
}
