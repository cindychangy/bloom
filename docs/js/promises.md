---
Title: Promises
---
# Promises
Something that takes some time to do, either it is resolved or rejected. A good way to doing things sequentially.

```js
// promise example
 const getSomething = () => {
  return new Promise((resolve, reject) => {
    // fetch something
    resolve(data);
    reject(error);
  });
 }

 getSomething().then(data => {
  console.log(data);
 }).catch(err => {
  console.log(err);
 })
```

### Chaining Promises

```js

 getTodos('json/luigi.json').then(data => {
  console.log('promise 1 resolved:', data);
  return getTodos('json/mario.json');
 }).then(data => {
  console.log('promise 2 resolved:', data);
  return getTodos('json/shaun.json');
 }).then(data => {
  console.log('promise 3 resolved:', data);
 }).catch(error => {
  console.log('promise rejected:', error);
 })
```
