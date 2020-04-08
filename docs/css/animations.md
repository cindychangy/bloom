---
title: CSS Animations
---

# Animations
**How it works**: In your element you declare an animation name which has been assigned keyframe properties, and and you must declare an animation duration.

``` css
 .element-to-animate {
   animation-name: moveInLeft;
   animation-duration: 5s;

   /* additonal options */
   animation-delay: 3s;
   animation-iteration-count: 3;
   animation-timing-function: ease-out;
   /* shorthand */
   animation: moveInLeft 2s ease-out;
 }
```

``` css
 @keyframes moveInLeft {
   0% {
    opacity: 0;
    /* negative value comes from left, positive value comes from the right */
    transform: translateX(-100px);
   }
   100% {
    opacity: 1;
    /* with 0, element appears as is, with no animation*/
    transform: translate(0);
   }
 }
```

### Tips & Tricks

Remove shakiness of animations

``` css
  /* put this in the parent element */
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
```

Smooth transition - this has to be in the **initial** state of an element

``` css
  .element {
    transition: all .2s;
  }
```

**ease-in**: start slow then move fast

**ease-out**: start fast then move slow