---
title: SASS Setup
---

<h2>SASS Setup</h2>

<h3>Media Query Mixins</h3>

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

<hr>

<h3>Folder Setup</h3>

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

<hr>

<h3>File Setup</h3>

``` scss
/*main.scss*/

@import url('https://fonts.googleapis.com/css?family=Oswald:600');
@import "pages/sub-page";
```
