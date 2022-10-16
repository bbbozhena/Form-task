"use strict";

const btn = document.getElementById("submit-button");
const emailInput = document.getElementById("input-email");
const passwordInput = document.getElementById("input-password");
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

const buttonSubmit = btn.addEventListener("click", () => {
  checkEmail(emailInput);
  return checkForm();
});

function openConfirm() {
  const emailData = emailInput.value;
  const ask = window.confirm(
    `Please confirm account creation for: ${emailData} `
  );

  if (ask) {
    document.body.innerHTML = `<div class="confirm-true"> <p> Hello user with email: ${emailData} </p>
        ${image}
        </div>
        `;
  } 
}
