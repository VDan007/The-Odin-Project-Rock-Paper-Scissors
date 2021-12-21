function game(){ 


function computerPlay(){
    let options = ["rock","paper","scissors"];

   return options[  Math.floor(Math.random()*3) ];

}

let computerSelection = computerPlay();
console.log(computerSelection);



function userPlay(){
   let input = window.prompt("Your Play?");
   return input.toLowerCase();
  
}

let playerSelection = userPlay();
console.log(playerSelection);



if(computerSelection == playerSelection){
   return "Draw";
}
else if (computerSelection == "rock"){
   if(playerSelection == "scissors"){
      return "You lose! rock beats scissors";
   }else if(playerSelection == "paper"){
      return "You win! paper beats rock";
   }else if(playerSelection !== "rock" || "paper" || "scissors"){
      return "No such play, please select from: rock, paper, scissors";
   }
}

else if (computerSelection == "paper"){
   if(playerSelection == "scissors"){
      return "You win! scissors beats paper";
   }else if(playerSelection == "rock"){
      return "You lose! paper beats rock";
   }else if(playerSelection !== "rock" || "paper" || "scissors"){
      return "No such play, please select from: rock, paper, scissors";
   }
}

else if (computerSelection == "scissors"){
   if(playerSelection == "rock"){
      return "You win! rock beats scissors";
   }else if(playerSelection == "paper"){
      return "You lose! scissors beats paper";
   }else if(playerSelection !== "rock" || "paper" || "scissors"){
      return "No such play, please select from: rock, paper, scissors";
   }
}


}












