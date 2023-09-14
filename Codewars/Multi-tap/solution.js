function presses(phrase) {
  // Convert the input phrase to uppercase and split it into an array of characters
  phrase = phrase.toUpperCase().split('');

  // Define an array that maps each character to the number of button presses
  let digitSets = [
    '1',
    'ABC2',
    'DEF3',
    'GHI4',
    'JKL5',
    'MNO6',
    'PQRS7',
    'TUV8',
    'WXYZ9',
    ' 0',
  ];

  // Use the reduce to calculate the total number of button presses
  let totalPresses = phrase.reduce((a, c) => {
    let temp = 0;
    c = c.toUpperCase();

    // Find the button that contains the current character and calculate its position
    let button = digitSets.filter((set) => set.indexOf(c) > -1);
    return a + button[0].indexOf(c) + 1; // Add the number of presses for the current character
  }, 0);

  return totalPresses; // Return the total number of button presses
}

console.log(presses('how r u')); // Should return 13
