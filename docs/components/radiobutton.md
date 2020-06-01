---
title: Radio Buttons
---

# Radio Buttons

<style>
.options {
  list-style: none;
  padding: 0;
}

.options li {
    position: relative;
}

input[type="radio"]:checked,
input[type="radio"]:not(:checked) {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
}

input[type="radio"] + label {
    margin-left: 25px;
    cursor: pointer;
    color: #999ea7;
}

input[type="radio"]:checked + label {
    color: #000;
}

input[type="radio"]:checked + label:before,
input[type="radio"]:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 5px;
    width: 15px;
    height: 15px;
    border: solid 2px #999ea7;
    border-radius: 100%;
    background: #fff;
}

input[type="radio"]:checked + label:before {
  border: solid 2px #000;
}

input[type="radio"]:checked + label:after {
    content: '';
    width: 13px;
    height: 13px;
    background: #000;
    position: absolute;
    top: 8px;
    left: 3px;
    border-radius: 100%;
}

</style>                         

<div style="height:30px;"></div>

<ul class="options">
  <li>
    <input type="radio" id="gender-1" name="account_gender">
    <label for="gender-1">Female</label>
  </li>
  <li>
    <input type="radio" id="gender-2" name="account_gender">
    <label for="gender-2">Male</label>
  </li>
</ul>

<div style="height:30px;"></div>

```html
<ul class="options">
  <li>
    <input type="radio" id="gender-1" name="account_gender">
    <label for="gender-1">Female</label>
  </li>
  <li>
    <input type="radio" id="gender-2" name="account_gender">
    <label for="gender-2">Male</label>
  </li>
</ul>
```

```scss
//styles for  the ul list
.options {
  list-style: none;
  padding: 0;

   li {
    position: relative;
  }
}

//hide native radio button
input[type="radio"]:checked,
input[type="radio"]:not(:checked) {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
}

//style label text
input[type="radio"] + label {
    margin-left: 25px;
    cursor: pointer;
    color: #999ea7;
}

//custom radio border styles
input[type="radio"]:checked + label:before,
input[type="radio"]:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 5px;
    width: 15px;
    height: 15px;
    border: solid 2px #999ea7;
    border-radius: 100%;
    background: #fff;
}

//custom radio dot styles
input[type="radio"]:checked+label:after {
    content: '';
    width: 13px;
    height: 13px;
    background: #000;
    position: absolute;
    top: 8px;
    left: 3px;
    border-radius: 100%;
}

//shows selected option darker
input[type="radio"]:checked + label:before {
  border: solid 2px #000;
}

input[type="radio"]:checked + label {
    color: #000;
}

```
