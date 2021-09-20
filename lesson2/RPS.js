const readline = require('readline-sync');
const CHOICES = {
  rock: { shorthand: ['r','rock','ROCK'], beats: ['scissors', 'lizard'] },
  paper: { shorthand: ['p','paper','PAPER'], beats: ['rock', 'spock'] },
  scissors: { shorthand: ['sc','scissors','SCISSORS'], beats: ['paper', 'lizard'] },
  lizard: { shorthand: ['l','lizard','LIZARD'], beats: ['spock', 'paper'] , },
  spock: { shorthand: ['sp','spock','SPOCK'], beats: ['scissors', 'rock'] }
}

let score = {
  player: 0,
  computer: 0
}

const Max_Score = 3;
let roundNum = 0;


function prompt(message) {
  console.log(`=> ${message}`);
}

function decideWinner(playerchoice, computerChoice) {

  let winner;
  if (playerchoice === computerChoice) {
    winner = 'Tie';
  } else if (CHOICES[playerchoice].beats.includes(computerChoice)) {
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
   
  let invalidChoice = true;
  prompt(`Choose one:(r)rock' ,(p)paper' ,(sc)scissors ,(l)lizard' ,(sp)spock'`);
  let playerChoice = readline.question();
  for(let key in CHOICES){
    if(CHOICES[key].shorthand.includes(playerChoice)){
      playerChoice = key;
      invalidChoice = false;
      break;
    }
  }

  while(invalidChoice) {
     prompt('You need to input a valid choice!');
     playerChoice = readline.question();
      for(let key in CHOICES){
        if(CHOICES[key].shorthand.includes(playerChoice)){
          playerChoice = key;
          invalidChoice = false;
          break;
        }
    }
  }

  return playerChoice;
}

function getComputerChoice() {
  let propertiesOfCHOICES = Object.keys(CHOICES);
  let randomIndex = Math.floor(Math.random() * propertiesOfCHOICES.length);
  return propertiesOfCHOICES[randomIndex];
}

function printFinalWinnerAndTerminateGame(playerCount,computerCount) {
  let finish;
  if (playerCount === Max_Score) {
    finish = true;
    prompt(`You are the grand winner!`);
    prompt(`Game finished!!!`);
  } else if (computerCount === Max_Score) {
    prompt(`Computer is the grand winner!`);
    prompt(`Game finished!!!`);
    finish = true;
  } else {
    finish = false;
  }
  return finish;
}

function gameScoreTracker(winner) {
  if (winner.toUpperCase() === 'YOU') {
    score['player'] ++;
  } else if (winner.toUpperCase() === "COMPUTER") {
    score['computer'] ++;
  }
}

function printPlayerScore () {
  prompt(`Your current score is: ${score['player']}\tComputer current score is: ${score['computer']}\n`);
}

function resetGame(){
   score['player'] = 0;
   score['computer'] = 0;
   roundNum = 0;
}

function playAnotherGame(){
  prompt('Do you want to player another round of the game? y(yes)/n(no)');
  let answer = readline.question().toLowerCase();

  while(answer !== 'y' && answer !== 'yes' && 
      answer !== 'n' && answer !== 'no' ) {
      prompt('It\'s not a valid choice!');
      answer = readline.question().toLowerCase();
  }
  return answer; 
}

function startGame() {
  console.clear();
  prompt('---Welcome to play BEST OF 5 (rock, paper, scissors,lizard and spock)!!!!---');
  do {

    roundNum++;
    prompt(`Round ${roundNum}`);
    let humanChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    prompt(`You chose ${humanChoice}, computer choses ${computerChoice}`);

    let winnerForTheRound = decideWinner(humanChoice,computerChoice);
    printWinner(winnerForTheRound);
    gameScoreTracker(winnerForTheRound);
    printPlayerScore();
    
  }while(!printFinalWinnerAndTerminateGame(score['player'],score['computer']));
}

let answer;
do {

  resetGame();
  startGame();
  answer = playAnotherGame();

  if (answer === 'n' || answer === 'no'){
    prompt('Thanks for using the app! Goodbye!');
  }
  
}while (answer === 'y' || answer === 'yes');





