const readline = require('readline-sync');
const VALID_CHOICES = {
  r:'rock',
  p:'paper',
  sc:'scissors',
  l:'lizard',
  sp:'spock'
};
const VALID_CHOICES_KEYS = Object.keys(VALID_CHOICES);
const WINNING_POSSIBILITIES = {
  rock : ['lizard','scissors'],
  paper: ['rock','sopck'],
  scissors: ['lizard','paper'],
  spock:['rock','scissors'],
  lizard :['paper','spock']
};
let computerScore = 0;
let playerScore = 0;
let roundNum = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function decideWinner(choice, computerChoice) {

  let winner;
  if (choice === computerChoice) {
    winner = 'Tie';
  } else if (WINNING_POSSIBILITIES[choice].includes(computerChoice)) {
    winner = 'You';
  } else {
    winner = 'Computer';
  }
  return winner;

}

function printWinner(result) {

  if (result.toUpperCase() === 'TIE') {
    prompt('It was a tie!!');
  } else {
    prompt(`${result} won!`);
  }

}

function getPlayerChoice() {
  prompt(`Choose one:(r)rock' ,(p)paper' ,(sc)scissors ,(l)lizard' ,(sp)spock'`);
  let choiceKey = readline.question();
  //player choice vaildation
  while (!VALID_CHOICES_KEYS.includes(choiceKey)) {
    prompt("That's not a valid choice");
    choiceKey = readline.question();
  }
  let playerChoice = VALID_CHOICES[choiceKey];
  return playerChoice;

}

function getComputerChoice() {

  // random generate computer choices
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES_KEYS.length);
  let computerChoiceKey = VALID_CHOICES_KEYS[randomIndex];
  let computerChoice = VALID_CHOICES[computerChoiceKey];
  return computerChoice;

}

function printFinalWinnerAndTerminateGame(playerCount,computerCount) {

  let flip;
  if (playerCount === 3) {
    flip = true;
    prompt(`You are the grand winner!`);
    prompt(`Game finished!!!`);
  } else if (computerCount === 3 ) {
    prompt(`Computer is the grand winner!`);
    prompt(`Game finished!!!`);
    flip = true;
  } else {
    flip = false;
  }
  return flip;
}

function gameScoreTracker(winner) {
  if (winner.toUpperCase() === 'YOU') {
    playerScore++;
  } else if (winner.toUpperCase() === "COMPUTER") {
    computerScore++;
  }
}
//clear the screen before start the game
console.clear();
prompt('---Welcome to play BEST OF 5 (rock, paper, scissors,lizard and spock)!!!!---');

while (true) {

  roundNum++;
  prompt(`Round ${roundNum}`);
  let humanChoice = getPlayerChoice();
  let computerChoice = getComputerChoice();

  prompt(`You chose ${humanChoice}, computer choses ${computerChoice}`);

  let winnerForTheRound = decideWinner(humanChoice,computerChoice);

  printWinner(winnerForTheRound);
  gameScoreTracker(winnerForTheRound);

  prompt(`Your current score is: ${playerScore}`);
  prompt(`Computer current score is: ${computerScore}\n`);

  if (printFinalWinnerAndTerminateGame(playerScore,computerScore)) {
    break;
  }

}
