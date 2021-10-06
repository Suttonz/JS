let words = ['go', 'ahead', 'and', 'jump'];
let wordsLengthArr = words.map(word => word.length);
wordsLengthArr.sort((a,b) => b - a);
let sortedWordsbyLength = [];

/*for (let i = 0; i < wordsLengthArr.length; i ++){
  let wordLength = wordsLengthArr[i];
  for (let j = 0 ; j < words.length; j++){
    if(words[j].length === wordLength){
      sortedWordsbyLength.push(words[j]);
    }
  }
}
console.log(sortedWordsbyLength);



//LS answer

words.sort((a,b)=>{
 if (a.length < b.length){
   return -1;
 } else if (a.length > b.length) {
   return 1;
 } else {
   return 0;
 }
});



words.sort((a,b) => a.length - b.length);
console.log(words);*/