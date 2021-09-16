const readline = require('readline-sync');
const messages = require('./mortgage_messages.json');

function prompt(message) {

  console.log (`=> ${message}`);

}

function displayMessages(messageKey) {

  return messages[messageKey];

}

function invaildLoanAmount(loanInput) {

  return loanInput.trimStart() === '' || Number.isNaN(Number(loanInput)) || Number(loanInput) <= 0;

}

function invaildAPR(aprInput) {

  return aprInput.trimStart() === '' || Number.isNaN(Number(aprInput)) || Number(aprInput) < 0;

}

function invaildYears(yearsInput) {

  return yearsInput.trimStart() === '' || !(Number.isInteger(Number(yearsInput))) || Number(yearsInput) <= 0;

}

function invaildMonthes(monthesInput) {

  return !(Number.isInteger(Number(monthesInput))) || Number(monthesInput) < 0;

}

function monthlyPaymentCalculation
(loanAmount,monthlyInterestRate,loanDuration) {

  let monthlyPayment;
  monthlyPayment = loanAmount *
                   (monthlyInterestRate /
                   (1 - 
                    Math.pow((1 + monthlyInterestRate), (-loanDuration))
                   ));

  return monthlyPayment;

}


let doAnotherCalculation;

prompt(displayMessages('welcome'));
prompt(displayMessages('resultReminder'));

do {


  //ask for loan amount ,it has to be a positive non-zero number
  prompt(displayMessages('loanAmount'));
  let loanAmount = readline.question();

  while (invaildLoanAmount(loanAmount)) {

    prompt(displayMessages('invaildLoanAmount'));
    loanAmount = readline.question();

  }
  //ask for APR , input has to be a postive number (including 0) in %
  prompt(displayMessages('APR'));
  let annualPercentageRate = readline.question();

  while (invaildAPR(annualPercentageRate)) {

    prompt(displayMessages('invaildAPR'));
    annualPercentageRate = readline.question();

  }

  //ask for loan duration , it has two parts : years and monthes
  //years has to be a non-zero positive integer
  prompt(displayMessages('loanDuration'));
  prompt(displayMessages('durationInYears'));
  let years = readline.question();

  while (invaildYears(years)) {

    prompt(displayMessages('invaildYear'));
    years = readline.question();

  }

  // monthes can be empty input or any intger including 0
  prompt(displayMessages('durationInMonthes'));
  let monthes = readline.question();

  while (invaildMonthes(monthes)) {

    prompt(displayMessages('invaildMonth'));
    monthes = readline.question();
  }

  //varify if monthes is empty input or another case
  if (monthes.trimStart() === '') {
    monthes = 0;
  }

  //mortgage calculation process

  //calculate monthly interest rate
  let loanDuration = (Number(years) * 12) + (Number(monthes));
  let monthlyInterestRate = (Number(annualPercentageRate) * 0.01)
                            / loanDuration;
  let loanAmountInNumber = Number(loanAmount);

  // mortgage that has interest or no interest
  let monthlyPayment;

  if (monthlyInterestRate === 0) {

    monthlyPayment = loanAmountInNumber / loanDuration;

  } else {

    monthlyPayment = monthlyPaymentCalculation(loanAmountInNumber,
      monthlyInterestRate,loanDuration);
    //calculating total interest
  }

  prompt(displayMessages('monthlyPayment') + monthlyPayment.toFixed(2));
  prompt(displayMessages('totalNumberOfPayments') + loanDuration);
  prompt('monthly interest rate is:' + monthlyInterestRate);


  //ask user if they want another mortgage calculation

  prompt(displayMessages('anotherCalculation'));
  let answer = readline.question();

  //user input cannot be empty or anything other than y or n
  while (answer.length === 0 || (answer.toLowerCase() !== 'y' && answer.toLowerCase() !== 'n')) {

    prompt(displayMessages('invaildAnswer'));
    answer = readline.question();

  }

  if (answer.toLowerCase() === 'y') {

    doAnotherCalculation = true;

  } else {
    doAnotherCalculation = false;
  }


} while (doAnotherCalculation);