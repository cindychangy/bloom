---
title: CSS Boilerplate
---

# Boilerplate

### This is a simple reset.

**Tip**: Font size is based on the font size of the root. Good to use for fonts and sizing as you can scale an entire project by changing the root font-size, so you don’t have to write a million media queries. 

We set root font size in html selector in css to 10px or 62.5% (62.5% of 16px is 10px) for easier calculations for everything


``` css
 *,
 *::after,
 *::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
 }

 html {
  font-size: 62.5%;
 }


 body {
  font-family: sans-serif;
  font-weight: 400;
  line-height: 1.7;
  color: #777;
  box-sizing: border-box;
 }
```