
function changeButtonText(text: string) {
    const buttonText:HTMLElement = document.querySelector('.next-button') as HTMLElement
    buttonText.innerHTML = text

}

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

function charsCounter(): void  {
    const maxLength:number = 130;
    const textArea:HTMLTextAreaElement | null = document.getElementById('investment-history') as HTMLTextAreaElement;
    const counter:HTMLElement | null = document.querySelector('.charCounter');

  if (textArea && counter) {
    const remaining: number = maxLength - textArea.value.length;
    counter.textContent = remaining.toString();

    if (remaining < 0) {
      counter.classList.add('counterExceeded');
    } else {
      counter.classList.remove('counterExceeded');
    }
  }
}

const textarea: HTMLTextAreaElement | null = document.getElementById('investment-history') as HTMLTextAreaElement;
if (textarea) {
  textarea.addEventListener('keyup', charsCounter);

}
