var assert = require('assert');
const cal = require('../service/calculator')

describe('calculator->Check whether the getWord method returns the correct word for the provided number', function () {
    describe('#getWord(3)', function () {
        it('should return \'fizz\' when the value provided is 3', function () {
            assert.equal(cal.getWord(3), 'fizz');
        });
    });
    describe('#getWord(25)', function () {
        it('should return \'buzz\' when the value provided is 25', function () {
            assert.equal(cal.getWord(25), 'buzz');
        });
    });
    describe('#getWord(225)', function () {
        it('should return \'fizzbuzz\' when the value provided is 15', function () {
            assert.equal(cal.getWord(225), 'fizzbuzz');
        });
    });
    describe('#getWord(16)', function () {
        it('should return the same value provided when such value is not a multiple of either 3,5 or 15', function () {
            assert.equal(cal.getWord(16), '16');
        });
    });
    describe('#getWord(\'c\')', function () {
        it('should throw an exception when the provided value is not a valid number', function () {
            assert.throws(() => { cal.getWord('c') }, (err) => { console.error(err); return true });
        });
    });
});
