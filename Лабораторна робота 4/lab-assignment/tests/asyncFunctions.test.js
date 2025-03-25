const { asyncHello, asyncError } = require('../labAssignment');

test('asyncHello resolves to "hello world"', async () => {
    await expect(asyncHello()).resolves.toBe('hello world');
});

test('asyncError rejects with "Something went wrong"', async () => {
    await expect(asyncError()).rejects.toThrow('Something went wrong');
});
