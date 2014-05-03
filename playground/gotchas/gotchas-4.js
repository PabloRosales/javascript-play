test('Javascript gotchas #4 (var on for loops)', function() {

    // From http://www.jblotus.com/2013/01/13/common-javascript-gotchas/

    (function() {

        var i = 0;
        var numbers = [];

        function iteratorHandler() {
            i = 10;
        }

        function iterate() {
            // Not using var on for statement, will only run once
            for (i = 0; i < 10; i++) {
                numbers.push(i);
                iteratorHandler();
                numbers.push(i);
            }
        }

        iterate();

        strictEqual(numbers[0], 0);
        strictEqual(numbers[1], 10);

    }());

    (function() {

        var i = 0;
        var numbers = [];

        function iteratorHandler() {
            i = 10;
        }

        function iterate() {
            // Using var on for statement
            for (var i = 0; i < 10; i++) {
                iteratorHandler();
                numbers.push(i);
            }
        }

        iterate();

        strictEqual(numbers[0], 0);
        strictEqual(numbers[1], 1);
        strictEqual(numbers[2], 2);
        strictEqual(numbers[3], 3);
        strictEqual(numbers[4], 4);
        strictEqual(numbers[5], 5);
        strictEqual(numbers[6], 6);
        strictEqual(numbers[7], 7);
        strictEqual(numbers[8], 8);
        strictEqual(numbers[9], 9);

    }());

});
