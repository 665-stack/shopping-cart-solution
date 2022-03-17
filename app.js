function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    //kono akta var er value jodi reset kora hoy taile shei var ta let diye dite hobe. const diye hobe na. and amra kinto niche if else er modder var er value reset korteci;
    let productNumber = productInput.value;
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
    //calculate total
    calculateTotal();
}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    console.log('subtotalaskd', subTotal);
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    //update sub-total
    document.getElementById('sub-total').innerText = subTotal;
    //update tax-amount 
    document.getElementById('tax-amount').innerText = tax;
    //update total-price 
    document.getElementById('total-price').innerText = totalPrice;
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