"use strict";
const accountStatus = document.querySelector('#selectPage3');
const marketType = document.querySelectorAll('input[type="radio"]');
accountStatus.addEventListener('change', () => {
    const statusValue = accountStatus.value;
    localStorage.setItem(statusValue, 'accountStatus');
});
marketType.forEach((opt) => {
    addEventListener('change', () => {
        if (opt.checked) {
            localStorage.setItem(opt.value, 'market');
        }
    });
});
