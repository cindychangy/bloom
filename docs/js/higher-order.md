---
Title: Higher Order Functions
---
# Higher Order Functions
Functions that operate on other functions, either by taking them as arguments or by returning them.

A lot of these use parameters: **element**, **index**, and **array**.

## Filter
returns a **new array** with elements that have passed the “test”

```js
const persons = [
    { name: ‘Peter’, age: 16 },
    { name: ‘Mark’, age: 18 },
    { name: ‘John’, age: 27 }
    }
]

function fullAge = persons.filter(item) {
    return person > 18;
});
//returns John

//es6
const fullAge = persons.filter(person => person.age >= 18);
```

## Each
Cycles through each element (can use this on a nodelist)

```js
let arr = [1, 2, 3]

arr.forEach(element => {
    console.log(element);
});
//returns 1, 2, 3

//es6
arr1.forEach((element) => console.log(element));

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};
```

## Map
Applies an action to all of it’s elements and builds a new array from the modified values and returns them

```js
const arr1 = [1, 2 ,3 ];
const arr2 = arr1.map(function(item) {
    return item * 2;
});
//returns [2, 4, 6]

//es6
const arr2 = arr1.map(item => item * 2);
```

## Reduce
Computes a single value from an array. taking a single value from the array and combining it with the current value.

The reducer function (callback) accepts four parameters: accumulator, currentValue, currentIndex, sourceArray.

```js
const arr = [5, 7, 1, 8, 4 ];
const sum = arr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
//returns sum

//provide an initial starting value
const sum = arr.reduce(function(accumulator, currentValue) {
  //do something
}, 10);
```

