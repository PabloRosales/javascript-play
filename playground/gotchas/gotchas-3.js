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
    };

    // i definition is actually moved to the top of the function, out of the for scope
    function hoistedVar() {
        for(var i=0; i < 10; i++) {

        }
        i = 0;
        return i;
    }

    strictEqual(hoistedVar(), 0);

});
