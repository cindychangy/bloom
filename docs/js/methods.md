---
Title: Methods
---
# Methods
Methods are always invoked with dot notation on the value itself and are defined directly on a data type, ie: `string.toUpperCase`

### Trim white space from user input

```js
const todo = addForm.add.value.trim();
```

---

### Remove content of form fields when user submits

```js
addForm.reset();
```

---

### Check if a certain class was clicked

```js
if (e.target.classList.contains('delete')) {
  //do something
}
```

---

### Traverse to parent element

```js
e.target.parentElement.doSomethingHere
```

---

### Appending/Replacing

```js
element.prepend() 
element.append() 
element.replaceChild()
element.replaceWith() 
```

---

### Toggle / Add Class Names

```js
element.classList.toggle('className’);
element.className = "myclassname";
//Add an additional class
element.className += " myclassname”;
```

---

### Adding classes or Id, other attributes

```js
document.setAttribute("class", "myclass");
```

---

### See if something is “included” in something else

```js
element.textContent.includes(thing);
```

---

### A class is included in an element

```js
element.classList.contains(class);
```