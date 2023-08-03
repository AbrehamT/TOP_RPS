let computerScore = 0;
let playerScore = 0;

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
            computerScore++;
            return "You Lose! " + computerSelection + " beats " + playerSelection;
        }
    else{
        playerScore++;
        return "You Won! " + playerSelection + " beats " + computerSelection;
    }  
}

function getPlayerChoice(){
    let str = prompt("Choose your weapon. Rock, Paper or Scissors");
    str = str.toLowerCase();
    return str;
}

const resultsDiv = document.createElement('div');
const body = document.querySelector('body');
body.setAttribute('style', 'flex-direction: column; align-items: center; padding-top: 250px');
resultsDiv.setAttribute('style', 'width: 500px; text-align: center; font-size: 30px; color: white; border: 10px dotted white; padding: 50px; margin-bottom: 50px');
resultsDiv.textContent = "Pick your weapon"
const buttonContainer = document.querySelector(".buttonContainer");
body.insertBefore(resultsDiv, buttonContainer);
let count = 0;

function thisValue(){

        resultsDiv.textContent = computerVsHuman(this.classList.value, getComputerChoice());

        const points = document.createElement('div');
        resultsDiv.appendChild(points);
        let temp = count + 1;
        points.textContent = "Round " + temp + "\n Computer: " + computerScore + " Player: " + playerScore;
        count++;

        if(count === 5){

           if(playerScore > computerScore){ 
            resultsDiv.textContent = "Yes, You won and saved the lives of billions";
            }
           else {
            resultsDiv.textContent = "Noo! You lost, better luck next time"
           }
           
           const playAgain = document.createElement("div")
           resultsDiv.appendChild(playAgain);
           playAgain.textContent = "Wanna play again?";
           const playButton1 = document.createElement("button");
           playButton1.textContent = 'Yes';
           const playButton2 = document.createElement("button");
           playButton2.textContent = 'No';
           resultsDiv.appendChild(playButton1);
           resultsDiv.appendChild(playButton2);

           playButton1.addEventListener('click', () => {
            buttons.forEach((button) => 
            button.addEventListener('click', thisValue));
            count = 0;
            playerScore = 0;
            computerScore = 0;
            resultsDiv.textContent = "Pick your weapon"
            resultsDiv.removeChild(playButton1);
            resultsDiv.removeChild(playButton2);
            resultsDiv.removeChild(playAgain); 
            });

            playButton2.addEventListener('click', () => {
                resultsDiv.textContent = "Thank you for playing";
            });

           buttons.forEach((button) => button.removeEventListener('click', thisValue));

        }

}


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => 
    button.addEventListener('click', thisValue));
