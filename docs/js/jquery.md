---
Title: jQuery
---
# jQuery

### Initiate jQuery

```js
$( document ).ready(function() {
    console.log( "ready!" );
});
```

---

### Window Resize

```js
$(window).resize(function(){
  if ($(window).width() <= 1024){ 
      //do something
  }   
});

//no media query
$(window).on('load resize', function () {
  //do something
});
```
