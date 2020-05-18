---
Title: Window Object
---
# Window Object

### Set Timeout / Set Interval

```js
 //fire once
 setTimeout(() => {
   alert('hello, ninjas');
 }, 3000);

 //fires at intervals
 setInterval(() => {
   console.log('hello');
 }, 1000);

```

### Scrolling
Scrolls you to the top of the page - can attach to a button or whatnot

```js
  window.scrollTo(0, 0);
```

### Window Heights
`clientHeight`, `offsetHeight`, `scrollHeight`,  `clientWidth`, `offsetWidth` and `scrollWidth`


`offsetHeight `
"How much space an element takes up" (does not include hidden)
content & padding + border + scrollbar

`clientHeight`
"The height of visible content" (does not include hidden)
content & padding

`scrollHeight`
"The total size of visible and hidden content"
entire padding + content

[Great visual examples](http://usefulangle.com/post/40/javascript-client-height-vs-offset-height-vs-scroll-height)



