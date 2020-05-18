---
Title: Arrays
---
# Arrays

## Create a new array

``` js
let food = new Array(‘pizza’, ‘cookies’);

let newArray = Array.from([1, 2, 3]);
// newArray = [1, 2, 3]

let newArray = Array.from([2, 4, 6], number => number * 2);
// newArray = [4, 8, 12]

Array.from(‘foo’);
// [‘f’, ‘o’, ‘o’]
```

## Push 
moves something to **end**

``` js
var arr = [1,2,3];
arr.push(4);
// arr is now [1,2,3,4]
```

## Pop
removes the **last element** from an array and **returns it**

``` js
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
// oneDown now equals 6
```

## Shift
removes **first element**

``` js
myArr.shift()
```

## Splice
adds/removes items to/from an array, and returns the removed item(s) - mutates original array

```js
//add items
let animals = [“cat”, “dog”, “horse"];
animals.splice(1, 0, “turtle”);
//inserts “turtle” at position 1, —> [“cat”, “turtle”, “dog”, “horse”];

//remove items
let animals = [“cat”, “dog”, “horse"];
animals.splice(1, 1)
//removes 1 item at position 1 —> [“cat”, “horse”]
```

## unShift
**adds** the element at the **beginning** of the array

``` js
myArr.unshift()
```


## Spread
Copy items from one array to another with spread

```js
arr1 = […arr2];
```


## Rest
Variables a and b take the first and second values from the array, when you use the `<some word>` it bundles up the other arguments into an array

```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]
```


## Included
```js
myArr.includes(‘dogs’);
// returns true or false
```

## Index 
```js
let thing = indexOf(‘someElement’);
// gets array position of this element
```

## Join
```js
let newThing = someArray.join(‘,’);
// joins all elements with a comma inbetween

let result = namesArray.concat([‘newthing1’, ’newthing2’]);
// gets array position of this element
```

