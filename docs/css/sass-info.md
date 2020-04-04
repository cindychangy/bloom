---
title: SASS Info
---

<h2>General Info</h2>

<h3>Variables</h3>

``` scss
$headings-color: green;

h1 {
  color: $headings-color;
}
```
<hr>

<h3>Mixins</h3>

``` scss
@mixin flex {
 display: flex;
 justify-content: center;
 flex-direction: row;
}

.element {
 @include flex;
}
```
<hr>

<h3>Extend</h3>
<p>Borrow attributes from another element</p>

``` scss
%panel{
  background-color: white;
  height: 70px;
} 

.sidebar-panel{
  @extend %panel;
} 
```
<hr>

<h3>If/Else</h3>

``` scss
@mixin border-stroke($val) {
  @if $val == light {
    border: 1px solid black;
  }
  @else if $val == heavy {
    border: 4px solid green;
  @else {
    border: none;
  }
} 

#box {
 @include border-stroke(medium);
}
```