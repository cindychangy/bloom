---
title: CSS Images
---

# Image Effects

## Image Filters

``` css
img {
  filter: grayscale(100%);
  filter: blur(5px);
  filter: brightness(200%);
  filter: contrast(200%);
  filter: drop-shadow(8px 8px 10px gray);
  filter: hue-rotate(90deg);
  filter: invert(100%);
  filter: saturate(800%);
  filter: sepia(100%);
}

/* using multiple filters */
img {
  filter: contrast(200%) brightness(150%);
}
```

## Clip Text
Text with Background image

``` css
.text {
  background-image: linear-gradient(to right, lightblue, darkblue);
  display: inline-block;
  /* clip text to show background */
  -webkit-background-clip: text;
  color: transparent;
 }
```
