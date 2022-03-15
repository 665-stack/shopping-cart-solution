function updateCaseNumber(isIncreasing) {
    const caseInput = document.getElementById('case-number');
    //kono akta var er value jodi reset kora hoy taile shei var ta let diye dite hobe. const diye hobe na. and amra kinto niche if else er modder var er value reset korteci;
    let caseNumber = caseInput.value;
    console.log(caseNumber)
    if (isIncreasing == true) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    //update case total
    const caseTotal = document.getElementById('case-total');
    console.log(caseTotal.innerText)
    caseTotal.innerText = caseNumber * 59;

}
//case plus button handler
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber(true);
})
//case minus button handler
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber(false)
})