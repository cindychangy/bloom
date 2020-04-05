---
title: Buttons
---

# Buttons
**Best practices**, use an `<a>` tag when the "button" goes to another page or content on a page, and `<button>` if there is no meaningful `href` and an action needs to happen, like an "onclick" in javascript or in a form.


<style>
  .btn {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: .875rem; /* 14px */
    line-height: 2.25rem; /* 36px */
    font-weight: 500;
    letter-spacing: .0892857143em;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0 16px;
    display: -ms-inline-flexbox;
    display: inline-flex;
    position: relative;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    min-width: 64px;
    border: none;
    outline: none;
    overflow: visible;
    vertical-align: middle;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
    transition: all .2s;
  }

  .btn--purple {
    background: slateblue;
    color: #fff;
    height: 36px;
  }

  .btn--purple:hover {
    background: slategray;
  }

  .btn--rounded {
    border-radius: 18px;
  }
</style>

<div class="component">
<button class="btn btn--purple">Regular button</button>
<button class="btn btn--purple btn--rounded">Rounded button</button>
</div>

``` scss
  .btn {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: .875rem; /* 14px */
    line-height: 2.25rem; /* 36px */
    font-weight: 500;
    letter-spacing: .0892857143em;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0 16px;
    display: -ms-inline-flexbox;
    display: inline-flex;
    position: relative;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    min-width: 64px;
    border: none;
    outline: none;
    overflow: visible;
    vertical-align: middle;
    cursor: pointer;
    transition: all .2s;
    border-radius: 4px; /* 18px; for rounded button */
  }

  .btn--purple {
    background: slateblue;
    color: #fff;
    /* size should be declared in seperate classes, not in base */
    height: 36px;

    &:hover {
      background: slategray;
    }
  }
```

``` html
<button class="btn btn--purple">I am a button</button>
<!-- <a href="#" role="button">I am a button</a> -->
<!-- <button><i class="some_icon"></i><span class="some_text">Read More</span></button> -->
```
