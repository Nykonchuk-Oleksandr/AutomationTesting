const ApiClient = require('../labAssignment');

global.fetch = jest.fn(() => Promise.resolve({ json: () => ({ data: 'test' }) }));

test('fetchData returns expected JSON with fetchedAt', async () => {
    const apiClient = new ApiClient();
    const result = await apiClient.fetchData();
    expect(result).toHaveProperty('data', 'test');
    expect(result).toHaveProperty('fetchedAt');
    expect(typeof result.fetchedAt).toBe('number');
});