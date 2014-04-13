/**
 * Playing with "this" #1
 */

// this is window
console.log('[object Window] === ' + this);

// this is undefined
(function() {
   'use strict';
    console.log('undefined === ' + this);
}());

// this is undefined
(function() {
    'use strict';
    console.log('undefined === ' + this);
})();

// this is undefined
(function() {
    'use strict';
    (function() {
        console.log('undefined === ' + this);
    }());
})();

// this is window
(function() {
    console.log('[object Window] === ' + this);
}());

// this is window
(function() {
    console.log('[object Window] === ' + this);
})();

// this is window
(function() {
    (function() {
        console.log('[object Window] === ' + this);
    }());
}());