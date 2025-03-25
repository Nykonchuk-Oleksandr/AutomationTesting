const OrderProcessor = require('../labAssignment');

test('processOrder calculates final price with currency conversion', () => {
    const convertMock = jest.fn().mockReturnValue(200);
    const processor = new OrderProcessor(convertMock);
    expect(processor.processOrder({ total: 100, currency: 'USD' })).toBe(200);
});

test('processOrder returns original price if conversion fails', () => {
    const convertMock = jest.fn(() => { throw new Error('Conversion failed'); });
    const processor = new OrderProcessor(convertMock);
    expect(processor.processOrder({ total: 100, currency: 'USD' })).toBe(100);
});
