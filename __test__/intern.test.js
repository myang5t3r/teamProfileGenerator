// import file to test
const Intern = require('../lib/intern');

describe("Intern", () => {
    it('Class should accept 4 arguments and then return them', () => {
        // Arrange
        const name = 'matt';
        const id = 4;
        const email = 'matt@gmail.com';
        const  school = 'CU Boulder';

        // Act
        const test = new Intern(name, id, email, school);
        
        // Assert
        expect(test.name).toBe('matt');
        expect(test.id).toBe(4);
        expect(test.email).toBe('matt@gmail.com')
        expect(test.school).toBe('CU Boulder')

    });

});  
