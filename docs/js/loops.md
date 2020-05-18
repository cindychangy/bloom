---
Title: Loops
---
# Loops

### Do/While
It first will **do** one pass of the code inside the loop no matter what, and then it runs **while** a specified condition is true and stops once that condition is no longer true. 

```js
var ourArray = [];
var i = 0;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
```
