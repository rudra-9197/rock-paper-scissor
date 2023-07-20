const userScoreVal = document.getElementById("userScoreVal");
let compScoreVal = document.getElementById("compScoreVal");
let result_user_stat = document.getElementById("result-user-stat");
let result_comp_stat = document.getElementById("result-comp-stat");
let result_final_stat = document.getElementById("result-final-stat");
const choices = document.getElementsByClassName("choices");

let usr_slctn = document.getElementById("usr_slctn");
let comp_slctn = document.getElementById("comp_slctn");
let result = document.getElementById("reslt");

let tempUserScore = 0;
let tempCOmpscore = 0;

let usr_txt = "U have won this time!!!";
let comp_txt = "Computer has won this time ..better luck next time";

for (let choice of choices) {
  choice.addEventListener("click", updateScore);
}

function compChoice() {}

function updateScore(e) {
  let userChoice = e.target.alt;
  usr_slctn.innerText = userChoice.toUpperCase();

  load() ;

  let compChoice = computerchoice();

  let val = setTimeout(() => {
    resultupdate(userChoice, compChoice);
  }, 3000);

  if (tempUserScore == 3) {
    alert("U have won this Game");
    location.reload();
  }
  if (tempCOmpscore == 3) {
    alert("Computer have won! Play again");
    location.reload();
  }
}

function computerchoice() {
  let compArr = ["rock", "paper", "scissors"];

  let nm = Math.floor(Math.random() * 3);

  let compChoice = compArr[nm];

  return compChoice;
}


function load() {
    document.getElementById("loader").style.display = "block";
    setTimeout(function(){
      document.getElementById("loader").style.display = "none"; }, 2500);
  }




function resultupdate(userval, compval) {
  comp_slctn.innerText = compval.toUpperCase();
  if (tempUserScore <= 3 && tempCOmpscore <= 3) {
    if (userval == "rock") {
      if (userval == compval) {
        result.innerText = "ohh!.. It's a Tie.Go On";
        
      } else if (compval == "scissors") {
        tempUserScore += 1;
        userScoreVal.innerText = tempUserScore;
        result.innerText = "U have won this time!!!";
      } else if (compval == "paper") {
        tempCOmpscore += 1;
        compScoreVal.innerText = tempCOmpscore;
        result.innerText =
          "Computer has won this time ..better luck next time";
      }
    } else if (userval == "paper") {
      if (userval == compval) {
        result.innerText = "ohh!.. It's a Tie.Go On";
      } else if (compval == "rock") {
        tempUserScore += 1;
        userScoreVal.innerText = tempUserScore;
        result.innerText = "U have won this time!!!";
      } else {
        tempCOmpscore += 1;
        compScoreVal.innerText = tempCOmpscore;
        result.innerText =
          "Computer has won this time ..better luck next time";
      }
    } else if (userval == "scissors") {
      if (userval == compval) {
        result.innerText = "ohh!.. It's a Tie.Go On";
      } else if (compval == "paper") {
        tempUserScore += 1;
        userScoreVal.innerText = tempUserScore;
        result.innerText = "U have won this time!!!";
      } else {
        tempCOmpscore += 1;
        compScoreVal.innerText = tempCOmpscore;
        result.innerText =
          "Computer has won this time ..better luck next time";
      }
    }
  }
}
