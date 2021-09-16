
const readline = require ('readline-sync');
const jasonMessages = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function inValidNumber (numberInput) {
  return numberInput.trimStart() === '' || Number.isNaN(Number(numberInput));
}

function inVaildAnswer(answerInput){

  return answerInput.trimStart() === '' || (answerInput.toUpperCase()!== 'YES' && answerInput.toUpperCase()!== 'NO');
}

let isContinue;

do
{

     prompt('Choose your language: English(en) or 中文(cn)');
     let language = readline.question();
     let languageJasonKey;

     while (language.length === 0 || (language.toUpperCase()!== 'EN'&& language.toUpperCase()!== 'CN')){

       prompt('You need to choose a language!');
       language = readline.question();
     }

     if(language.toUpperCase()=== 'EN'){

        languageJasonKey = 'en';
     }else{

        languageJasonKey = 'cn';
     }
    

      prompt(jasonMessages[languageJasonKey]['welcomeMessage']);

      prompt(jasonMessages[languageJasonKey]['firstNumber']);
      let number1 = readline.question();
      
      while (inValidNumber(number1)) {
      
        prompt(jasonMessages[languageJasonKey]['invaildNumber']);
        number1 = readline.question();
      
      }
      
      
      prompt(jasonMessages[languageJasonKey]['secondNumber']);
      let number2 = readline.question();
      
      while (inValidNumber(number2)) {
      
        prompt(jasonMessages[languageJasonKey]['invaildNumber']);
        number2 = readline.question();
        
      }
      
      prompt(jasonMessages[languageJasonKey]['operation']);
      let operation = readline.question();
      
      while (!['1','2','3','4'].includes(operation)) {
      
        prompt(jasonMessages[languageJasonKey]['invaildOperation']);
        operation = readline.question();
      
      }
      let output;
      switch (operation) {
        case '1':
          output = Number(number1) + Number(number2);
          break;
        case '2':
          output =  Number(number1) - Number(number2);
          break;
        case '3':
          output = Number(number1) * Number(number2);
          break;
        case '4':
          output = Number(number1) / Number(number2);
          break;
      }
      
      prompt(jasonMessages[languageJasonKey]['result'] + output);

    let answer;

    prompt(jasonMessages[languageJasonKey]['anotherCalculation']);
    answer = readline.question();
    
    while (inVaildAnswer(answer)) {

      prompt(jasonMessages[languageJasonKey]['invaildAnswer']);
      answer = readline.question();

    }

    if (answer.toUpperCase() === 'YES') {
      isContinue = true;
    } else if (answer.toUpperCase() === 'NO') {
    isContinue = false;
    }
  
}while (isContinue);




  
  





