
//The diagonal of a square formula, is d = a√2

function sqrDiagonal(a) {
    return Math.sqrt(2) * a;
}
console.log(sqrDiagonal(9)); // 9√2 = 12.727922061357857

//the area of a triangle of three given sides
function trianglArea(a, b, c) {
    let semiperimeter = (a + b + c) / 2
    let area = Math.sqrt(semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c))
    return area;
}
console.log(trianglArea(5, 6, 7));

//
function circumferenceCircle(r) {
    const π = 3.14;
    return 2 * π * r;
}
console.log(circumferenceCircle(3));

//
function surfaceAreaCircle(r) {
    const π = 3.14;
    return π * r ** 2;
}
console.log(surfaceAreaCircle(3));

//the larger of two
function largerNum(num1, num2) {
    if (num1 > num2) {
        return (`${num1} is larger than ${num2}`)
    } else if (num2 > num1) {
        return (`${num2} is larger than ${num1}`)
    } else if (num1 == num2) {
        return (`${num1} is equal to ${num2}`)
    }
}
console.log(largerNum(7, 5));
//Is the integer even or odd?
function isEvenOrOdd(num) {

    if (num % 2 == 0) {
        return (`${num} is even`)
    } else {
        return (`${num} is odd`);
    }
}
console.log(isEvenOrOdd(5));