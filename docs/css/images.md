---
title: CSS Images
---

# Images
**Lossless** - reduction in size with no compromise in quality
*every single bit of data that was ORIGINALLY in the file remains after it is uncompressed

**Lossy** - better size but loose quality

**WebP** - besides showing all the pixels in something, it predicts the values of colors of neighboring pixels and only encodes the difference between the actual values and predictions - saves you lots of size!


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
