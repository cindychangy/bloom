---
title: BEM
---

# Block Element Modifier
<br>

``` css
.block {}
.block__element {} 
 /* an element is tied to it’s block and has no standalone meaning */
.block__element—modifier {} (this is an extra class name you add to blocks)
```

---
In action in stylesheet:

``` css
/* Block Element */
.btn {}

/* Element that depends on the block */
 .btn__price {}

/* Modifier that changes style of the block */
.btn--orange {} 
.btn--big {}
```

---
In action in HTML:

``` html
<div class=“card card—-black">
  ...
</div>

<div class=block>
    <div class=“block__header></div>
</div>
```