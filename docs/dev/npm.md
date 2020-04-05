---
title: NPM
---

# NPM

### Commands

```
&&
# runs something after something else finished

&
# runs something and move to the background then run something else

|
# runs things at the same time
```

### SASS setup

``` js
"scripts": {
  /* “build-sass": "program input-file output-file”*/
 “build-sass": "node-sass sass/main.scss css/main.css --output-style compressed -w”
}
```

### Javascript (Babel)

1) Install in your project
  
```
 npm install --save-dev @babel/cli @babel/core @babel/preset-env uglify-js
```

2) Create .babelrc in root

3) Add scripts to your package.json file

``` js
  "scripts": {
    "watch-js": "babel src/js/**/*.js -w -o dist/scripts/app.js",
    "build-js": "babel src/js/**/*.js | uglifyjs -c -m > dist/scripts/app.js"
  },
```

