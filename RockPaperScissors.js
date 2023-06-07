
function getComputerChoice(){
    const words =['Rock', 'Paper', 'Scissors'];
    let randomIndex = Math.floor(Math.random() * words.length);
         
    return words[randomIndex];
    }
    
    let randomWord = getComputerChoice();
    

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Draw!';}
        else if (playerSelection ==='Rock' && computerSelection ==='Scissors') {
            return 'You Win!';}
            else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
            return 'You Win!';}
            else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
            return 'You Win!';}
        else if (playerSelection==='Scissors' && computerSelection==='Rock') {
            return 'You Loose!';}
            else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
            return 'You Loose!';}
            else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
            return 'You Loose!';}
}
    const playerSelection = 'Paper';
    const computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));
    console.log(playerSelection)
    console.log(computerSelection);

    let game () = {playRound(); playRound(); playRound(); playRound()}
    game()

    //commit and get commit messasge for the above code from CGPT. 
    

