test('Javascript gotchas #9 (IIFE: immediately-invoked function expression)', function() {

    (function (window, document, undefined) {
        // the undefined parameter avoids the problem of someone changing the undefined value in non strict mode
        strictEqual(undefined, undefined);
    })(window, document);

    (function() {
        'use strict';
        // in strict mode undefined is read-only so we can't do this
        // window.undefined = true;
    }());

});
