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
    const page:string = document.URL.slice(-7,-6)
    let currentPage:number = Number(page)


    console.log(page)

    skipButton.addEventListener('click', () => window.location.replace(`/src/pages/page${currentPage+1}.html`) )
}

function backButton(): void {
    const skipButton:HTMLButtonElement = document.getElementById('skip-button') as HTMLButtonElement
    const page:string = document.URL
    const dotIndex:number = page.lastIndexOf('.')
    let getCurrentPage:string = page.slice(dotIndex + 1)
    let pageNumber:number = Number(getCurrentPage)

    console.log(pageNumber)

    skipButton.addEventListener('click', () => window.location.replace(`/src/pages/page${pageNumber-1}.html`) )
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