// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// function selectFruit(obj) {
 
//   let result = { };

//   for (let key in obj){

//     if (obj[key] === 'Fruit') {
//       result[key] = obj[key];
//     }
//   }
//   return result;
// }

// console.log(selectFruit(produce));

// let myNumbers = [1, 4, 3, 7, 2, 6];

// function doubleNumbers(arr) {

//   for (let i = 0; i < arr.length; i++) {
//     let doubleNum = myNumbers[i] * 2;
//     myNumbers[i] = doubleNum;
//   }
//   return myNumbers;
// }

// function multiply(nums, factor) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result[i] = nums[i] * factor;
//   }
//   return result;
// }

// //doubleNumbers(myNumbers);
// console.log(myNumbers);

// function doubleBasedOnIndices(arr) {
 
//   let result = [];
//   for (let index = 0; index < arr.length; index++) {
//       if (index % 2 === 1) {
//         result[index] = arr[index]*2;
//       } else {
//         result[index] = arr[index];
//       } 
//   }
//   return result;
// }

// console.log(doubleBasedOnIndices(myNumbers));

// console.log([1, 2, 3].map(num => {
//   num * 2;
//  }));

//  let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

//  let flintstonesObj = {};
//  let index = 0;

//  flintstones.forEach((elem,index) => {flintstonesObj[elem] = index;});

//  console.log(flintstonesObj);

//  let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// let ageSum = Object.values(ages).reduce((accum,elem) => accum+elem,0);
// //console.log(ageSum);

// let ageArr = Object.values(ages);
// let minAge;
// ageArr.sort((a,b) => a - b);
// console.log(ageArr[0]);

// console.log(Math.min(...ageArr));


let statement = "The Flintstones Rock";

let statementArr = statement.split('');
let resultObj = {};


for (let i = 0; i < statementArr.length; i++) {
  let currentLetter = statementArr[i];
  let currentLetterNum = 0;
  for(let j = 0; j < statementArr.length; j++) {
      if (currentLetter === statementArr[j]) {
        currentLetterNum ++;
      }
  } 
  if (currentLetter !== ' '){
    resultObj[currentLetter] = currentLetterNum;
  }
}
console.log(resultObj);