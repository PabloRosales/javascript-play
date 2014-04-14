test('Playing with this #2', function() {

    (function() {

        function hi() {
            return this;
        }

        ok(hi().toString() === '[object Window]', 'Is window');
        ok(hi.call(window).toString() === '[object Window]', 'Is window');
        // Without strict mode our string is boxed into an object
        ok(hi.call('Javascript').toString() === 'Javascript', 'Is Javascript');

    }());

    (function() {

        'use strict';

        function hi() {
            return this;
        }

        ok(typeof hi() === 'undefined', 'Is undefined');
        ok(hi.call(window).toString() === '[object Window]', 'Is window');
        // In strict mode, our string is not boxed into an object
        ok(hi.call('Javascript') === 'Javascript', 'Is Javascript');

    }());

});