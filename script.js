let humanScore = 0
let computerScore = 0


// console.log("hellow")
function getComputerChoice(num){
    return Math.floor(Math.random()*num)
}

console.log(getComputerChoice(3))

function getHumanChoice(choiceNum){
    return choiceNum
}
let choice = prompt("Enter rock or paper or scissors");
console.log("The choice is : " +getHumanChoice(choice))

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();


function playroundsHUM(humanSelection,computerSelection){
    if (computerSelection == 0)
    {
        computerSelection = "rock";
    }
    else if (computerSelection == 1)
    {
        computerSelection = "paper";
    }else{
        computerSelection = "scissors"
    }
humanSelection = humanSelection.toLowerCase();

    if (humanSelection == computerSelection){
        console.log("a tie")
    }
    else if (humanSelection === "rock" && computerSelection ==="scissors"){
        humanScore= humanScore + 1
        console.log("Human gains 1 point")
    }

    else if (humanSelection=== "paper" && computerSelection==="rock"){
        humanScore = humanScore + 1
        console.log("Human gains 1 point")
    }

    else if(humanSelection === "scissors" && computerSelection==="paper"){
        humanScore = humanScore+1
        console.log("Human gains 1 point")
    }
    else{
        playroundsCOMP(humanSelection,computerSelection)
    }
    return humanScore

}

function playroundsCOMP(humanSelection,computerSelection){
    if (computerSelection == 0)
    {
        computerSelection = "rock";
    }
    else if (computerSelection == 1)
    {
        computerSelection = "paper";
    }else{
        computerSelection = "scissors"
    }
humanSelection = humanSelection.toLowerCase();

    if (humanSelection === "rock" && computerSelection ==="paper"){
        computerScore= computerScore + 1
        console.log("Computer gains 1 point")
    }

    else if (humanSelection=== "paper" && computerSelection==="scissor"){
        computerScore= computerScore + 1
        console.log("Computer gains 1 point")
    }

    else if(humanSelection === "scissors" && computerSelection==="rock"){
        computerScore= computerScore + 1
        console.log("Computer gains 1 point")
    }
    else{
        console.log("Invalid");
    }
   return computerScore
}
round = 0 
function playgame(playroundsHUM,playroundsCOMP){
    if (round>5){
        console.log("END")
    } 
    else if(round<=5){
        playroundsHUM()
        playroundsCOMP()
    }

    if (computerScore > humanScore) {
        console.log("Computer Wins round " +round)
    }
    else if (humanScore > computerScore){
        console.log("Human Wins round " +round)
    }
    else{
        console.log("It's a tie")
    }

    
} 