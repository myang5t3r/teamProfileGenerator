// import file to test
const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    it('Class should accept 4 arguments and then return them', () => {
        // Arrange
        const name = 'matt';
        const id = 4;
        const email = 'matt@gmail.com';
        const  github = 'myang5t3r';

        // Act
        const test = new Engineer(name, id, email, github);
        
        // Assert
        expect(test.name).toBe('matt');
        expect(test.id).toBe(4);
        expect(test.email).toBe('matt@gmail.com')
        expect(test.github).toBe('myang5t3r')

    });

});  
