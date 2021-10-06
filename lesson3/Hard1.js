
//Q4
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4){
    return false;
  } else {
    let isValid = true;
    for(let i = 0; i < dotSeparatedWords.length; i ++){
      let word = dotSeparatedWords[i];
      if(!isAnIpNumber(word)){
        isValid = false;
      }
    }
    return isValid;
  }
}

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

console.log(isDotSeparatedIpAddress('0000.0004.5.11'));
