(function($, P) {

    'use strict';

    var code = [
        ["(function() {\n    function hi() {\n        return this;\n    }\n    return hi().toString() === '[object Window]';\n}())", true, 'Since not using strict mode <code>this</code> is pointing to window object.'],
        ["(function() {\n    function hi() {\n        return this;\n    }\n    return hi.call(window).toString() === '[object Window]';\n}())", true, '<code>call</code> is used o set <code>this</code> to window.'],
        ["(function() {\n    function hi() {\n        return this;\n    }\n    return hi.call('javascript').toString() === 'javascript';\n}())", true, '<code>call</code> is used to set <code>this</code> to <code>javascript</code> string. We are using <code>toString</code> since it is a String object.'],
        ["(function() {\n    'use strict';\n    function hi() {\n        return this;\n    }\n    return typeof hi() === 'undefined';\n}())", true, '<code>this</code> is set as undefined since we are using strict mode.'],
    ];

    P.render($('.code'), code);

}(jQuery, P));