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

    // Even tho there are 3 declarations of i, only one and not 3 are declared
    // Is the equivalent to 'var x = 0, i;' at the first line of the function
    // Notice that those declarations are turned into assignments so i will be undefined before the second line
    // of the function
    function repeatFoo() {
        var x = 0;
        for(var i=0; i < 10; i++) {
            x++;
        }
        for(var i=0; i < 10; i++) {
            x++;
        }
        for(var i=0; i < 10; i++) {
            x++;
        }
        return x;
    }

    strictEqual(repeatFoo(), 30);

    var foo = 'foo';

    // this won't be hoisted, foo refers to the caught exception
    try {
        throw "exception"
    }
    catch (foo) {
        foo = 'bar';
    }

    strictEqual(foo, 'foo');

});
