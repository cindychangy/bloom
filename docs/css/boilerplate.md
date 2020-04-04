---
title: CSS Boilerplate
---

<p>This is a simple reset. We are setting the font size to <strong>62.5%</strong> which sets our font size to 10px, so we can usually use REMs easily now, font-size: 1.6rem = font-size: 16px.</p>

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