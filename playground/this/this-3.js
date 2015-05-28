(function($, P) {

    'use strict';

    var code = [
        ["var pet = {\n    talk: function() { return this; }\n};", undefined, 'We are using <code>this</code> inside of our <code>talk</code> method.'],
        ["'[object Object]' === pet.talk().toString()", true, '<code>this</code> points to the pet object.'],
        ["var talk = function() { return this; }", undefined, 'We are using <code>this</code> inside our <code>talk</code> function.'],
        ["'[object Window]' === talk().toString()", true, 'Our talk function points to the window object.'],
        ["pet.talk = talk;\ntypeof pet.talk === 'function' && typeof talk === 'function';", true, 'We now change talk to use our <code>talk</code> function.'],
        ["'[object Object]' === pet.talk().toString()", true, 'We still point to the pet object.']
    ];

    P.render($('.code'), code);

}(jQuery, P));