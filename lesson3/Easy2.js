//Q1
let advice = "Few things in life are as important as house training your pet dinosaur.";
adviceArray = advice.split(' ');
//method 1
for (let i = 0; i < adviceArray.length; i++) {
  if (adviceArray[i] === 'important') {
     adviceArray[i] = 'urgent';
  }
}
console.log(adviceArray.join(' '));
//method 2
//map doesn't work if you don't return a value
let finalResult = adviceArray.map((word) => { 
if (word === 'important') {
 return word = 'urgent';
} 
else {
 return word;
}
});
console.log(finalResult.join(' '));

// LS answer 
console.log(advice.replace('important','urgent'));


//Q2
numbers = [1, 2, 3, 4, 5];
numbersCopy = numbers.map(num => num);
//LS answer
//numbersCopy2 = numbers.slice(0);
console.log(numbersCopy);
//numbersCopy.reverse();
numbersCopy.sort((num1,num2) => num2 - num1);
console.log(numbersCopy);

//bonous question 
numbersCopy3 = [];
numbers.forEach(element => {
  numbersCopy3.unshift(element);
});
console.log(numbersCopy3);

//Q3
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
let number1 = 8;  
let number2 = 95;
numbers.includes(number1);
numbers.includes(number2);

//Q4
let famousWords = "seven years ago...";
//Method 1
//famousWords = "Four score and"+ " " + famousWords;
//console.log(famousWords);
//Method 2
"Four score and".concat(" ",famousWords);
console.log("Four score and".concat(" ",famousWords));

//Q5
numbers = [1, 2, 3, 4, 5];
numbers.splice(2,1);
console.log(numbers);

//Q6
let flintstones = ["Fred", "Wilma"];
["Barney", "Betty"].forEach(name => flintstones.push(name));
["Bambam", "Pebbles"].forEach(name => flintstones.push(name));
console.log(flintstones);



//LS answer
//Method1
console.log(flintstones.concat(["Barney", "Betty"]).concat(["Bambam", "Pebbles"]));
//Method2
flintstones.push(["Barney", "Betty"],["Bambam", "Pebbles"]);
console.log(flintstones.flat());

//Q7
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, 
                    Betty: 3, Bambam: 4, Pebbles: 5 };
//let array = ['Barney',flintstones[Barney]];

let array = Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();
console.log(array);

//Q8
let numbers = [1, 2, 3, 4]; 
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; 
console.log(Array.isArray(numbers));
console.log(Array.isArray(table));
//array is an object, so array is object,so typeof function doesn't work
//console.log(typeof(numbers) === 'array'); xx
//console.log(typeof(table) === 'array'); xx

//Q9
let title = "Flintstone Family Members";
let space = [];
space.length = 40;
let centrePos =   space.length/ 2;
let centrePointTitle = (Math.floor(title.length/2)) + 1;
let insertStartIndex = centrePos - centrePointTitle;
console.log(insertStartIndex);
console.log(title.length);
for (let i = 0; i < title.length; i++){
  space[insertStartIndex] = title[i];
  insertStartIndex++;
}
console.log(space);

//LS answer
let padding = Math.floor((40 - title.length) / 2);
let newTitle = title.padStart((padding + title.length),'*');
console.log(newTitle);

//Q10
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
//LS answer
tArrayST1 = statement1.split('').filter(letter => letter === 't');
console.log(tArrayST1.length);

let tArrayST2 = [];
statement2.split('').map(letter => {if(letter ==='t'){return tArrayST2.push(letter)}});
console.log(tArrayST2.length);

