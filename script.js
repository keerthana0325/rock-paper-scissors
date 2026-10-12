let humanScore = 0
let computerScore = 0


// console.log("hellow")
function getComputerChoice(num){
    return Math.floor(Math.random()*num)
}

let computerChoice = getComputerChoice(3)
console.log("computerchoice is " +computerChoice)
if (computerChoice == 0){
    computerChoice = "rock"
}
else if (computerChoice == 1){
    computerChoice = "paper"
}
else{
    computerChoice = "scissors"
}

console.log("After assiging " +computerChoice)

function getHumanChoice(choiceNum){
    return choiceNum
}

let humanchoice = prompt("Enter rock or paper or scissors");
humanchoice=humanchoice.toLowerCase()
console.log("The humanchoice is : " +humanchoice)

function playround (computerChoice,humanchoice){
    if (computerChoice==humanchoice){
        console.log("It's a tie")
    }
    else if(computerChoice==="rock"  && humanchoice==="paper"){
        console.log("You win " +humanchoice + " beats " +computerChoice)
        humanScore = humanScore+1
    }
      else if(computerChoice==="paper"  && humanchoice==="rock"){
        console.log("You win " +computerChoice + " beats " +humanchoice)
        computerScore = computerScore+1
    }
      else if(computerChoice==="scissors"  && humanchoice==="paper"){
        console.log("You win " +computerChoice + " beats " +humanchoice)
        computerScore = computerScore+1
    }
      else if(computerChoice==="paper"  && humanchoice==="scissors"){
        console.log("You win " +humanchoice + " beats " +computerChoice)
        humanScore = humanScore+1
    }
      else if(computerChoice==="scissors"  && humanchoice==="rock"){
       console.log("You win " +humanchoice + " beats " +computerChoice)
        humanScore = humanScore+1
    }
      else if(computerChoice==="rock"  && humanchoice==="scissors"){
        console.log("You win " +computerChoice + " beats " +humanchoice)
        computerScore = computerScore+1
    }
      else {
        console.log("Inavalid")
    }
}

playround(computerChoice,humanchoice)


function playgame(humanScore,computerScore){
    if (humanScore>computerScore){
        console.log("Human won the round")
    }
    else if (computerScore>humanScore){
        console.log("Computer won")
    }
    else{
        console.log("Tie")
    }
   
}

playgame(humanScore,computerScore)