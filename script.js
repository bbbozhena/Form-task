"use strict";

const btn = document.getElementById("button");
const emailInput = document.getElementById("exampleInputEmail1");
const form = document.getElementById("form-container");
const element = document.createElement("div");
const image = element.innerHTML = `  <img src="/style/img/kot-nyashka.jpeg" > `

const buttonClick = btn.addEventListener("click", (e) => {
  return openConfirm();
  e.preventDefault();
});

function openConfirm() {
  const emailData = emailInput.value;
  const ask = window.confirm(
    `Please confirm account creation for ${emailData} `
  );

  if (ask) {
    document.body.innerHTML = `<div class="windo"> <p> Hello user with email: ${emailData} </p>
    ${image}
    </div>
    `
    ;
  } else {
    console.log("neok");
  }
}
