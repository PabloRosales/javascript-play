test('Javascript gotchas #7 (semicolons)', function() {

    (function() {

        var a = function(x) { return x }
        var b = a
        (2)

        strictEqual(b, 2)

        var c = ['a', 'b']
        var e = c
        [0]

        strictEqual(e, 'a')

        var e = 1
        var f = 1
        /2

        strictEqual(f.toPrecision(1), '0.5')

        function oops() {
            return
            'oops'
        }

        strictEqual(oops(), undefined);

        var g = 'a'
        'b'
        'c'

        strictEqual(g, 'a')

        var h = [1]
        [0]

        strictEqual(h, 1)

        var i = {a: 'abc', b: 'bcd'}
        .a
        [1]

        strictEqual(i, 'b')

        var j = {a: {b: 'bcd'}, b: {c: 'cde'}}
        .a
        .b
        [1]
        == 'c'
        /1

        strictEqual(j, false)

    }());

});
