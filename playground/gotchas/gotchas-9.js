test('Javascript gotchas #9 (IIFE: immediately-invoked function expression)', function() {

    // http://toddmotto.com/what-function-window-document-undefined-iife-really-means/

    (function (window, document, undefined) {
        // the undefined parameter avoids the problem of someone changing the undefined value in non strict mode
        strictEqual(undefined, undefined);
    })(window, document);

    (function() {
        'use strict';
        // in strict mode undefined is read-only so we can't do this
        // window.undefined = true;
    }());

    (function() {

        function bugged() {
            var l = [];
            for(var i=0; i < 10; i++) {
                // i will be a reference to the variable i, and not its current value
                l[i] = function() {
                    return i;
                }
            }
            return l;
        }

        var r = bugged();
        strictEqual(r[0](), 10);
        strictEqual(r[3](), 10);
        strictEqual(r[9](), 10);

        function notBugged() {
            var l = [];
            for(var i=0; i < 10; i++) {
                (function() {
                    // j will capture the current value of i in this IIFE
                    var j = i;
                    l[i] = function() {
                        return j;
                    }
                }());
            }
            return l;
        }

        var r2 = notBugged();
        strictEqual(r2[0](), 0);
        strictEqual(r2[3](), 3);
        strictEqual(r2[9](), 9);

        function notBugged2() {
            var l = [];
            for(var i=0; i < 10; i++) {
                // j is the current value of i in this IIFE
                (function(j) {
                    l[j] = function() {
                        return j;
                    }
                }(i));
            }
            return l;
        }

        var r3 = notBugged2();
        strictEqual(r3[0](), 0);
        strictEqual(r3[3](), 3);
        strictEqual(r3[9](), 9);

    }());

});
