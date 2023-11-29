function changeButtonText(text: string) {
    const buttonText:HTMLElement = document.querySelector('.next-button') as HTMLElement
    buttonText.innerHTML = text
}

function validateForm():void {
    const radioForm:HTMLTemplateElement = document.querySelector('.radio3')! as HTMLTemplateElement

    if (radioForm) {
        radioForm.onsubmit
    } else {
        alert('Please select your financial market')
    }


}