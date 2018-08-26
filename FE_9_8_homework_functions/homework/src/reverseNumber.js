function reverseNumber(a) {
    let num = a.toString().split('').reverse().join('');
    return parseInt(num) * Math.sign(a);
}
reverseNumber();