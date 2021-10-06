//Q1
let arr = ['10', '11', '9', '7', '8'];
//let arrNumeric = arr.map(elem => Number(elem));
arr.sort((a,b) => Number(b) - Number(a));
console.log(arr);

//Q2
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a,b) => Number(a['published']) - (b['published']));
console.log(books);

//Q3
let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
console.log(arr1[2][1][3]);
let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
console.log(arr2[1].third[0]);
let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
console.log(arr3[2].third[0][0]);
let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
console.log(obj1['b'][1]);
let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}
console.log(Object.keys(obj2['third'])[0]);

//Q4
let arr1 = [1, [2, 3], 4];
arr1[1][1] = 4;
let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4;
let obj1 = { first: [1, 2, [3]] };
obj1.first[2][0] = 4;
let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj2.a.a[2] = 4;

//Q5
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let ageMaleSum = 0;
for (let key in munsters) {
  if (munsters[key].gender === 'male') {
     ageMaleSum += munsters[key].age;
  }
}
console.log(ageMaleSum);

//Q6
for (let key in munsters) {
  console.log(`${key} is a ${munsters[key].age}-year-old 
  ${munsters[key].gender}.`);
}

//Q7
let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;
//a = 2, b [3, 8]

//Q8
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach(element => {
  element.forEach(elem => {
    elem.split('').forEach(letter => {
      if (['a','e','i','o','u'].includes(letter)) {
        console.log(letter);
      }
    })
  })
});

//Q9
let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
console.log(arr);
let sortedArr = arr.map(subArr => {
  if (typeof subArr[0] === 'number') {
    return subArr.slice().sort((a,b) => a - b );
  } else {
    return subArr.slice().sort();
  }
}    
);
console.log(sortedArr);

//Q10
let sortedArrDesending = arr.map(subArr => {
  if (typeof subArr[0] === 'number') {
    return subArr.slice().sort((a,b) => b - a);
  } else {
    return subArr.slice().sort().reverse();
  }
});
console.log(sortedArrDesending);

//Q11
let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
let arrCopy = arr.map(obj => {
   let objCopy = {};
   Object.assign(objCopy,obj);
   for(let key in objCopy) {
     objCopy[key] += 1;
   }
   return objCopy;
});

console.log(arr);
console.log(arrCopy);

//Q12
let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let arrByThree = arr.map(subArr => subArr.filter(num => num%3 === 0));
console.log(arrByThree);
console.log(arr);

//Q13
let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
// my own answer
let arrOddNumsSum = arr.map(subArr => {
  return subArr.filter(num => num%2 !== 0).reduce((accum,elem)=> accum + elem,0);
});
console.log(arrOddNumsSum);

let resultObj = {};
arrOddNumsSum.forEach((sum,index) => resultObj[sum] = arr[index]);
console.log(resultObj);

arrOddNumsSum.sort((a,b)=> a - b);

let resultArr = [];

for (let i = 0; i < arrOddNumsSum.length; i++) {
  let orderKey = arrOddNumsSum[i];
  for(let key in resultObj) {
    if (Number(key) === orderKey) {
      resultArr.push(resultObj[key]);
    }
  }
}
console.log(resultArr);
//LS answer
arr.sort((a,b) => 
   a.filter(elem => elem%2 !== 0).reduce((accum,elem)=> accum + elem,0) -
   b.filter(elem => elem%2 !== 0).reduce((accum,elem)=> accum + elem,0)

);
console.log(arr);

//Q14
let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let result = [];

for(let key in obj) {  
  if (obj[key].type === 'fruit') {
    result.push(obj[key].colors.map
      (elem => 
      elem.charAt(0).toUpperCase()+ elem.slice(1)
      )
    );
  } else {
    result.push(obj[key].size.toUpperCase());
  }
}
console.log(result);

//Q15
let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let isAllEven = object =>  {
  /*let allEven = true;
  let arrays = Object.values(object);
  for(let i = 0; i < arrays.length; i++) {
    if(!arrays[i].every(num => num%2 === 0)){
      allEven = false;
      break;
    }
  }
  return allEven;
  //LS answer
  return Object.values(object).every(subArr => subArr.every(num => num%2 === 0));
};

resultObj = arr.filter(obj => isAllEven(obj));
console.log(resultObj);

//Q16
let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
let resultObj = {};
arr.forEach(element => resultObj[element[0]] = element[1]);
console.log(resultObj);

//Launch answer
console.log(Object.fromEntries(arr));

//Q17
function getUUID () {

 let resultIdArr = [];
 let sessionDigitsArr = [8,4,4,4,12];
 let charsArr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
 for(let i = 0; i < sessionDigitsArr.length; i++){

  for(let j = 0; j < sessionDigitsArr[i]; j++) {
      let char = charsArr[Math.floor(Math.random()*charsArr.length)];
      resultIdArr.push(char); 
    }
   if(sessionDigitsArr[i] !== 12){
     resultIdArr.push('-');
    }
  }
  return resultIdArr.join('');
 }

let UUID = getUUID();
console.log(UUID);

function evenValues(array) {
  let evens = [];

  array.forEach(value => {
    console.log(value);
    console.log(array);
    if (value % 2 === 0) {
      evens.push(value);
    }
   
   console.log(array.shift());
   console.log(array);
  });

  return evens;
}

evenValues([1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]);