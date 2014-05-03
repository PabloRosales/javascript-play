test('Javascript gotchas #2 (Hoisting)', function() {

    strictEqual(hello(), 'Hello World');

    // Declaration after being called
    function hello() {
        return 'Hello World';
    }

    function notHoisted() { bye(); }
    throws(notHoisted, /TypeError/, 'Raises type error');

    // Functions defined with var don't get hoisted
    var bye = function() {
        return 'Bye!';
    }

});
