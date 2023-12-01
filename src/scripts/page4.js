"use strict";
const investmentType = document.querySelector('#investment-type');
const trainingResources = document.querySelectorAll('input[type="checkbox"]');
investmentType.addEventListener('change', () => {
    const statusValue = investmentType.value;
    localStorage.setItem(statusValue, 'investmentType');
});
trainingResources.forEach((opt) => {
    opt.addEventListener('change', () => {
        const selectedValues = Array.from(trainingResources)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);
        localStorage.setItem(JSON.stringify(selectedValues), 'trainingResources');
    });
});
