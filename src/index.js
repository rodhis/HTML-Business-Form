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
    skipButton.addEventListener('click', () => window.location.replace("/src/pages/page4.html"));
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
