var createCounter = function (n) {
  let count = n; // Initialize count with n
  return function () {
    return count++;
  };
};

const counter = createCounter(11);

console.log(counter());
console.log(counter());
console.log(counter());
