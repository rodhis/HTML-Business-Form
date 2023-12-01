"use strict";
function changeButtonText(text) {
    const buttonText = document.querySelector('.next-button');
    buttonText.innerHTML = text;
}
function skipButton() {
    const skipButton = document.getElementById('skip-button');
    const page = document.URL;
    const dotIndex = page.lastIndexOf('/');
    let getCurrentPage = page.slice(dotIndex + 5);
    let pageNumber = parseInt(getCurrentPage[0]);
    skipButton.addEventListener('click', () => window.location.replace(`/src/pages/page${pageNumber + 1}.html`));
}
function backButton(event) {
    event.preventDefault();
    const backButton = document.querySelector('.back-button');
    const page = document.URL;
    const dotIndex = page.lastIndexOf('/');
    let getCurrentPage = page.slice(dotIndex + 5);
    let pageNumber = parseInt(getCurrentPage[0]);
    backButton.addEventListener('click', () => window.location.replace(`/src/pages/page${pageNumber - 1}.html`));
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
