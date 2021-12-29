function round(x){ 


function computerPlay(){
    let options = ["rock","paper","scissors"];

   return options[  Math.floor(Math.random()*3)  ];

}

let computerSelection = computerPlay();
compSelection.textContent =computerSelection;
console.log(computerSelection);





let playerSelection = x;
console.log("Plyer selected:"+ playerSelection);



if(computerSelection == playerSelection){
   computerSelectionBoard.append(compSelection);
   return "Draw";
}
else if (computerSelection == "rock"){
   if(playerSelection == "scissors"){
      console.log("You lose! rock beats scissors");
      return "Computer wins";
   }else if(playerSelection == "paper"){
      console.log("You win! paper beats rock");
      return "Player wins";
   }else if(playerSelection !== "rock" || "paper" || "scissors"){
      console.log(  "No such play, please select from: rock, paper, scissors");
   }
}

else if (computerSelection == "paper"){
   if(playerSelection == "scissors"){
      console.log(  "You win! scissors beats paper");
      return "Player wins";
   }else if(playerSelection == "rock"){
      console.log( "You lose! paper beats rock");
      return "Computer wins";
   }else if(playerSelection !== "rock" || "paper" || "scissors"){
      console.log( "No such play, please select from: rock, paper, scissors");
   }
}

else if (computerSelection == "scissors"){
   if(playerSelection == "rock"){
      console.log("You win! rock beats scissors");
      return "Player wins";
   }else if(playerSelection == "paper"){
      console.log( "You lose! scissors beats paper");
      return "Computer wins";
   }else if(playerSelection !== "rock" || "paper" || "scissors"){
      console.log( "No such play, please select from: rock, paper, scissors");
   }
}



}


const rock = document.querySelector("#Rock");
rock.addEventListener("click",function(){
   round("rock");
});


const paper = document.querySelector("#Paper");
paper.addEventListener("click",function(){
   round("paper");
});

const scissors = document.querySelector("#Scissors");
scissors.addEventListener("click",function(){
   round("scissors");
});





const draw = document.createElement("h3");
draw.textContent = "Draw";



const computerSelectionBoard = document.querySelector(".computerSelectionBoard");

const compSelection = document.createElement("h3");
compSelection.textContent =computerSelection;