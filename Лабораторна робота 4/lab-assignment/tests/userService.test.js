const UserService = require('../labAssignment');

test('greet() calls getFullName with "John" and "Doe" and returns greeting in uppercase', () => {
    const getFullNameMock = jest.fn().mockReturnValue('John Doe');
    const userService = new UserService(getFullNameMock);
    
    expect(userService.greet()).toBe('HELLO, JOHN DOE!');
    expect(getFullNameMock).toHaveBeenCalledWith('John', 'Doe');
});