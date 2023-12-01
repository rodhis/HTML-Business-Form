"use strict";
// change text on index.html next button on hover
function changeButtonText(text) {
    const buttonText = document.querySelector('.next-button');
    buttonText.innerHTML = text;
}
// skip and back buttons logic
function skipButton(page) {
    window.location.replace(`/src/pages/page${page}.html`);
    // const backButton:HTMLButtonElement = document.querySelector('.skip-button') as HTMLButtonElement
}
function backButton(page) {
    window.location.replace(`/src/pages/page${page}.html`);
    const backButton = document.querySelector('.back-button');
}
// page 4 checkbox validation
function validateCheckbox(event) {
    event.preventDefault();
    const trainResources = document.querySelectorAll('input[type="checkbox"]');
    var resourcesArray = [];
    trainResources.forEach((checkbox) => {
        resourcesArray.push(checkbox.value);
    });
}
// textarea counter
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
