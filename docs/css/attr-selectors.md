---
title: Attribute Selectors
---

# Attribute Selectors

### [attribute] selector
select all elements with a specific attribute

``` css

a[target] {
  background-color: pink;
}
```

### [attribute="value"] selector
select all elements with a specified attribute **and** value

``` css
a[target="_blank"] {
  background-color: orange;
}
```

### [attribute~="value"] selector
select all elements containing a specific word

``` css
[title~="flower"] {
  background: yellow;
}
```

### [attribute^="value"] selector
selects all elements whose attribute **begins** with a certain value

``` css
div[class^="col-"] {
  background: green;
}
```

### [attribute$="value"] selector
selects elements whose attribute **ends** with certain value

``` css
div[class$="box"] {
  background: pink;
}
```

### [attribute*="value"] selector
selects elements whose attribute contain a specific value

``` css
div[class*="sponsor"] {
  background: orange;
}
```

### style all but last/first element

``` css
 &:not(:last-child){
   border-bottom: 1px solid $000;
  }
```
