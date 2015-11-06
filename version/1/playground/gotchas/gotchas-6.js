test('Javascript gotchas #6 (== operator)', function() {

    (function() {

        strictEqual(NaN == NaN, false);
        strictEqual(true == false, false);
        strictEqual(true == true, true);
        strictEqual(false == false, true);

        strictEqual(null == undefined, true);
        // same for undefined instead of null
        strictEqual(null == 0, false);
        strictEqual(null == -1, false);
        strictEqual(null == '', false);
        strictEqual(null == [], false);
        strictEqual(null == {}, false);
        strictEqual(null == function() {}, false);

        var now = new Date();
        strictEqual(now == 0, false);
        strictEqual(now == -1, false);
        strictEqual(now == '', false);
        strictEqual(now == [], false);
        strictEqual(now == {}, false);
        strictEqual(now == function() {}, false);
        strictEqual(now == now, true);

        strictEqual('1' == 1, true);
        strictEqual('-0' == -0, true);
        strictEqual('' == 0, true);
        strictEqual('a1' == 1, false);
        strictEqual('' == '', true);
        strictEqual('' == "", true);
        strictEqual('a' == '', false);
        strictEqual(1 == 1, true);
        strictEqual(1 == 2, false);
        strictEqual({} == [], false);
        strictEqual({} == {}, false);
        strictEqual([] == [], false);
        strictEqual([1] == '1', true);
        strictEqual({a: 1} == {a: 1}, false);
        strictEqual({a: 1} == '{a: 1}', false);

    }());

});
