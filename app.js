function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    //kono akta var er value jodi reset kora hoy taile shei var ta let diye dite hobe. const diye hobe na. and amra kinto niche if else er modder var er value reset korteci;
    let productNumber = productInput.value;
    console.log('product number', productNumber)
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    //update product total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    console.log('product total', productTotal.innerText)

}
//phone plus button handler
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true)
})
//phone minus button handler
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false)
})
//=============================================
//case plus button handler
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
})
//case minus button handler
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false)
})