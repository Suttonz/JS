const readline = require('readline-sync');

const SUITS = ['Hearts', 'Diamonds', 'Clubs',  'Spades'];
const VALUES = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King','Ace'];
const SPECIAL_VALUES = ['Jack','Queen','King'];
const MAX_NUM = 21;
const MIN_NUM_DEALER = 17;
const WINNING_SCORE = 2;

let holdCards = {
  player:[],
  dealer:[]
};

let matchScore = {
  player:0,
  dealer:0
}

let roundNum = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function printWelcomeMessage() {
  console.clear();
  prompt(`------- Welcome to TWENTY - ONE !!! ------`);
  prompt(`------------------------------------------`);
  prompt(`WHOEVER HAVE the number closer to 21 WINS!!`);
  prompt(`------------------------------------------`);

}

function pressEnterToContinue() {
  while (true) {
    prompt (`**** Press enter to continue  ****`);
    let answer = readline.question();
    if (answer === '') break;
  }
  console.clear();
}

function initializeDeck() {
  let deck = [];

  for (let indexSuits = 0; indexSuits < SUITS.length; indexSuits++) {
    for (let indexValues = 0; indexValues < VALUES.length; indexValues++) {
      let card = [];
      card = [SUITS[indexSuits],VALUES[indexValues]];
      deck.push(card);
    }
  }
  return deck;
}

function shuffleDeck(deck) {
  for (let indexDeck = deck.length - 1; indexDeck > 0; indexDeck-- ) {
    let randomIndex = Math.floor(Math.random() * (indexDeck + 1));
    let temp = deck[indexDeck];
    deck[indexDeck] = deck[randomIndex];
    deck[randomIndex] = temp;
  }
}

function dealCards(deck,who,num) {
  for (let cardNum = 0; cardNum < num; cardNum++) {
    let card = deck.pop();
    holdCards[who].push(card);
  }
}

function calculateTotalPoints(cards) {
  let sum = 0;
  if (Array.isArray(cards)){
    cards.forEach(card => {
    if (SPECIAL_VALUES.includes(card[1])) {
      sum += 10;
    } else if (card[1] === 'Ace') {
      sum += 11;
    } else {
      sum += Number(card[1]);
    }
    });

    cards.filter(card => card[1] === 'Ace').forEach( _ => {
    if (sum > MAX_NUM) {
      sum -= 10;
    }
    });
  }
  return sum;
}

function busted(cards) {
  return calculateTotalPoints(cards) > MAX_NUM;
}

function printInitialHands() {
  prompt(`||YOU||have:${holdCards.player.map(card => card.join(' of ') )}`);
  prompt(`||DEALER||has:${holdCards.dealer[0].join(' of ')} and an unknown card.`);
  prompt(`--------------------------------------`);
}

function printCards(who) {
  if (who !== '') {
    prompt(`||${who.toUpperCase()}||: ${holdCards[who].map(card => card.join(' of ') )}`);
  }
}


function playerTurn(deck) {

  prompt(`&&&&&&&& Player' turn &&&&&&&&&&`);
  while (true) {
    prompt(`You want to hit or stay? h(H)/s(S)`);
    let answer = readline.question();

    if (!['s','S','h','H'].includes(answer)) {
      prompt(`Please input a vaild answer!`);
    }
    if (['h','H'].includes(answer)) {
      dealCards(deck,'player',1);
      printCards('player');
    }
    if (['s','S'].includes(answer) || busted(holdCards['player'])) break;
  }

  if (busted(holdCards['player'])) {
    prompt(`::: You are busted... DEALER won!!`);
    trackMatchScore('dealer');
  } else {
    prompt(`You choose to stay!`);
  }
}

function dealerTurn(deck) {
  prompt(`&&&&&&&& Dealer' turn &&&&&&&&&&`);
  while (calculateTotalPoints(holdCards['dealer']) < MIN_NUM_DEALER) {
    prompt(`Dealer is hitting!!!`);
    dealCards(deck,'dealer',1);
    printCards('dealer');
  }

  if (busted(holdCards['dealer'])) {
    prompt(`::: Dealer busted,PLAYER won!`);
    trackMatchScore('player');
  } else {
    prompt(`Dealer chooses to stay!`);
  }
}

function compareCards() {
  let playerPoints = calculateTotalPoints(holdCards.player);
  let dealerPoints = calculateTotalPoints(holdCards.dealer);

  if (playerPoints === dealerPoints) {
    prompt (`::: It was a tie!`);
  } else if (playerPoints > dealerPoints) {
    prompt(`::: PLAYER won !`);
    trackMatchScore('player');
  } else {
    prompt(`::: DEALER won !`);
    trackMatchScore('dealer');
  }
}

function resetHoldCards(who) {
  holdCards[who].splice(0,holdCards[who].length);
}

function playAgain() {
  prompt(`----------------------------------------`);
  prompt(`Do you want to play another game ? (y/n)`);
  let answer = readline.question();

  while (!['y','Y','n','N'].includes(answer)) {
    prompt(`A vaild answer is required!`);
    answer = readline.question();
  }
  return ['y','Y'].includes(answer);
}

function trackMatchScore(who) {
  matchScore[who] ++;
}

function decideGrandWinner() {
  return Object.keys(matchScore).filter(who => matchScore[who] === WINNING_SCORE);
}

function resetMatch() {
  roundNum = 0;
  matchScore.dealer = 0;
  matchScore.player = 0;
}

function stopMatch() {
  return matchScore.player === WINNING_SCORE || matchScore.dealer === WINNING_SCORE;
}

function newRound() {
  let deck = initializeDeck();
  shuffleDeck(deck);
  
  resetHoldCards('player');
  resetHoldCards('dealer');

  dealCards(deck,'player',2);
  dealCards(deck,'dealer',2);
 
  printInitialHands();
  playerTurn(deck);
  if (!busted(holdCards.player)) dealerTurn(deck);
  if (!busted(holdCards.dealer) && !busted(holdCards.player)) compareCards();
}

function newMatch() {

  console.clear();
  printWelcomeMessage();
  
  while(true) {
    pressEnterToContinue();
    roundNum ++;
    prompt(`-----  Round  ${roundNum}  ------`);
    newRound();
    prompt(`+++++++++++++++++++++++++++++++++++++`);
    prompt(`Player Score: ${matchScore.player}\t Dealer Score: ${matchScore.dealer}`);
    prompt(`+++++++++++++++++++++++++++++++++++++`);
    if (stopMatch()) {
      prompt(`:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::`)
      prompt(`:::::MATCH FINISHED :::: ${decideGrandWinner()}  is the GRAND WINNER!!!`);
      prompt(`:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::`)
      break;
    }
  }
}


do {
  resetMatch();
  newMatch();
} while (playAgain());

prompt(`----Thanks for playing TWENTY - ONE !! See you next time !!----`);
