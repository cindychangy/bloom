---
title: Globbing in Node
---

# Globbing in Node

    *scss
The * pattern is a wildcard, it matches any pattern in the current directory.
Here we are matching any files ending with .scss in the root folder.


    **/*.scss
This matches any file ending with .scss in the root folder and child directories.


    !not-me.scss
In this case, not-me.scss would be excluded from matching.

    *. + (scss | sass)
The `+` and `( )` allow us to match multiple patters, with different patterns separated by the `|` 
Here, we can match any file ending with '.scss' or '.sass' in root folder.