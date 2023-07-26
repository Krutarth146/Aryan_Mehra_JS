// Arrow Functions

let cube = (num) => {
  return num * num * num;
};

console.log(cube(70));

let square = (num) => num * num; // One line

console.log(square(5));

const kru = (count) => {
  for (let i = 0; i < count; i++) document.write("Hello World ");
};

kru(3);

console.clear();

// Callbacks
//  When function pass as an argument to another function then it is called as callback

// Method - 1

const calculate = (a, b, operation) => {
  return operation(a, b);
};

const addition = calculate(5, 9, function (num1, num2) {
  return num1 + num2;
});

console.log(addition);

// Method - 2

const subtraction = (a, b) => a - b;

const subResult = calculate(5, 9, subtraction);

console.log(subResult);

// Method - 3

function multiply(a, b) {
  return a * b;
}

const myResult = calculate(3, 9, multiply);

console.log(myResult);
