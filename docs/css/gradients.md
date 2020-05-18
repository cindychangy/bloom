---
title: Gradients
---

# Gradients
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
