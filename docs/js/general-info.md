---
Title: General Info
---
# General Info

`null` - usually an( intentional) value given to something

`undefined` - when no value was given to something you want the browser to define (unintentional), so browsers automatically the value of undefined`

---


### This
**This** represents the current context in which the code is being executed.
JS sets 'this’ to the object that the method was called on

**In an arrow function** has the same value as the context in which the arrow function was created (window). So if you this in a call back function will refer to window, whereas function will refer to the element it was called on.

---

### Hoisting
When things are made available before their declaration, ie: variables (variable hoisting acts like all the variables are declared at the top).

Function declarations are also hoisted, except functions that are assigned to variables.

---

### Math Random

```js
Math.random() //gives some random decimal number

Math.floor() //rounds the random number to a whole one
Math.floor(Math.random() * 20); //get a random number, multiply by 20 and return the whole number. This will return a number between 0 and 19.
```

---

### Generate Random Numbers

```js
Math.floor(Math.random() * (max - min + 1)) + min
```

---

### Ternary Operators

```js
  const result = condition ? 'value 1' : 'value 2’;

  // use multiple conditions
  return (num == 0) ? “zero” : (num > 0) ? “positive” : “negative”;
```