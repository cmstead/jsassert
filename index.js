(function (assertFactory) {
    const isNode = typeof module !== 'undefined' && typeof module.exports !== 'undefined';

    if (isNode) {
        module.exports = assertFactory();
    } else {
        window.jsassert = assertFactory();
    }
})(function () {
    return function (assertion, customErrorMessage) {
        const message = typeof customErrorMessage === 'string' || typeof customErrorMessage === 'function'
            ? customErrorMessage
            : 'Assertion failed';
        
            const evaluatedAssertion = typeof assertion === 'function'
                ? assertion()
                : assertion

        if (!evaluatedAssertion) {
            throw new Error(typeof message === 'function' ? message() : message);
        }
    }
});