module.exports = () => {
  return {
    greet: () => {
      console.log("We are using a module!");
    },
    add: (num1, num2) => {
      console.log("The sum is: ", num1 + num2);
    }
  }
}
// module.exports = {
//   greet: () => {
//     console.log("We are using a module!");
//   },
//   add: (num1, num2) => {
//     console.log("The sum is: ", num1 + num2);
//   }
// }
