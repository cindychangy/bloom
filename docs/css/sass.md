---
title: SASS Info
---

## Folder Setup

``` markup
scss/
  |- abstracts/
      |- _variables_.scss
      |- _mixins.scss
      |- _functions.scss
  |- base/
      |- _reset.scss
      |- _typography.scss
  |- components/
      |- _buttons.scss
      |- _carousel.scss
      |- _dropdowns.scss
  |- pages/
      |- _home.scss
      |- _about.scss
  |- settings/
      |- _colors.scss
      |- _layout.scss
      |- _fonts.scss
  |- layout/
      |- _header.scss
      |- _footer.scss
      |- _sidebar.scss
  |- theme/
      |- _theme.scss
      |- _admin.scss
  |- vendor/
      |- _boostrap.scss
      |- _jquery.scss
  |- main.scss
```

## File Setup

``` scss
/*main.scss*/

@import url('https://fonts.googleapis.com/css?family=Oswald:600');
@import "pages/sub-page";
```

## Variables

``` scss
$headings-color: green;

h1 {
  color: $headings-color;
}
```


## Mixins

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

### Media Query Mixins

``` scss
@mixin screen-sm {
  @media(min-width: 576px) {
    @content;
  }
}
@mixin screen-md {
  @media (min-width: 768px) {
    @content;
  }
}
@mixin screen-lg {
  @media (min-width: 992px) {
    @content;
  }
}
@mixin screen-xl {
  @media (min-width: 1200px) {
    @content;
  }
}
```


## Extend
Borrow attributes from another element

``` scss
%panel{
  background-color: white;
  height: 70px;
} 

.sidebar-panel{
  @extend %panel;
} 
```


## If/Else

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