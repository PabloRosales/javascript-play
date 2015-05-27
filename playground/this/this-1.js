(function($, R, P) {

    'use strict';

    var code = [
        ["var that = this", undefined, '<code>that</code> references the window object.'],
        ["typeof this === 'object'", true, ''],
        ["typeof that === 'object'", true, ''],
        ["'[object Window]' === that.toString()", true, ''],
        ["function THIS() {\n    return typeof this == 'object';\n};\nTHIS();", true, ''],
        ["(function() {\n    return '[object Window]' === this.toString();\n}())", true, ''],
        ["(function() {\n    return '[object Window]' === that.toString();\n}())", true, ''],
        ["(function() {\n    return (function() {\n        return '[object Window]' === this.toString();\n    }());\n }())", true, ''],
        ["(function() {\n    'use strict';\n    return typeof this === 'undefined';\n}())", true, '<code>use strict</code> makes <code>this</code> to be undefined.'],
        ["(function() {\n    'use strict';\n    return (function() {\n        return typeof this === 'undefined';\n    }()); \n})()", true, '<code>use strict</code> makes <code>this</code> to be undefined, this applies to all nested scopes.'],
        ["(function() {\n    'use strict';\n    return '[object Window]' === that.toString();\n}())", true, '<code>that</code> was declared outside this function.']
    ];

    P.render($('.code'), code);

}(jQuery, R, P));