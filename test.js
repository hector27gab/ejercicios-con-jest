// import
const {sum} = require('./app.js');

test('adds fourteen + nine = 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

// import 1
const { fromEuroToDollar } = require('./app.js');

// valores
// "JPY": 156.5
// "USD": 1.07
// "GBP": 0.87

test('One euro should be 1.07 dollars', () => {
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});

// import 2
const { fromDollarToYen } = require('./app.js');

test('One dollar should be 149.46 yen', () => {
    const expected = 3.745 * 149.46;
    expect(fromDollarToYen(3.745)).toBe(559.7277);
});

// import 3
const { fromYenToPound } = require('./app.js');

test('One yen should be 0,0053 pound', () => {
    const expected = 559.7277 * 0.0053;
    expect(fromYenToPound(559.7277)).toBe(2.96655681);
});


