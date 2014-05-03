test('Javascript gotchas #1 (Global namespace)', function() {

    function first() {
        return 'Original function';
    }

    function first_override() {
        first = function() { return 'Overridden function'; };
        return first();
    }

    function second() {
        var first = function() { return 'Second function'; };
        return first();
    }

    ok('Original function' === first(), 'Original function');
    ok('Overridden function' === first_override(), 'Overridden function');
    ok('Overridden function' === first(), 'Original function (overridden)');
    ok('Second function' === second(), 'Second function');

});