test('Javascript gotchas #5 (implicit coercions)', function() {

    (function() {

        strictEqual(1 + true, 2);
        strictEqual(1 + "1", "11");
        strictEqual("1" + 1, "11");
        strictEqual(1 + 1 + "1", "21"); // left-associative (1 + 1) + "1"
        strictEqual(1 + "1" + 1, "111"); // left-associative (1 + "1") + 1
        strictEqual(1 + null, 1); // null is converted to 0
        strictEqual("1" + null, "1null");
        strictEqual(null + 1 + "1", "11"); // left-associative (null + 1) + "1"
        strictEqual("10" * 10, 100);
        strictEqual("1" + NaN, "1NaN");
        strictEqual([] + 1, "1");
        strictEqual([] + "1", "1");
        strictEqual(1 + [] + "1", "11");
        strictEqual(1 + Math, "1[object Math]"); // Object toString is called
        strictEqual(1 + {toString: function() { return 1; } }, 2); // toString is called
        strictEqual(1 + {toString: function() { return "[object Object]"; }, valueOf: function() { return 1; } }, 2); // valueOf is called

    }());

    // NaN
    (function() {

        var x = NaN;
        strictEqual(NaN === x, false); // NaN is the only one that is unequal to itself

        strictEqual(isNaN(NaN), true);
        strictEqual(isNaN("one"),  true);
        strictEqual(isNaN(undefined),  true);
        strictEqual(isNaN({}),  true);

        strictEqual(isNaN(null),  false);
        strictEqual(isNaN(""),  false);
        strictEqual(isNaN([]), false);

    }());

    (function() {

        strictEqual(!0, true);
        strictEqual(!-0, true);
        strictEqual(!false, true);
        strictEqual(!null, true);
        strictEqual(!undefined, true);
        strictEqual(!"", true);
        strictEqual(!NaN, true);

        strictEqual(!1, false);
        strictEqual(!-1, false);
        strictEqual(!true, false);
        strictEqual(!"something", false);

    }());

});
