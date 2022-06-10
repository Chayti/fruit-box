// handle fruit decrease events
document.getElementById('fruit-minus').addEventListener('click', function () {

    const productInput = document.getElementById('fruit-number');
    let productNumber = parseInt(productInput.value);
    if (productNumber > 0) productNumber--;
    productInput.value = productNumber;
    if (productNumber > 0) {
        document.getElementById('fruit-total').innerText = productNumber * 30;//update fruit1 total
    }
    else {
        alert("Add some fruits!");
    }

    let product1Number;
    if (document.getElementById('fruit-number') != null)
        product1Number = parseInt(document.getElementById('fruit-number').value);
    else product1Number = 0;
    const fruitTotal = product1Number * 30;

    let product2Number;
    if (document.getElementById('fruit1-number') != null)
        product2Number = parseInt(document.getElementById('fruit1-number').value);
    else product2Number = 0;
    const fruit1Total = product2Number * 20;

    const subTotal = fruitTotal + fruit1Total;
    const tax = subTotal * .1;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal.toFixed(2);    //update subtotal value on html
    document.getElementById('tax-amount').innerText = tax.toFixed(2); // update total tax value on html
    document.getElementById('total-price').innerText = totalPrice.toFixed(2); // update total on html
})

