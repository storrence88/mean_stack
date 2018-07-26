module.exports = () => {
  return {
    add: (num1, num2) => {
      console.log(`${num1} plus ${num2} equals: ${num1 + num2}`);
    },
    multiply: (num1, num2) => {
      console.log(`${num1} times ${num2} equals: ${num1 * num2}`);
    },
    square: (num) => {
      console.log(`${num} squared equals: ${num * num}`);
    },
    random: (num1, num2) => {
      console.log(`A random number between ${num1} and ${num2} is: ${Math.floor((Math.random() * num2) + num1)}`);
    }
  }
};