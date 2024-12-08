// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (dollarAmount) => {
    let euros = dollarAmount / oneEuroIs["USD"]
    let yen = euros * oneEuroIs["JPY"]
    return yen
}

const fromEuroToDollar = (euroAmount) => {
    return euroAmount * oneEuroIs["USD"]
}

const fromYenToPound = (yenAmount) => {
    let euros = yenAmount / oneEuroIs["JPY"]
    let pound = euros * oneEuroIs["GBP"]
    return pound
}

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};