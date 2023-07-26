// Functions

// 1. Named Functions

function Aaryan() {
    console.log("Without args and without return Type");
  }
  
  Aaryan();
  
  s1("Krutarth");
  
  function s1(name) {
    console.log("Hello", name);
  }
  
  function s3() {
    return "Manoj";
  }
  
  console.log(s3());
  
  function Mithil(name) {
    return name;
  }
  
  let x = Mithil("Harsh");
  console.log(x);
  
  // ----------------------------------------------------------
  
  // 2. Anonymous Function
  
  let kru1 = function (name) {
    console.warn("Hello " + 1, name);
  };
  
  kru1("Manojjjjjj");
  console.log(typeof kru1);
  
  // 3. Arrow Functions
  
  let kru2 = () => {
    console.warn("Hello ", "This is Arrow Fun.");
  };
  
  kru2();
  
  let kru3 = (num) => num * num;
  
  console.log(kru3(25));
  
  // 4. Immediately Invoked Function Expression
  // (IIFE)
  
  var greeting = "Hello Ramesh"; // global Variable
  var num1 = 90;
  
  (function (y) {
    console.log(greeting, num1);
    console.log(y);
  })(greeting, num1);
  
  const friendlyFun = (function () {
    let greetCount = 0;
    return function () {
      console.log(`Hello ${greetCount}x`);
      return greetCount++;
    };
  })();
  
  friendlyFun();
  friendlyFun();
  friendlyFun();
  friendlyFun();
  
  // Hoisting
  
  // 5. Higher Order Function
  
  function Higher_order_fun(fun, a, b, x) {
    return fun(a, b, x);
  }
  
  function arya(p, q, c) {
    console.log(p, c);
    return p - q;
  }
  
  console.log(Higher_order_fun(arya, 3, 4, 8));
  
  // 6. Recursive Function
  
  function Recursive1(num) {
    if (num == 1) {
      return 1;
    }
  
    console.log(num);
    return num * Recursive1(num - 1);
  }
  
  console.log(Recursive1(5));
  
  // Fibonacci
  