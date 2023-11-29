"use strict";
function changeButtonText(text) {
    const buttonText = document.querySelector('.next-button');
    buttonText.innerHTML = text;
}
function validateForm() {
    const radioForm = document.querySelector('.radio3');
    if (radioForm) {
        radioForm.onsubmit;
    }
    else {
        alert('Please select your financial market');
    }
}
