const { calculateFinalPrice } = require('../labAssignment');

test('calculateFinalPrice correctly calculates total price with tax and discount', () => {
    const order = { items: [{ price: 100, quantity: 2 }], discount: 0.2, tax: 0.1 };
    expect(calculateFinalPrice(order)).toBeCloseTo(180, 2);
});

test('calculateFinalPrice throws error for invalid orders', () => {
    expect(() => calculateFinalPrice({ items: [] })).toThrow();
    expect(() => calculateFinalPrice({ items: [{ price: -10, quantity: 1 }] })).toThrow();
});