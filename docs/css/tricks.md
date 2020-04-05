---
title: CSS Tricks
---

# CSS Tricks

## Shapes
With modern clip path, check out: [online clip path generator](https://bennettfeely.com/clippy/)

<style>

  .box {
    background: slateblue;
    width: 100px;
    height: 100px;
    clip-path: polygon(0 0, 100% 0, 100% 60px, 0 100%);
  }

</style>

<div class="box"></div>

``` css
 /* polygon(x y,  xy, x y, x y); */
  clip-path: polygon(0 0, 100% 0, 100% 200px, 0 100%);
```

### Triangles

<style>
.triangle {
  display: inline-block;
  width: 0;
  height: 0;
}
.triangle-up {
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 70px solid turquoise;
}

.triangle-down {
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 70px solid turquoise;
}

.triangle-right {
  border-top: 40px solid transparent;
  border-left: 70px solid turquoise;
  border-bottom: 40px solid transparent;
  margin-left: 20px;
}
.triangle-top-left {
  border-top: 70px solid turquoise;
  border-right: 70px solid transparent;
  margin-left: 15px;
}
.triangle-bottom-right {
  border-bottom: 70px solid turquoise;
  border-left: 70px solid transparent;
  margin-left: -10px;
}
</style>

<div class="triangle triangle-up"></div>
<div class="triangle triangle-down"></div>
<div class="triangle triangle-right"></div>
<div class="triangle triangle-top-left"></div>
<div class="triangle triangle-bottom-right"></div>

```css
.triangle-up {
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-bottom: 50px solid deeppink;
  }

  .triangle-down {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 70px solid deeppink;
  }

  .triangle-right {
    width: 0;
    height: 0;
    border-top: 40px solid transparent;
    border-left: 70px solid turquoise;
    border-bottom: 40px solid transparent;
  }

  .triangle-top-left {
    width: 0;
    height: 0;
    border-top: 70px solid turquoise;
    border-right: 70px solid transparent;
  }

  .triangle-bottom-right {
    width: 0;
    height: 0;
    border-bottom: 70px solid turquoise;
    border-left: 70px solid transparent;
  }
```