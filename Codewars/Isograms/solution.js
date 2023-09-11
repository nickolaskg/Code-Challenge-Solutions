function isIsogram(str) {
  //...
  let stringMap = {};

  for (let letter of str) {
    if (stringMap[letter.toLowerCase()]) {
      return false;
    } else {
      stringMap[letter] = true;
    }
  }

  return true;
}

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('isogram'));
console.log(isIsogram('aba'));
console.log(isIsogram('moOse'));
console.log(isIsogram('isIsogram'));
console.log(isIsogram(''));
