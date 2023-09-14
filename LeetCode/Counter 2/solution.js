var createCounter = function (init) {
  let counter = init;

  return {
    increment: function () {
      return ++counter;
    },
    reset: () => {
      return (counter = init);
    },
    decrement: () => {
      return --counter;
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
