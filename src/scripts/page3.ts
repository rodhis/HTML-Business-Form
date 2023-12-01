 const accountStatus:HTMLSelectElement | null = document.querySelector('#selectPage3') as HTMLSelectElement
 const marketType = document.querySelectorAll<HTMLInputElement>('input[type="radio"]')

    accountStatus.addEventListener('change', () => {

        const statusValue:string = accountStatus.value
        localStorage.setItem(statusValue, 'accountStatus')
    })

    marketType.forEach((opt) => {
    
        addEventListener('change', () => {
            if (opt.checked) {
                localStorage.setItem(opt.value, 'market')
            }
        })
    })