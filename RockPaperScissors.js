console.log("Hello Emile")

function getComputerChoice(){
    const words =['Rock', 'Paper', 'Scissor'];
    let randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
    }
    
    let randomWord = getComputerChoice();
    console.log(randomWord);


