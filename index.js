(function (assertFactory) {
    const isNode = typeof module !== 'undefined' && typeof module.exports !== 'undefined';

    if (isNode) {
        module.exports = assertFactory();
    } else {
        window.jsassert = assertFactory();
    }
})(function () {
    function isTypeOf(type) {
        return function (value) {
            return typeof value === type;
        };
    }

    const isBoolean = isTypeOf('boolean');
    const isFunction = isTypeOf('function');
    const isString = isTypeOf('string');
    const isUndefined = isTypeOf('undefined');

    function performAssert(assertion, customError) {
        const message = !isUndefined(customError) ? customError : 'Assertion failed';
        const evaluatedAssertion = isFunction(assertion) ? assertion() : assertion

        if (!evaluatedAssertion) {
            throw new Error(isFunction(customError) ? message() : message);
        }
    }

    function isValidAssertion(assertion) {
        return isBoolean(assertion) || isFunction(assertion);
    }

    function isValidCustomError(customError) {
        return isUndefined(customError) || isString(customError) || isFunction(customError);
    }

    return function assert(assertion, customError) {
        performAssert(
            isValidAssertion(assertion),
            'Assertion must be either a boolean or function.  Received a value of type ' + typeof assertion
        );

        performAssert(
            isValidCustomError(customError),
            'Custom error is optional, but must be either a string or function when provided.  Received a value of type ' + typeof assertion
        );

        performAssert(assertion, customError);
    }
});