---
Title: Arrays
---
# Arrays

### Create a new array

``` js
const food = new Array(‘pizza’, ‘cookies’);
```

### Push 
moves something to **end**

``` js
var arr = [1,2,3];
arr.push(4);
// arr is now [1,2,3,4]
```

### Pop
removes the **last element** from an array and **returns it**

``` js
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();

// oneDown now equals 6
```

### Shift
removes **first element**

``` js
myArr.shift()
```

## unShift
**adds** the element at the **beginning** of the array

``` js
myArr.unshift()
```

## Splice
adds/removes items to/from an array, and returns the removed item(s) - mutates original array

```js
//add items
let animals = [“cat”, “dog”, “horse"];
animals.splice(1, 0, “turtle”)
//inserts “turtle” at position 1, —> [“cat”, “turtle”, “dog”, “horse”]

//remove items
let animals = [“cat”, “dog”, “horse"];
animals.splice(1, 1)
//removes 1 item at position 1 —> [“cat”, “horse”]
```


