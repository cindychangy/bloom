---
title: CSS Variables
---

# CSS Variables

**To create a variable, we just need 2 things:**
1) A name with two dashes in front of it
2) An assigned value

``` css
--penguin-skin: gray;
```

You can assign variables to CSS properties as such:

``` css
  .penguin {
    background: var(--penguin-skin);
  }
```

Putting variables in **‘root’** makes them global

``` css
  :root {
  —penguin-belly: pink;
  }
```

We can also **override** initial variable values as such:
``` css
  .penguin {
    —penguin-belly: orange;
}
```
