const getUserChoice = userInput => {

    userInput = userInput.toLowerCase();

    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
        return userInput;
    }else{
        console.log('Error, you didnt write rock paper or scissor');
    }
};

let getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random()*3);

    switch(randomNumber){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
        return 'tie';
    }
    if(userChoice === 'rock') {
        if(computerChoice === 'paper'){
            return 'you lose';
        }else{
            return 'you win';
        }
    }

    if(userChoice === 'paper') {
        if(computerChoice ==='scissors'){
            return 'you lose';
        }else{
            return 'you win';
        }
    }

    if(userChoice === 'scissor') {
        if(computerChoice === 'rock'){
            return 'you lose';
        }else{
            return 'you win';
        }
    }

    if(userChoice === 'bomb'){
        return 'you used a cheat but you won!'
    }
};

const playGame = () => {
    const userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();
    console.log(`You make your hands to : ${userChoice}`);
    console.log(`Computer makes its hands to : ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();