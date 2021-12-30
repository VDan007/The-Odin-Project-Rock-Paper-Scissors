   var playerS = 0;
   var computerS =0;

   
   
   

function round(x){ 
   

function computerPlay(){
    let options = ["rock","paper","scissors"];

   return options[ Math.floor(Math.random()*3) ];

}

let computerSelection = computerPlay();
computerSelectionBoard.append(compSelection);
compSelection.textContent =computerSelection;
console.log(computerSelection);





let playerSelection = x;
console.log("Plyer selected:"+ playerSelection);



if(computerSelection == playerSelection){
   outcomeBoard.textContent= "Draw";
   
   return "Draw";
}
else if (computerSelection == "rock"){
   if(playerSelection == "scissors"){
      outcomeBoard.textContent="You lose! rock beats scissors";
      computerS++;
      cS.textContent ="Computer Score"+" "+`${computerS}` ;
      
      return "Computer wins";
   }else if(playerSelection == "paper"){
      outcomeBoard.textContent="You win! paper beats rock";
      playerS++;
      pS.textContent ="Player Score:" + " " + `${playerS}` ;
      
      return "Player wins";
   }else if(playerSelection !== "rock" || "paper" || "scissors"){
      console.log(  "No such play, please select from: rock, paper, scissors");
   }
}

else if (computerSelection == "paper"){
   if(playerSelection == "scissors"){
      outcomeBoard.textContent=  "You win! scissors beats paper";
      playerS++;
      pS.textContent ="Player Score:" + " " + `${playerS}` ;
      
      return "Player wins";
   }else if(playerSelection == "rock"){
      outcomeBoard.textContent= "You lose! paper beats rock";
      computerS++;
      cS.textContent ="Computer Score"+" "+`${computerS}` ;
      
      return "Computer wins";
   }else if(playerSelection !== "rock" || "paper" || "scissors"){
      console.log( "No such play, please select from: rock, paper, scissors");
   }
}

else if (computerSelection == "scissors"){
   if(playerSelection == "rock"){
      outcomeBoard.textContent="You win! rock beats scissors";
      playerS++;
      pS.textContent ="Player Score:" + " " + `${playerS}` ;
      
      return "Player wins";
   }else if(playerSelection == "paper"){
      outcomeBoard.textContent= "You lose! scissors beats paper";
      computerS++;
      cS.textContent ="Computer Score"+" "+`${computerS}` ;
      
      return "Computer wins";
   }else if(playerSelection !== "rock" || "paper" || "scissors"){
      console.log( "No such play, please select from: rock, paper, scissors");
   }
}



}


const rock = document.querySelector("#Rock");
rock.addEventListener("click",function(){
   round("rock");
   fun();
   able();
   disable();
   
});


const paper = document.querySelector("#Paper");
paper.addEventListener("click",function(){
   round("paper");
   fun();
   able();
   disable();
   
});

const scissors = document.querySelector("#Scissors");
scissors.addEventListener("click",function(){
   round("scissors");
   fun();
   able();
   disable();
   
});

const r = document.querySelector("#Restart");
r.addEventListener("click",function(){
   restart();
});






const draw = document.createElement("h3");
draw.textContent = "Draw";



const computerSelectionBoard = document.querySelector(".computerSelectionBoard");

const compSelection = document.createElement("h3");

const outcomeBoard = document.querySelector(".outcomeBoard");

const pS = document.querySelector("#playerScore");
pS.textContent ="Player Score:" + " " + `${playerS}` ;
const cS =document.querySelector("#computerScore");
cS.textContent ="Computer Score"+" "+`${computerS}` ;


const end = document.querySelector("#end");
const endh1 = document.createElement("h1");
end.append(endh1);


function fun () {
   if(playerS == 5 ){
      endh1.textContent ="Human Rules!!!";
   }
   else if(computerS == 5){
      endh1.textContent = "TinCan Wins!!!";
   }
   else {endh1.textContent = "Who will win?";}
}

function disable (){
   if(playerS == 5 || computerS == 5) {
      document.getElementById("Rock").disabled = true;
      document.getElementById("Paper").disabled = true;
      document.getElementById("Scissors").disabled = true;
      document.getElementById("Restart").disabled = false;
      

   }
}

function able (){
   if(playerS !== 5 || computerS !== 5) {
      document.getElementById("Rock").disabled = false;
      document.getElementById("Paper").disabled = false;
      document.getElementById("Scissors").disabled = false;
      document.getElementById("Restart").disabled = true;
   }
}

function restart () {
   window.location.reload();
}