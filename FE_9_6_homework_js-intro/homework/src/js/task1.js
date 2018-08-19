// Task 1. Calculate the total price with a discount
const userMoney = prompt('Amount of money');
const userDiscount = prompt('Discount');
const p = userMoney/100*userDiscount;
const calculateDiscount = userMoney - p;
const savedprice = userMoney - calculateDiscount;
let value;

if ( userMoney < 0 ) {
    value = 'Invalid data';
} else {
    value = 'Price without discount: ' + userMoney + '\nDiscount: ' + userDiscount +
    '% \nPrice with discout: ' + calculateDiscount + '\nSaved: ' + savedprice.toFixed();
}

console.log(value);