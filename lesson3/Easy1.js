/*//Q1
let numbers = [1,2,3];
numbers[6] = 5;
numbers.forEech(number => console.log(number));
console.log(numbers[4]);

//Q2
let str1 = "Come over here!"; 
let str2 = "What's up, Doc?"; 
console.log(str1.includes('!'));
console.log(str2.includes('!'));
//LS answer
console.log(str1.endsWith('!'));

//Q3
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
let agesKeys = Object.keys(ages);
console.log(agesKeys.includes('Spot'));
//LS answer
console.log(ages.hasOwnProperty('Spot'));

//Q4
let munstersDescription = "the Munsters are CREEPY and Spooky.";
let firstLetter = munstersDescription.charAt(0).toUpperCase();
let theRest = munstersDescription.slice(1).toLowerCase();
let newWord = firstLetter + theRest;
console.log(newWord);
//LS answer 
munstersDescription.charAt(0).toUpperCase() +
munstersDescription.substring(1).toLowerCase();

//Q5 
console.log(false == '0');
console.log(false === '0');
//outputs true and false separately

//Q6
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

let combinedObj = {};
Object.assign(combinedObj,ages,additionalAges);
console.log(combinedObj);

//Q7
let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";
console.log(str1.includes('Dino'));
console.log(str2.includes('Dino'));*/

//Q8
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
//flintstones.push("Dino");
//flintstones.concat("Dino");

//Q9
flintstones.push("Dino", "Hoppy");
console.log(flintstones);

//Q10
let advice = "Few things in life are as important as house training your pet dinosaur.";
let adviceArray = advice.split(' ');
let index = 0;
for(let i = 0; i< adviceArray.length; i++){
  if(adviceArray[i] === 'house'){
    index = i;
    break;
  }
}
let newArray = [];
for(let i = 0; i < index; i++){
  newArray.push(adviceArray[i]);
}
let newAdvice = newArray.join(' ');
console.log(newAdvice);

//LS answer
let indexOfHouse = advice.indexOf('house');
console.log(advice.slice(0,indexOfHouse));
