---
title: Hovers
---

# Hovers

## Link Hovers

<style>
  a.link {
    display: inline-block;
    overflow: hidden;
    transition: all .3s;
    text-decoration: none !important;
    color: #333;
  }

  a.link:after {
    content: "";
    display: block;
    height: 2px;
    width: 100%;
    background: #333;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    margin-top: .1rem;
  }
  a.link:hover:after {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-transition: all .4s;
    transition: all .4s;
  }
</style>

<div class="example">
  <a href="#" class="link">I am an underline hover</a>
</div>

``` scss
  a.link {
    display: inline-block;
    overflow: hidden;
    transition: all .3s;
    text-decoration: none !important;
    color: #333;
  }

  a:after {
    content: "";
    display: block;
    height: 2px;
    width: 100%;
    background: #333;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    margin-top: .`rem;
  }
  a:hover:after {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-transition: all .4s;
    transition: all .4s;
  }
```

## Div Hovers

<style>
.box {
  width: 200px;
  height: 200px;
  background: deeppink;
  cursor: pointer;
  position: relative;
}

.box:hover .hover {
  display: block;
}
.hover {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  text-align: center;
  line-height: 200px;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
}
</style>

<div class="example">
  <div class="box">
    <div class="hover">+31</div>
  </div>
</div>

``` scss
.box {
  width: 200px;
  height: 200px;
  background: deeppink;
  position: relative;

  &:hover .overlay {
   display: block;
  }
}

.overlay {
  display: none;
  background: rgba(0,0,0,0.3);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  line-height: 200px;
  color: #fff;
}
```

``` html
  <div class="box">
    <div class="overlay">+31</div>
  </div>
```