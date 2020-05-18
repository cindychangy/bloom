---
title: Alignment
---

# Text Alignment

Center align element:

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