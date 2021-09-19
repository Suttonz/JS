const READLINE = require('readline-sync');
const MESSAGES = require('./mortgage_messages.json');
let doAnotherCalculation;
const VAILD_ANSWERS = ['y','yes','n','no'];

function prompt(message) {
  console.log (`=> ${message}`);
}

function displayMessages(messageKey) {
  return MESSAGES[messageKey];
}

function invalidLoanAmount(loanInput) {
  return loanInput.trimStart() === '' || Number.isNaN(Number(loanInput)) || Number(loanInput) <= 0;
}

function invalidAPR(aprInput) {
  return aprInput.trimStart() === '' || Number.isNaN(Number(aprInput)) || Number(aprInput) < 0;
}

function invalidYears(yearsInput) {
  return yearsInput.trimStart() === '' || !(Number.isInteger(Number(yearsInput))) || Number(yearsInput) <= 0;
}

function invaliddMonths(monthesInput) {
  return !(Number.isInteger(Number(monthesInput))) || Number(monthesInput) < 0;
}

function getMonthlyPayment(loanAmount,apr,loanDuration) {

  let monthlyInterestRate = (Number(apr) * 0.01) / loanDuration;
  let monthlyLoanPayment;
  
  //loan without interest
  if (monthlyInterestRate === 0) {
    monthlyLoanPayment = loanAmountInNumber / loanDuration;
  } else {
    //loan with interest
    monthlyLoanPayment = loanAmount *
                     (monthlyInterestRate /
                     (1 - 
                      Math.pow((1 + monthlyInterestRate), (-loanDuration))
                     ));
  }

  return monthlyLoanPayment;
}

function getLoanAmount() {  
  prompt(displayMessages('loanAmount'));
  let loanInTotal = READLINE.question();

  while (invalidLoanAmount(loanInTotal)) {
    prompt(displayMessages('invalidLoanAmount'));
    loanInTotal = READLINE.question();
  }

  return Number(loanInTotal);
}

function getAPR() {
  prompt(displayMessages('APR'));
  let apr = READLINE.question();

  while (invalidAPR(apr)) {
    prompt(displayMessages('invalidAPR'));
    apr = READLINE.question();
  }

  return Number(apr);
}

function getLoanDuration () {
  prompt(displayMessages('loanDuration'));
  prompt(displayMessages('durationInYears'));
  let years = READLINE.question();

  while (invalidYears(years)) {
    prompt(displayMessages('invalidYear'));
    years = READLINE.question();
  }

  prompt(displayMessages('durationInMonths'));
  let months = READLINE.question();

  while (invaliddMonths(months)) {
    prompt(displayMessages('invalidMonth'));
    months = READLINE.question();
  }

  if (months.trimStart() === '') {
    months = 0;
  }

  let loanTotalTime = (Number(years) * 12) + (Number(months));
  return loanTotalTime;
}

function decideIfdoAnotherCal(){
  prompt(displayMessages('anotherCalculation'));
  let answer = READLINE.question();

  while (answer.length === 0 || VAILD_ANSWERS.includes(answer.toLowerCase())) {
    prompt(displayMessages('invalidAnswer'));
    answer = READLINE.question();
  }

  if (answer.toLowerCase() === 'y') {
    doAnotherCalculation = true;
    console.clear();
  } else {
    doAnotherCalculation = false; 
    prompt('Goodbye! Thanks for using mortgage calculator!');
  }
}


prompt(displayMessages('welcome'));
prompt(displayMessages('resultReminder'));

do {

  let loanAmount = getLoanAmount();
  let annualPercentageRate = getAPR();
  let loanDuration = getLoanDuration();
  let monthlyPayment = getMonthlyPayment(loanAmount,annualPercentageRate,loanDuration);

  prompt(displayMessages('monthlyPayment') + monthlyPayment.toFixed(2));
  prompt(displayMessages('totalNumberOfPayments') + loanDuration);
  decideIfdoAnotherCal();

} while (doAnotherCalculation);