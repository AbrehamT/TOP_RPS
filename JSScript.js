function getComputerChoice(){
    let x = Math.floor((Math.random() * (4 - 1)) + 1);
    if(x === 1)
        return "rock";
    if(x === 2)
        return "paper";
    if(x === 3)
        return "scissor";
}

function computerVsHuman(playerSelection, computerSelection){
    if(computerSelection === playerSelection){
        return "It's a tie!";
    }
    if ((computerSelection === "rock" && playerSelection === "scissor") || 
        (computerSelection === "scissor" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock") ){
            return "You Lose! " + computerSelection + " beats " + playerSelection;
        }
    else{
        return "You Won! " + playerSelection + " beats " + computerSelection;
    }  
}

function getPlayerChoice(){
    let str = prompt("Choose your weapon. Rock, Paper or Scissors");
    str = str.toLowerCase();
    return str;
}
function game(){

    let x = 0;

    while(x <= 5){
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        console.log(computerVsHuman(playerSelection, computerSelection));
        x++;
    }
    console.log("We're done here");
}

game();