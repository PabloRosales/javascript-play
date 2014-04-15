test('Javascript gotchas #2 (Global namespace, module pattern)', function() {

    var module = {};

    (function(exports) {

        exports.internal = function() {
            return 'Not global';
        }

    }(module));

    function internal() {
        return 'Global';
    }

    ok('Not global' === module.internal(), 'Not global');
    ok('Global' === internal(), 'Global');

});
