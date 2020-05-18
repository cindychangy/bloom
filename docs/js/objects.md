---
Title: Objects
---
# Objects

**Constructers** - create a new object for you

---
### Accessing Properties
```js
var myObj = {
  prop1: "val1",
  prop2: "val2"
};

var prop1val = myObj.prop1; // val1
```
---

### Add new properties 
```js
// Add a "bark" property dog object:
dog.bark = "bow-wow”;
dog["bark"] = "bow-wow”;
```

---

### Delete properties 
```js
delete dog.bark;
```

### See if Property Exists

`.hasOwnProperty(propname)` can determine if that object has the given property name. It returns true or false 


```js
myObj.hasOwnProperty("top");
```

### Spread

```js
const person = {
    name: ‘cindy’,
    age: 30
}

//create clone of original object with new value
const personClone = {…person, location: ‘haarlem'}
```