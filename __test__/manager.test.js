// import file to test
const Manager = require('../lib/manager');

describe("Manager", () => {
    it('Class should accept 4 arguments and then return them', () => {
        // Arrange
        const name = 'matt';
        const id = 4;
        const email = 'matt@gmail.com';
        const  officeNumber = 1;

        // Act
        const test = new Manager(name, id, email, officeNumber);
        
        // Assert
        expect(test.name).toBe('matt');
        expect(test.id).toBe(4);
        expect(test.email).toBe('matt@gmail.com')
        expect(test.officeNumber).toBe(1)

    });

});  
