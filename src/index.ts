

// change text on index.html next button on hover

function changeButtonText(text: string) {
    const buttonText:HTMLElement = document.querySelector('.next-button') as HTMLElement
    buttonText.innerHTML = text

}

// skip and back buttons logic

function skipButton(page:number):void {
    window.location.replace(`/src/pages/page${page}.html`)
    // const backButton:HTMLButtonElement = document.querySelector('.skip-button') as HTMLButtonElement
}

function backButton(page:number): void {
  window.location.replace(`/src/pages/page${page}.html`)
    const backButton:HTMLButtonElement = document.querySelector('.back-button') as HTMLButtonElement
}

// page 4 checkbox validation

function validateCheckbox(event:any) {
  event.preventDefault()
  const trainResources:NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type="checkbox"]')
  var resourcesArray:string[] = []  

  trainResources.forEach((checkbox) => {
    resourcesArray.push(checkbox.value)
  });

}


// textarea counter

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
