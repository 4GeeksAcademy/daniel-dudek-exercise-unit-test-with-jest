const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    
    const total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", () => {
    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test('3.5 euros should be 3.745 dollars (close to)', () => {
    const result = fromEuroToDollar(3.5);
    expect(result).toBeCloseTo(3.745);
});

test('5 dollars should not equal 500 yen', () => {
    const result = fromDollarToYen(5);
    expect(result).not.toBe(500);
});

test('1000 yen should convert to the correct pounds', () => {
    const result = fromYenToPound(1000);
    const expected = (1000 / 156.5) * 0.87;
    expect(result).toEqual(expected);
});

test('fromDollarToYen should not return falsy for 10 dollars', () => {
    const result = fromDollarToYen(10);
    expect(result).not.toBeFalsy();
});