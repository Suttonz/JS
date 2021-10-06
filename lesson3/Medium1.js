/*
**** Not working solution for Q1*****
let str = 'The Flintstones Rock!';
let space ='**';
let result = '';
for (let i = 0; i < 10; i ++) {
  space.concat('*');//return a string, need a variable to catch return value
  result = str.padStart(space.length + str.length,'*');
  console.log(result);
}*/

//Q1
let str = 'The Flintstones Rock!';
for (let i = 0; i < 10; i++){
  let result = str.padStart(i+str.length,' ');
  console.log(result);
}

//Q2
/*let munstersDescription = "The Munsters are creepy and spooky.";
let result = [ ];
for (let i = 0; i < munstersDescription.length; i++) {
  if (munstersDescription[i] === munstersDescription[i].toUpperCase()) {
    result.push(munstersDescription[i].toLowerCase());
  } else if (munstersDescription[i] === ' ') {
    result.push(' ');
  } else {
    result.push(munstersDescription[i].toUpperCase());
  }
}
console.log(result.join(''));*/

//Q3
/*function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}
console.log(factors(-1));
// my answer is not right , 
// because the requirement is not raise an execption
function factorsCorrection(number) {
  let factors = [];
  let divisor = number;

  if (number <= 0) {
    return factors;
  } else {
   for (let i = 1; i <= number; i++) {
     if(number % divisor === 0){
       factors.push(number/divisor);
       divisor --;
     }
   }
  }
  return factors;
}
console.log(factorsCorrection(0));
//LS answer
function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}
console.log(factors(-1));

//Q4

//Q5

console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);
//Q6
//Q7
let nanArray = [NaN];
console.log(nanArray === NaN);
console.log(Number.isNaN(nanArray[0]));
//Q8
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};
Object.values(munsters).forEach(element => {
  element['age'] = 4444; 
  element['gender'] = 'llalalla';
});*/
//Q9



