---
title: CSS Rules
---

@supports
Basically means: If you support ‘clip-path', then do what is defined with the ‘95vh', if not, then do what’s in defined in the reg element selector (60vh)

 .element {
  height: 60vh;

  @supports (clip-path: polygon(0, 0)) or (-webkit-clip-path: polygon(0, 0)) {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    height: 95vh;
  }
 }
