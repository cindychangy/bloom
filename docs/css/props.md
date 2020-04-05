---
title: CSS Properties
---

# Common CSS Properties

## Box shadow

``` css
 /* box-shadow: X-value, Y-value, blur, color */
 box-shadow: 0 10px 20px rgba(0, 0, 0, .2);
```

## Text Alignment

Center align text:

```css
 .element {
  /* in relation to parent */
   top: 50%;
   left: 50%;  
   /* in relation to element itself, (move it 50% to the left and top) */
   transform: translate(-50%, -50%);
  }

    /* move something up on either axis */
    transform: translateY(-3px);
```

Set text in 2 columns:

``` css
 column-count: 2;
 column-gap: 4rem; 
 /* adds a border */
 column-rule: 1px solid $cecece;
 /* auto adds hyphens to text */
 hyphens: auto
```

## Text Highlight
Highlight cover when mouse drags over text

``` css
 ::selection {
   background: orange;
   color: #fff;
 }

 ::mod-selection {
    background: orange;
    color: #fff;
 }
```

## Gradients
Gradients always have to be defined by background image, (include direction and the colors you want)

<style>
  .gradient {
    background-image: linear-gradient(to right, deeppink , darkturquoise);
    width: 100%;
    height: 40px;
    border-radius: 4px;
    margin-bottom: 20px;
  }
</style>

<div class="gradient"></div?>

``` css
#gradient {
  background-image: linear-gradient(to right, deeppink, darkturquoise);
  /* to bottom right...ect */
}
```
<br>

<style>
  .gradient-2 {
    background: linear-gradient(to right, rgba(255, 20, 147,1) 0%,rgba(125,185,232,0) 100%);
    width: 100%;
    height: 40px;
    border-radius: 4px;
    margin-bottom: 20px;
  }
</style>

<div class="gradient-2"></div?>

``` css
  #gradient {
    background: linear-gradient(to right, rgba(255, 20, 147,1) 0%,rgba(125,185,232,0) 100%);
  /* to bottom right...ect */ 
  }
```
<br>


<style>
  .gradient-3 {
    background: linear-gradient(135deg,#00BFFF 50%,#fff 49%,#fff 100%);
    width: 100%;
    height: 40px;
    border-radius: 4px;
    margin-bottom: 20px;
  }
</style>

<div class="gradient-3"></div>

``` css
  #gradient {
    background: linear-gradient(135deg,#00BFFF 50%,#fff 49%,#fff 100%);
  }
```


**gradient over background image:**

``` css
.hero-banner {
    background-image: linear-gradient(
    to right bottom, 
    rgba(126, 213, 11, 0.8), 
    rgba(40, 180, 131, 0.8)), 
    url('../img/hero.jpg');
}
```
