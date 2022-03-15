function updateCaseNumber(isIncreasing) {
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    if (isIncreasing == true) {
        caseInput.value = parseInt(caseNumber) + 1;
    }
    else {
        caseInput.value = parseInt(caseNumber) - 1;
    }
}
//case plus button handler
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber(true);
})
//case minus button handler
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber(false)
})