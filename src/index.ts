// window.onload = () => {
    
//     const radioForm:HTMLFormElement = document.getElementById('form-page3') as HTMLFormElement

//     radioForm.addEventListener('submit', validateForm)
//     // console.log(radioForm)
//     }

function changeButtonText(text: string) {
    const buttonText:HTMLElement = document.querySelector('.next-button') as HTMLElement
    buttonText.innerHTML = text

}

function skipButton():void {
    const skipButton:HTMLButtonElement = document.getElementById('skip-button') as HTMLButtonElement

    skipButton.addEventListener('click', () => window.location.replace("/src/pages/page4.html") )
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