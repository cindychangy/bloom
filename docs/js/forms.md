---
Title: Forms
---
# Forms

### Keep form from submitting 

```js
form.addEventListener('submit', e => {
  e.preventDefault();
});
```

---

### Get user input

```js
myInput.value

//* For a form with multiple inputs, can access by dot notation
form.someInput.value
```
