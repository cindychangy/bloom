---
title: Forms
---

# Forms

Having it do something:

`<form action="/url-where-you-want-to-submit-form-data"></form>`

### Text Fields

<style>
input[type="text"] {
  font-size: 16px;
  -ms-flex-item-align: end;
  align-self: flex-end;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 14px;
  border: 1px solid #8697ae;
  border-radius: 4px;
  background: none;
  margin-bottom: 16px;
}

input[type="text"]:focus {
  outline: none;
  border: 1px solid transparent;
  box-shadow: 0 0 0 1px #684ea6;
}

::-webkit-input-placeholder,
:-ms-input-placeholder,
::placeholder { 
  color: #7D868F;
}
</style>

<form>
    <input type="text" name="frist-name" placeholder="First name">
    <input type="text" name="last-name" placeholder="Last name">
</form> 

```scss
input[type="text"] {
  font-size: 16px;
  -ms-flex-item-align: end;
  align-self: flex-end;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 14px;
  -webkit-transition: opacity .15s cubic-bezier(.4,0,.2,1);
  -o-transition: opacity .15s cubic-bezier(.4,0,.2,1);
  transition: opacity .15s cubic-bezier(.4,0,.2,1);
  border: 1px solid #8697ae;
  border-radius: 4px;
  background: none;
}

/* style outline on focus */
input[type="text"]:focus {
  outline: none;
  border: 1px solid transparent;
  box-shadow: 0 0 0 1px #684ea6;
}

/* style placeholder text */
::-webkit-input-placeholder,
:-ms-input-placeholder,
::placeholder { 
  color: #7d868f;
}

```

```html
/* simple form */
<form action="/action_page.php">
  <input type="text" name="frist-name" placeholder="First name">
  <input type="submit" value="Submit">
</form>

/* other types of inputs */
  <input type="email" name"email" placeholder="Your email address">
  <input type="date" name=date-picker>

/* inputs with labels */
  <label for="first-name">First name</label>
  <input type="text" name="frist-name" placeholder="First name">
```
