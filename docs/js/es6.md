---
Title: ES6
---
# ES6

### Sets
A new data structure - can store a list of **unique values**

```js
 const nameSet = new Set(someArray); 

//Other methods you can use:
someSet.add(value);
someSet.delete(value);
someSet.size(); (returns length)
someSet.has(value); (returns true/false)
someSet.clear();
```

### Template Strings

```js
let title = ‘dogs’
`I like ${title}`
```

### Spread values back into an array

``` js
 const uniqueNames = [...newSet(namesArray)]
```
