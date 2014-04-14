var that = this;

test('Playing with this #1', function() {

    ok('[object Window]' === that.toString(), 'Is window');

    (function() {
        'use strict';
        ok(typeof this === 'undefined', 'Is undefined');
    }());

    (function() {
        'use strict';
        (function() {
            ok(typeof this === 'undefined', 'Is undefined');
        }());
    })();

    (function() {
        ok('[object Window]' === this.toString(), 'Is window');
    }());

    (function() {
        ok('[object Window]' === this.toString(), 'Is window');
    })();

    (function() {
        (function() {
            ok('[object Window]' === this.toString(), 'Is window');
        }());
    }());

});