//1.
 /*let isOdd = (num) => (num%2 === 0)? false : true;
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-14)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); */


//standard answer
//function isOdd(number) {
 // return Math.abs(number) % 2 === 1;
//} 
// reminder operator return - values when the apprend on the left is 
//a negative value, so for that reason we need to use Math.abs() to 
//convert left value to a positive value then we can check if the reminder 
// is -1 or 0 


/*//2.
for(let i = 0; i <= 99; i++){

  if (i % 2 === 0){
    continue;
  }
  else {
    console.log(i);
  }
}*/
//3.
/*function logEvenNumber (start, end){
  
   if(start > end){
     return;
   }

   if (start % 2 === 0){
       console.log(start);
   }

    logEvenNumber(start+1, end);
   
  }

  logEvenNumber(1,99);*/

  //4.
  /*const square_meter_sqareFeet = 10.7639;
  let readlineSync = require('readline-sync');
  let length = Number(readlineSync.question('Enter the length of the room:\n'));
  let width = Number(readlineSync.question('Enter the width of the room:\n'));
  let input = readlineSync.question('you input meters or feet? (m/f):\n');
  if(input.toUpperCase()=== 'M'){
   console.log(`The area of the room is ${length*width} square meters`);
  }else{
  console.log(`The area of the room is ${(length*width*square_meter_sqareFeet).toFixed(2)}square feet)`);
  }*/
  

