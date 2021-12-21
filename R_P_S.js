function round(){ 


function computerPlay(){
    let options = ["rock","paper","scissors"];

   return options[  Math.floor(Math.random()*3)  ];

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
   console.log("Draw");
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

function game(){
   let playerwins = 0;
   let computerwins = 0;

for(let i = 0; i<5;i++){
   let outcome = round();
if(outcome == "Computer wins"){computerwins=computerwins+1;}
else if (outcome == "Player wins"){playerwins=playerwins+1;}
}

console.log("Matches won by player:"+playerwins);
console.log("Matches won by computer:"+computerwins);

if (playerwins>computerwins){return "Player wins!!";}
else if(playerwins<computerwins){return "Computer wins!";}
else {return "Draw";}

}












