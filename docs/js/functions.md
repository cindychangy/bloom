---
title: Functions
---

# Functions

### Old school function call

``` js
const myFunc = function(a, b) {
  return a + b;
}
```

### ES6 arrow function
*Arrow functions don’t bind the 'this' keyword, it would refer to the window object when used


``` js
const myFunc = (a, b) => {
  return a + b;
}

//shorthand if there is only a return statement
const myFunc = (a, b) => a + b
```

### Using default parameters

``` js
function greeting(name = "Anonymous") {
  return "Hello " + name;
}

greeting("John"); // Hello John
greeting(); // Hello Anonymous
```

### Rest Operators

``` js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}

console.log(howMany(0, 1, 2)); // You have passed 3 arguments
```