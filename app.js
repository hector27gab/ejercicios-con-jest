// suma
const sum = (firstNumber,secondNumber) => {
    return firstNumber + secondNumber
}
console.log(sum(7,3));

// conversor 1
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
};
console.log(fromEuroToDollar(3.5))

// conversor 2
const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 149.46;
    return valueInYen
};
console.log(fromDollarToYen(3.745));

// conversor 3
const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.0053;
    return valueInPound
};
console.log(fromYenToPound(559.7277));

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};
