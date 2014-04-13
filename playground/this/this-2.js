/**
 * Playing with "this" #2
 */

(function() {

    function hi() {
        console.log(this + ' says hi');
    }

    // this is window
    hi();

    // this is window
    hi.call(window);

    // this is Javascript
    hi.call('Javascript');

}());

// Now with strict
(function() {

    'use strict';

    function hi() {
        console.log(this + ' says hi');
    }

    // this is undefined
    hi();

    // this is window
    hi.call(window);

    // this is Javascript
    hi.call('Javascript');

}());