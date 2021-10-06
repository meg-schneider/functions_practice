// function declaration
// greetPeople();

// function greetPeople() {
//   console.log("Good Morning!");
// }

// function expression
// used more commonly in JavaScript. you cannot invoke a
// function expression before it appears in your program
let greetPeople = function () {
  console.log("Good Morning!");
};

greetPeople();

// Any function definition that doesn't have the 
// word function at the very beginning of a statement 
// is a function expression