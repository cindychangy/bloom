---
Title: Requests
---
# Requests

### Async
Parallel programming which something runs separately from the main working thread and returns a success or error. It makes code non-blocking. Ie: starting a request to a DB and doing something after you get all the info, while other tasks are running

**Anything** with ‘async’ in front of it, returns a promise.

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

---

### Request Codes

`200` - Accepted

`301` - Moved Permanently

`400` - Bad Request

`404` - Not Found

`500` - Internal Server Error

`502` - Bad Gateway (server acting as gateway got invalid response)

---

### Fetch API (built in native function)
1. fetch data
2. take response and return it as response.JSON (which returns a promise)
3. tack on .then and fire function that gives you access to the data

```js
 //this returns a promise
 fetch('json/luigi.json').then((response) => {
  console.log('resolved', response);
  return response.json(); //parses data
 }).then(data => {
  console.log(data);
 }).catch((err) => {
  //you will only get rejected if there is a server error
  console.log('rejected', err);
 });
```
