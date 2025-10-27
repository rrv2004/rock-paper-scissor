function getComputerChoice(){
    let result=Math.floor(Math.random()*3);
    if(result==0){
        return "rock";
    }
    else if(result==1){
        return "scissor";
    }
    else{
        return "paper";
    }
}
function getHumanChoice(){
    let user=prompt("Rock, Paper or Scissor? : ");
    return user;
}
function getRounds(){
    let rounds=prompt("Enter number of Rounds : ");
    return parseInt(rounds);
}
function playGame(){
    let humanScore=0;
    let computerScore=0;
    const rounds=getRounds();
    function playRound(humanChoice,computerChoice){
        humanChoice=humanChoice.toLowerCase();
        computerChoice=computerChoice.toLowerCase();
        if(humanChoice==computerChoice){
            console.log( "Draw!");
        }
        else if(humanChoice=="rock"&&computerChoice=="scissor"||humanChoice=="paper"&&computerChoice=="rock"||humanChoice=="scissor"&&computerChoice=="paper"){
        humanScore++;
        console.log( `You Win! ${humanChoice} beats ${computerChoice}`);
        }
        else{
            computerScore++;
            console.log( `You Lose :( ${computerChoice} beats ${humanChoice}`);
        }
        console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);
    }
    for(let i=0;i<rounds;i++){
        console.log(`Round ${i + 1}`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("Computer is the overall winner!");
    } else {
        console.log("The game is a tie!");
    }
}
playGame();


    




