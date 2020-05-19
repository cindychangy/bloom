---
Title: Local Storage
---
# Local Storage
Local storage is stored in the browser, in the window object. Can view by typing `localStorage` in console

### Setting data

```js
 localStorage.setItem('nameOfKey', 'valueOfKey’);

 //example:
 localStorage.setItem('name', 'Cindy');
```

---

### Getting data 

```js
let name = localStorage.getItem('nameOfKey');
```

---

### Updating data

```js
//2 ways to change values:
localStorage.setItem('name', 'luigi’);
localStorage.name = 'Cindy’;

//have to retrieve item again to have change take effect
name = localStorage.getItem('name');
```

---

### Deleting data

```js
localStorage.removeItem('name');

//retrieve again for it to take effect
name = localStorage.getItem('name’);

//clear everything
localStorage.clear();
```

---

### Parsing data into JSON and vice versa
Local storage only supports strings as values and if you want to store things in an array you can use ‘JSON.parse’ to convert the content of local storage into something you can work with.

```js
const todos = [
{text: 'play mariokart', author: 'shaun'},
{text: 'buy some milk', author: 'mario'},
{text: 'buy some bread  ', author: 'luigi'}
];

//turn data into JSON string so you can save to local storage
localStorage.setItem('todos', JSON.stringify(todos));

//retrieve data
const stored = localStorage.getItem('todos');

//turn data back into an array so we can use it
console.log(JSON.parse(stored));
```
