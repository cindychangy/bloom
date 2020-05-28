---
title: Checkbox
---

# Checkbox



<style>

.options {
  position: relative;
}

[type="checkbox"] + span {
  margin-left: 20px;
  color: #000;
}

[type="checkbox"]:checked,
[type="checkbox"]:not(:checked) {
  opacity: 0;
  height: 0;
  width: 0;
}

[type="checkbox"]:checked + span:before,
[type="checkbox"]:not(:checked) + span:before {
  content: '';
  position: absolute;
  left: 0;
  top: 1px;
  width: 14px;
  height: 14px;
  border: solid 2px #cecece;
  background: #fff;
}

[type="checkbox"]:checked + span:before {
  content: '';
  background-image: url('https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png');
  background-size: 14px;
}




</style>

<label for="option-one" class="options">
  <input type="checkbox" name="option-one" id="option-one"> <span>Option 1</span>
</label>

``` css

```
