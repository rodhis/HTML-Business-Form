// window.onload = () => {
    
//     const radioForm:HTMLFormElement = document.getElementById('form-page3') as HTMLFormElement

//     radioForm.addEventListener('submit', validateForm)
//     // console.log(radioForm)
//     }


function changeButtonText(text: string) {
    const buttonText:HTMLElement = document.querySelector('.next-button') as HTMLElement
    buttonText.innerHTML = text

}

// function pageSwitch(event:any, page:string): void {
//     event.preventDefault()
//     addEventListener('click', () => window.location.replace(`/src/pages/page${page}.html`))
// }


// another logic to test later 
function skipButton():void {
    const skipButton:HTMLButtonElement = document.getElementById('skip-button') as HTMLButtonElement
    const page:string = document.URL
    const dotIndex:number = page.lastIndexOf('/')
    let getCurrentPage:string = page.slice(dotIndex + 5)
    let pageNumber:number = parseInt(getCurrentPage[0])


    skipButton.addEventListener('click', () => window.location.replace(`/src/pages/page${pageNumber+1}.html`) )
}

function backButton(event: MouseEvent): void {
    event.preventDefault()
    const backButton:HTMLButtonElement = document.querySelector('.back-button') as HTMLButtonElement
    const page:string = document.URL
    const dotIndex:number = page.lastIndexOf('/')
    let getCurrentPage:string = page.slice(dotIndex + 5)
    let pageNumber:number = parseInt(getCurrentPage[0])


    backButton.addEventListener('click', () => window.location.replace(`/src/pages/page${pageNumber-1}.html`) )
}

