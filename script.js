"use strict";

const btn = document.getElementById("button");
const emailInput = document.getElementById("exampleInputEmail1");

const buttonClick = btn.addEventListener("click", () => {
  return openConfirm();
});

function openConfirm() {
  const emailData = emailInput.value;

 window.confirm(`Please confirm account creation for ${emailData} `) 
    if (confirm === true) {
       
      } else {
       
      }


}
