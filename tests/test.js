var assert = require('chai').assert;

var squareModule = require('../modules/test-module');

describe('integers', function () {
    it('should square the numbers', function (done) {
        assert.equal(squareModule(2), 4);
        assert.equal(squareModule(3), 9);
        
        done();
    });
});