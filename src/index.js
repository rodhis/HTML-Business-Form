"use strict";
function changeButtonText(text) {
    const buttonText = document.querySelector('.next-button');
    buttonText.innerHTML = text;
}
function skipButton(page) {
    window.location.replace(`/src/pages/page${page}.html`);
    const backButton = document.querySelector('.skip-button');
}
function backButton(page) {
    window.location.replace(`/src/pages/page${page}.html`);
    const backButton = document.querySelector('.back-button');
}
function charsCounter() {
    const maxLength = 130;
    const textArea = document.getElementById('investment-history');
    const counter = document.querySelector('.charCounter');
    if (textArea && counter) {
        const remaining = maxLength - textArea.value.length;
        counter.textContent = remaining.toString();
        if (remaining < 0) {
            counter.classList.add('counterExceeded');
        }
        else {
            counter.classList.remove('counterExceeded');
        }
    }
}
const textarea = document.getElementById('investment-history');
if (textarea) {
    textarea.addEventListener('keyup', charsCounter);
}
