---
title: Checkbox
---

# Checkbox


<style>

.options {
  position: relative;
}

input[type="checkbox"] + span {
  margin-left: 20px;
  color: #999ea7;
  cursor: pointer;
}

input[type="checkbox"]:checked,
input[type="checkbox"]:not(:checked) {
  opacity: 0;
  height: 0;
  width: 0;
}

input[type="checkbox"]:checked + span:before,
input[type="checkbox"]:not(:checked) + span:before {
  content: '';
  position: absolute;
  left: 0;
  top: 1px;
  width: 14px;
  height: 14px;
  border: solid 2px #999ea7;
  background: #fff;
}

input[type="checkbox"]:checked + span:before {
  content: '';
  background-image: url('https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png');
  background-size: 14px;
}

input[type="checkbox"]:checked + span:before {
border: solid 2px #000;
}

input[type="checkbox"]:checked + span {
    color: #000;
}

</style>                         

<div style="height:30px;"></div>

<label for="option-one" class="options">
  <input type="checkbox" name="option-one" id="option-one"> <span>Option 1</span>
</label>

<div style="height:30px;"></div>

```html
<label for="option-one" class="options">
  <input type="checkbox" name="option-one" id="option-one"> <span>Option 1</span>
</label>
```

```scss
//set your item to have relative position
.options {
  position: relative;
}

//styles the label
[type="checkbox"] + span {
  margin-left: 20px;
  color: #72777f;
  cursor: pointer;
}

//hide native checkbox
[type="checkbox"]:checked,
[type="checkbox"]:not(:checked) {
  opacity: 0;
  height: 0;
  width: 0;
}

//create custom checkbox for each state
[type="checkbox"]:checked + span:before,
[type="checkbox"]:not(:checked) + span:before {
  content: '';
  position: absolute;
  left: 0;
  top: 1px;
  width: 14px;
  height: 14px;
  border: solid 2px #72777f;
  background: #fff;
}

//custom check element
[type="checkbox"]:checked + span:before {
  content: '';
  background-image: url('image-url');
  background-size: 14px;
}

//shows selected option darker
input[type="checkbox"]:checked + span:before {
border: solid 2px #000;
}

input[type="checkbox"]:checked + span {
  color: #000;
}

```
