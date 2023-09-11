// Shortest solution using the .join array method
function smash(words) {
  return words.join(' ');
}

// Basic non array method solution
function loopSmash(words) {
  let sentence = '';

  while (words.length > 0) {
    sentence += ` ${words[0]}`;
    words.shift();
  }

  return sentence.trim();
}

// Recursive solution
function recursiveSmash(words, sentence = '') {
  if (words.length === 0) return sentence.trim();

  sentence += ` ${words[0]}`;
  words.shift();

  return recursiveSmash(words, sentence);
}

// ========== TEST CASES ========= //
console.log(smash(['hello', 'amazing', 'world']));
console.log(loopSmash(['hello', 'amazing', 'world']));
console.log(recursiveSmash(['hello', 'amazing', 'world']));
