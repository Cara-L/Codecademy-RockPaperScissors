const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error');
  }
};

function getComputerChoice () {
  randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function determineWinner (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Tie'
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins!';
    } else if (computerChoice === 'scissors') {
      return 'You win!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'You win!';
    } else if (computerChoice === 'scissors') {
      return 'Computer wins!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'You win!';
    } else if (computerChoice === 'rock') {
      return 'Computer wins!';
    }
  }
  if (userChoice === 'bomb') {
    return 'You win!';
  }
}

function playGame () {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log(`You threw ${userChoice}`)
  console.log(`The computer threw ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();





