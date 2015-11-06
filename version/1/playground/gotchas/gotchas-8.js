test('Javascript gotchas #8 (|| for default value)', function() {

    (function() {

        var age = null;

        // since 0 evaluates to false, we can't set age to zero
        function setAge(n) {
            age = n || 1;
        }

        setAge(0);
        strictEqual(age, 1);

    }());

});
