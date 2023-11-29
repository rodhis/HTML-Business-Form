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
function skipButton() {
    const skipButton = document.getElementById('skip-button');
    const page = document.URL.slice(-7, -6);
    let currentPage = Number(page);
    console.log(page);
    skipButton.addEventListener('click', () => window.location.replace(`/src/pages/page${currentPage + 1}.html`));
}
function backButton() {
    const skipButton = document.getElementById('skip-button');
    const page = document.URL;
    const dotIndex = page.lastIndexOf('.');
    let getCurrentPage = page.slice(dotIndex + 1);
    let pageNumber = Number(getCurrentPage);
    console.log(pageNumber);
    skipButton.addEventListener('click', () => window.location.replace(`/src/pages/page${pageNumber - 1}.html`));
}
// function validateForm(event:any):void {
//     event.preventDefault()
//     console.log('Executou')
//     const radioForm:HTMLFormElement = document.getElementById('form-page3') as HTMLFormElement
//     const select:HTMLSelectElement = document.getElementById('selectPage3') as HTMLSelectElement
//     const selectedValue = select.value 
//     if (selectedValue) console.log(selectedValue) 
//         else
//             console.log('Não funcionou')
//     }
