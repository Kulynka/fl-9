const firstSide = parseFloat(prompt('First side of triangle'));
const secondSide = parseFloat(prompt('Second side of triangle'));
const angle = parseFloat(prompt('Angle of triangle'));
const degree = 180;
const convert = Math.PI / degree;
let value;

if (firstSide > 0 && secondSide > 0 && angle > 0) {
    const cosAngle = Math.cos(angle * convert);

    let thirdSide = Math.sqrt(Math.pow(firstSide, 2) + Math.pow(secondSide, 2) - 2 * firstSide * secondSide * cosAngle);

    const perimeter = firstSide + secondSide + thirdSide;

    const geronP = perimeter / 2;

    const square = Math.sqrt(geronP * (geronP - firstSide) * (geronP - secondSide) * (geronP - thirdSide));

    value = 'c lenght: ' + thirdSide.toFixed(2) + '\nTriangle square: ' 
    + square.toFixed() + '\nTriangle perimeter: ' + perimeter.toFixed(2);

} else {
    value = 'Invalid data';
}

console.log(value);