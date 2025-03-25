const ApiHelper = require('../labAssignment');

test('fetchViaHelper calls apiCallFunction and returns expected result', async () => {
    const apiCallFunctionMock = jest.fn().mockResolvedValue({ response: 'data' });
    const apiHelper = new ApiHelper(apiCallFunctionMock);
    const result = await apiHelper.fetchViaHelper();
    expect(result).toEqual({ response: 'data' });
});