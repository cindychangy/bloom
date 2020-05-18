---
Title: Event Listeners
---
# Event Listeners
**e** - when using an event listener like a click event, the browser automatically gives us an event(e) parameter that contains info about that event.

**e.target** = what was the element that was initially clicked

---

### Event Bubbling
Example: in an `<ul>`, if you click on an `<li>` it will fire whatever is attached to that but then it will also bubble up and fire whatever is attached to the `<ul>`.

IF you don’t want that to happen - you can stop event propagation from bubbling up:

```js
e.stopPropogation();
//This goes in child element, where you don’t want bubbling up to the parent
});
```

---

### Event Delegation
A proper way to add event listeners to multiple elements.

Example: you have 20 `<li>` elements you want to add a listener too on a page. Setting up a event listener in the parent and delegating it to it’s children.

Here instead of setting up an event listener to each `<li>` - you would just set it up in the `<ul>`

```js
ul.addEventListener(‘click’, e => {
  console.log(‘i was clicked);
}
```

### Add Listeners to Elements

```js
 element.addEventListener('click', () => {
  //do something
 });

 element.onchange = function () {
  //do something
 };

  element.addEventListener('change', function(){
  //do somerthing
 })

  element.addEventListener('keyup', e => {
  if (e.keyCode === 13) {
    //do something when enter is hit
  }
 })
```

