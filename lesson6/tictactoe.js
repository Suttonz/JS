const readline = require("readline-sync");

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINNING_SCORE = 5;
const WINNING_LINES  = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];
const oderOptions = ['player', 'computer'];
const vaildOptions = ['1','2','3','p','c','r'];

let roundNum = 0;
let matchScore = {
  Player: 0,
  Computer: 0
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function joinOr(arr,firstDelimter = ', ',secondDelimter = 'or') { 

  if(arr.length === 0){
    return ' ';
  } else if(arr.length === 1){
    return `${arr[0]}`;
  } else if (arr.length === 2){
    return arr.join(` secondDelimter `);
  } else {
    let mainPart = arr.slice(0,arr.length - 1);
    let lastElem = arr[arr.length - 1];
    let mainPartToDisplay = mainPart.join(firstDelimter);
    return `${mainPartToDisplay}${firstDelimter}${secondDelimter} ${lastElem}`;
    }
}

function displayBoard(board) {

  console.clear();
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
  
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
 
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;
  while (true) {
    prompt(`Choose a square:${joinOr(emptySquares(board))}`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }
  board[square] = HUMAN_MARKER;
}

function findDefensiveOrOffensiveSquare(board,maker) {
  for(let i = 0; i < WINNING_LINES.length; i++) {
    let currentLine = WINNING_LINES[i];
    if(currentLine.filter(square => board[square] === maker).length === 2) {
       let square = currentLine.find(square => board[square] === INITIAL_MARKER);
        if(square !== undefined) {
          return square;
        }
    } 
  } 
}

function computerChoosesSquare(board) {
  let square = findDefensiveOrOffensiveSquare(board,COMPUTER_MARKER);
  if(!square) {
    square = findDefensiveOrOffensiveSquare(board,HUMAN_MARKER);
  }
  if(!square){
     if(emptySquares(board).includes(5)) {
       square = 5;
     }
  }
  if(!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex]; 
  }
  board[square] = COMPUTER_MARKER;
}


function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return detectWinner(board);
}

function detectWinner(board) {
  
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function trackMatchScore(winner) {
  matchScore[winner] ++;
}

function stopMatch(playerScore,computerScore) {
  return playerScore === WINNING_SCORE || computerScore === WINNING_SCORE;
}

function displayMatchScore(winner) {
  if (winner !== null) {
   prompt(`${winner} won this round!\n`);
  } else {
   prompt(`This round was a tie!`);
  }
  prompt(`||Player Score:${matchScore['Player']}\t||Computer score: ${matchScore['Computer']}`);
}

function pressEnterToContinue() {
 while(true){
  console.log(`\n\n*** Press enter to continue game ***`);
  let answer = readline.question();
  if (answer == '') break;
 }
}

function welcomeBanner() {
  prompt(`------------------ Welcome to TIC TAC TOE! ------------------`);
  prompt(`-------------- -------- GAME RULE -------- ------------------`);
  prompt(`---------- WHOEVER CAN PUT THREE MARKERS in a row -----------`);
  prompt(`---------- HORIZONTAL, VERTICAL, or DIAGONAL WINS -----------\n`);
}

function askWhoGoesFirst() {
  prompt(`Who should start the game? 1)Player, 2)Computer, 3)Random`);
  let answer = readline.question().toLowerCase()[0];

  while(true) {
    if (vaildOptions.includes(answer)) break;
    prompt(`Please choose a vaild option!`);
    answer = readline.question().toLowerCase()[0];
  }
  return answer;
}

function decideWhoGoesFirst(answer) {
  if(['1','p'].includes(answer)) {
    return oderOptions[0];
  } else if (['2','c'].includes(answer)) {
    return oderOptions[1];
  } else if (['3','r'].includes(answer)) {
    return oderOptions[Math.floor(Math.random()*2)];
  }
}

function resetGame(){
  matchScore['Computer'] = 0;
  matchScore['Player'] = 0;
  roundNum = 0;
}

function newRound(firstPlayer) {
  
  let board = initializeBoard();
  while (true) {
    
    if (firstPlayer === 'player') {
      displayBoard(board);
      playerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
      computerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;

    } else if (firstPlayer === 'computer') {
      computerChoosesSquare(board);
      displayBoard(board);
      if (someoneWon(board) || boardFull(board)) break;
      playerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
    }
  }
  displayBoard(board);
  return detectWinner(board);   
}

function newMatch () {
  console.clear();
  welcomeBanner();
  let firstPlayer = decideWhoGoesFirst(askWhoGoesFirst());
  prompt(`++++This match ${firstPlayer} goes first !+++++`);

  do{ 
    pressEnterToContinue();
    let winner = newRound(firstPlayer);
    trackMatchScore(winner);
    roundNum++;
    prompt(`** Round ${roundNum} **\n`);
    displayMatchScore(winner);
  }while(!stopMatch(matchScore['Player'],matchScore['Computer']));
  
  let finalWinner = Object.keys(matchScore).filter(who => matchScore[who] === WINNING_SCORE);
  prompt(`This match is finished !!!!`);
  prompt(`&&&&& This match's final winner is: ${finalWinner} &&&&`);

}

function playAnotherMatch() {
  prompt('Do you want to play another match?y(Y)/n(N)');
  let answer = readline.question();
  
  while (!['y','Y','N','n'].includes(answer)) {
    prompt(`A vaild answer is required!`);
    answer = readline.question();
  }
  
  if (['y','Y'].includes(answer)) {
    return true;
  } else {
    return false;
  }
}

//main game loop
do { 
  resetGame();
  newMatch();
} while(playAnotherMatch());

prompt('Thanks for playing Tic Tac Toe!');