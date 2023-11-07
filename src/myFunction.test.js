// myFunctions.test.js
const { add } = require('./myFunction');

describe('add function', () => {
    it('adds two numbers correctly', () => {
        expect(add(2, 3)).toBe(5);
    });

    it('adds a positive and a negative number', () => {
        expect(add(5, -3)).toBe(2);
    });
});
