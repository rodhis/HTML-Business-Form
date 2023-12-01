"use strict";
// window.onload = () => {
//     const radioForm:HTMLFormElement = document.getElementById('form-page3') as HTMLFormElement
//     radioForm.addEventListener('submit', validateForm)
//     // console.log(radioForm)
//     }
function changeButtonText(text) {
    const buttonText = document.querySelector('.next-button');
    buttonText.innerHTML = text;
}
// function pageSwitch(event:any, page:string): void {
//     event.preventDefault()
//     addEventListener('click', () => window.location.replace(`/src/pages/page${page}.html`))
// }
// another logic to test later 
function skipButton() {
    const skipButton = document.getElementById('skip-button');
    const page = document.URL;
    const dotIndex = page.lastIndexOf('/');
    let getCurrentPage = page.slice(dotIndex + 5);
    let pageNumber = parseInt(getCurrentPage[0]);
    skipButton.addEventListener('click', () => window.location.replace(`/src/pages/page${pageNumber + 1}.html`));
}
function backButton() {
    event.preventDefault();
    const backButton = document.querySelector('.back-button');
    const page = document.URL;
    const dotIndex = page.lastIndexOf('/');
    let getCurrentPage = page.slice(dotIndex + 5);
    let pageNumber = parseInt(getCurrentPage[0]);
    backButton.addEventListener('click', () => window.location.replace(`/src/pages/page${pageNumber - 1}.html`));
}
