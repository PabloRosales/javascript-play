(function($, P) {

    'use strict';

    var code = [
        ["var pet = {\n    talk: function() { return this; }\n};", undefined, ''],
        ["var talk = function() { return pet.talk(); }", undefined, 'We use <code>pet.talk</code> inside our talk function.'],
        ["'[object Object]' === talk().toString()", true, 'Our internal call to <code>pet.talk</code> returns an object.'],
        ["var bound_talk = function() { return pet.talk.call(pet); }", undefined, 'This is actually redundant...'],
        ["'[object Object]' === bound_talk().toString()", true, ''],
        ["var bind = function(func, thisValue) {\n    return function() {\n        return func.apply(thisValue, arguments);\n    }\n}", undefined, 'We define a custom bind function, that returns a function with apply using <code>thisValue</code>'],
        ["var bound_talk_2 = bind(pet.talk, pet)", undefined, ''],
        ["'[object Object]' === bound_talk_2().toString()", true, 'We are still poiting this to the pet object.'],
        ["var bound_talk_3 = pet.talk.bind(pet)", undefined, 'Using the JS bind method'],
        ["'[object Object]' === bound_talk_3().toString()", true, ''],
        ["'[object Window]' === bind(function() { return this; }, this)().toString()", true, 'We bind <code>this</code> (that points to the window object) to our anonymous function.'],
    ];

    P.render($('.code'), code);

}(jQuery, P));