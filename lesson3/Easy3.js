/*//Q1
let numbers = [1, 2, 3, 4];
//M1
lengthOfNums = numbers.length;
for(let i = 0 ; i < lengthOfNums; i ++) {
  numbers.pop();
}
//M2
for(let i = 0 ; i < lengthOfNums; i ++) {
  numbers.shift();
}
//M3
numbers.splice(0,numbers.length);
console.log(numbers);
//LS answer 
numbers.length = 0;
while (numbers.length) {
  numbers.pop();
}

//Q2
console.log([1, 2, 3] + [4, 5]);
//output 1,2,34,5 
//process '1,2,3'+'4,5" = '1,2,34,5'

//Q3
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);
//output: "hello there";

//Q4
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

let arr3 = arr1.map(element => element);
console.log(arr3);
arr3[0].first = 50;
console.log(arr1);

//arr1 has been modified also.

//Q5

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

function isColorValid(color) {
   return color === "blue" || color === "green";
}

function isColorValid(color) {
  let isValid = color === "blue" || color === "green";
  return isValid;
}

let isColorValid = color => color === "blue" || color === "green";
//third answer form LS
let isColorValid = color => ['blue','green'].includes(color);*/




