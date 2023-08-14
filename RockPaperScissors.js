
function getComputerChoice(){
    const words =['Rock', 'Paper', 'Scissors'];
    let randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
    }
    
    let randomWord = getComputerChoice();
    
// Write a function that plays a single round. Create function takes two words as parameters to indicate each player's selection. It compares the words to determine winner. Function called playRound with parameters playerSelection & computerSelection. Use 'if' method to to determine a draw and 'else if' method to indicate a win and else if function to determine a loose. For both win and loose, there are a paper, beats rock, rock beats scissors and scissors beats paper for scenario for each player. Use manual, constant input for player 1. and use the function getComputerChoice for player 2.
   
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Draw!';}
        else if (playerSelection ==='Rock' && computerSelection ==='Scissors') {
            return 'You Win! Rock beats Scissors';}
            else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
            return 'You Win! Paper beats Rock';}
            else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
            return 'You Win! Scissors beats Paper';}
        else if (playerSelection==='Scissors' && computerSelection==='Rock') {
            return 'You Loose! Rock beats Scissors';}
            else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
            return 'You Loose! Paper beats Rock';}
            else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
            return 'You Loose! Scissors beats paper';}

            return playRound();
}
    
    let playerSelection = prompt('Rock, Paper or Scissors');
    playerSelection = playerSelection.replace(/SCISSORS/i,'Scissors');
    playerSelection = playerSelection.replace(/ROCK/i,'Rock');
    playerSelection = playerSelection.replace(/PAPER/i,'Paper');
    const computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));
    
    console.log(playerSelection);
    console.log(computerSelection);

  /* let game (playRound()) {
    for (let i = 0; i<5; i++);{
        let playerSelection = prompt('Rock, Paper or Scissors');
        const computerSelection = getComputerChoice();
    }
    return
   } */

   
    

