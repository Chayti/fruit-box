function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = parseInt(productInput.value);
    if (isIncreasing) productNumber++;
    else if (productNumber > 0) productNumber--;
    productInput.value = productNumber;
    if (productNumber > 0) {
        document.getElementById(product + '-total').innerText = productNumber * price;//update fruit1 total
    }
    else {
        alert("Add some fruits!");
    }
    calculateTotal();
}


function calculateTotal() {
    const fruitTotal = getInputValue('fruit', 1219);
    const fruit1Total = getInputValue('fruit1', 59);
    const subTotal = fruitTotal + fruit1Total;
    const tax = subTotal * .1;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal.toFixed(2);    //update subtotal value on html
    document.getElementById('tax-amount').innerText = tax.toFixed(2); // update total tax value on html
    document.getElementById('total-price').innerText = totalPrice.toFixed(2); // update total on html
}


function getInputValue(product, price) {
    let productNumber;
    if (document.getElementById(product + '-number') != null)
        productNumber = parseInt(document.getElementById(product + '-number').value);
    else productNumber = 0;
    const productTotal = productNumber * price;
    return productTotal;
}


// handle fruit increase decrease events
document.getElementById('fruit-plus').addEventListener('click', function () {
    updateProductNumber('fruit', 1219, true);
});

document.getElementById('fruit-minus').addEventListener('click', function () {
    updateProductNumber('fruit', 1219, false);
})

// handle fruit1 increase decrease events
document.getElementById('fruit1-plus').addEventListener('click', function () {
    updateProductNumber('fruit1', 59, true);
});

document.getElementById('fruit1-minus').addEventListener('click', function () {
    updateProductNumber('fruit1', 59, false);
})



//remove item using event delegate
document.getElementById('fruit-remove').addEventListener('click', function (event) {
    document.getElementById('fruit-number').value = 0;
    calculateTotal();

    console.log(event.target);
    console.log(event.target.parentNode);
    console.log(event.target.parentNode.parentNode);
    console.log(event.target.parentNode.parentNode.parentNode);
    console.log(event.target.parentNode.parentNode.parentNode.parentNode);

    event.target.parentNode.parentNode.parentNode.parentNode.removeChild(document.getElementById('box-item1')); //event delegate
})

document.getElementById('fruit1-remove').addEventListener('click', function (event) {
    document.getElementById('fruit1-number').value = 0;
    calculateTotal();
    event.target.parentNode.parentNode.parentNode.parentNode.removeChild(document.getElementById('box-item2')); //event delegate
})

