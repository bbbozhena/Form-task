"use strict";

const btn = document.getElementById("button");
const emailInput = document.getElementById("exampleInputEmail1");
const passwordInput = document.getElementById("exampleInputPassword1");
const form = document.getElementById("form-container");
const element = document.createElement("div");
const image =
  (element.innerHTML = `  <img src="./style/img/kot-nyashka.png" > `);

function checkEmail(emailInput) {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (re.test(emailInput.value.trim())) {
    openConfirm();
  } else {
    console.log("email is not valid");
  }
}

function checkForm() {
  if (emailInput.value == "" || passwordInput.value == "") {
    alert("Please enter the data ");
  }
}

const buttonClick = btn.addEventListener("click", () => {
  checkEmail(emailInput);
  return checkForm();
});

function openConfirm() {
  const emailData = emailInput.value;
  const ask = window.confirm(
    `Please confirm account creation for: ${emailData} `
  );

  if (ask) {
    document.body.innerHTML = `<div class="windo"> <p> Hello user with email: ${emailData} </p>
        ${image}
        </div>
        `;
  }
}
