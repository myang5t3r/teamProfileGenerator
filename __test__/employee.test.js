// import file to test
const Employee = require('../lib/employee');

describe("Employee", () => {
    it('Class should accept 3 arguments and then return them', () => {
        // Arrange
        const name = 'matt';
        const id = 4;
        const email = 'matt@gmail.com';

        // Act
        const test = new Employee(name, id, email);
        
        // Assert
        expect(test.name).toBe('matt');
        expect(test.id).toBe(4);
        expect(test.email).toBe('matt@gmail.com')
    });

});  
