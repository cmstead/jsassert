const { assert } = require('chai');
const jsassert = require('../index');


describe("assert", function () {
    it("does nothing when resolution is acceptable", function () {
        assert.doesNotThrow(() => jsassert(true));
    });

    it("throws when assertion is unacceptable", function () {
        assert.throws(() => jsassert(false), "Assertion failed");
    });

    it("throws custom error when assertion is unacceptable", function () {
        const customErrorMessage = 'Did not receive true';

        assert.throws(() => jsassert(false, customErrorMessage), customErrorMessage);
    });

    it("builds custom error when a function is provided", function(){
        const customErrorMessage = 'built error';

        assert.throws(() => jsassert(false, () => customErrorMessage), customErrorMessage);
    });

    it("calls function instead of simply testing when function is supplied", function(){
        assert.throws(() => jsassert(() => false), 'Assertion failed');
    });
});