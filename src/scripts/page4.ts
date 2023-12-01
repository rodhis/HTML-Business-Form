const investmentType:HTMLSelectElement | null = document.querySelector('#investment-type') as HTMLSelectElement
const trainingResources = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]')

   investmentType.addEventListener('change', () => {

       const statusValue:string = investmentType.value
       localStorage.setItem(statusValue, 'investmentType')
   })

   trainingResources.forEach((opt) => {

       opt.addEventListener('change', () => {
            const selectedValues = Array.from(trainingResources)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value)

            localStorage.setItem(JSON.stringify(selectedValues), 'trainingResources')
       })
   })