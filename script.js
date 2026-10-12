let humanScore = 0
let computerScore = 0


// console.log("hellow")
function getComputerChoice(num){
        let computerChoice= Math.floor(Math.random()*num)
        if (computerChoice == 0){
            computerChoice = "rock"
        }
        else if (computerChoice == 1){
            computerChoice = "paper"
        }
        else{
            computerChoice = "scissors"
        }
        // console.log("After assiging " +computerChoice)
        return computerChoice
}


function getHumanChoice(choiceNum){
    choiceNum=choiceNum.toLowerCase()
    return choiceNum

}  


function playround (computerChoice,humanchoice){
    console.log("***** ROUND " +round+" *****")
    console.log("Computer choice is "+computerChoice )
    console.log("Human choice is " +humanchoice)
        
    if (computerChoice==humanchoice){
        console.log("It's a tie")
    }
    else if(computerChoice==="rock"  && humanchoice==="paper"){
        console.log("You win!! " +humanchoice + " beats " +computerChoice)
        humanScore = humanScore+1
    }
      else if(computerChoice==="paper"  && humanchoice==="rock"){
        console.log("computer win!! " +computerChoice + " beats " +humanchoice)
        computerScore = computerScore+1
    }
      else if(computerChoice==="scissors"  && humanchoice==="paper"){
        console.log("Computer win!! " +computerChoice + " beats " +humanchoice)
        computerScore = computerScore+1
    }
      else if(computerChoice==="paper"  && humanchoice==="scissors"){
        console.log("You win!! " +humanchoice + " beats " +computerChoice)
        humanScore = humanScore+1
    }
      else if(computerChoice==="scissors"  && humanchoice==="rock"){
       console.log("You win!! " +humanchoice + " beats " +computerChoice)
        humanScore = humanScore+1
    }
      else if(computerChoice==="rock"  && humanchoice==="scissors"){
        console.log("computer win!! " +computerChoice + " beats " +humanchoice)
        computerScore = computerScore+1
    }
      else {
        console.log("Inavalid")
    }
}

// let computerChoice = getComputerChoice(3)
// let y = prompt("Enter rock or paper or scissors");
// let humanchoice = getHumanChoice(y)
// // console.log("The humanchoice is : " +humanchoice)
let round = 0
function rounds(){
    let computerChoice = getComputerChoice(3)
    let y = prompt("Enter rock or paper or scissors");
    let humanchoice = getHumanChoice(y)
    round = round+1
    playround(computerChoice,humanchoice)
}

function playgame(humanScore,computerScore){
    console.log("*****FINAL RESULT*****")
    if (humanScore>computerScore){
        console.log("Human won the game")
    }
    else if (computerScore>humanScore){
        console.log("Computer won the game")
    }
    else{
        console.log("Tie")
    }
   
}

rounds()
rounds()
rounds()
rounds()
rounds()
playgame(humanScore,computerScore)






