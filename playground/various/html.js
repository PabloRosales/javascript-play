;(function() {

    'use strict';

    test('HTML (playing to generate HTML)', function() {

        function wrapStr(a, b) {
            return function(s) {
                return a + s + b;
            }
        }

        function catStr(s) {
            return R.join('')(s);
        }

        var tagOpen = wrapStr('<', '>');
        var tagClose = wrapStr('</', '>');

        function tag(t) {
            return function(str) {
                return wrapStr(tagOpen(t), tagClose(t))(text(str));
            }
        }

        function exists(value) {
            return value != null;
        }

        function text(s) {
            if (exists(s)) return s;
            return '';
        }

        function br(str) {
            return '<br/>' + text(str);
        }

        var div = tag('div');
        var p = tag('p');
        var strong = tag('strong');
        var ul = tag('ul');
        var li = tag('li');

        function list(l) {
            return catStr(R.map(li, l));
        }

        function html() {
            return R.apply(R.compose, arguments)();
        }

        var some = 'Some text';
        strictEqual(
            p(),
            '<p></p>'
        );
        strictEqual(
            p(some),
            '<p>Some text</p>'
        );
        strictEqual(
            p(0),
            '<p>0</p>'
        );
        strictEqual(
            p({toString: R.always(some)}),
            '<p>Some text</p>'
        );
        strictEqual(
            p(strong(some)),
            '<p><strong>Some text</strong></p>'
        );
        strictEqual(
            html(p, strong),
            '<p><strong></strong></p>'
        );
        strictEqual(
            html(p, br, strong, R.always(some)),
            '<p><br/><strong>Some text</strong></p>'
        );
        strictEqual(
            html(p, strong, R.always(some)),
            '<p><strong>Some text</strong></p>'
        );
        strictEqual(
            html(div, p, strong, R.always(some)),
            '<div><p><strong>Some text</strong></p></div>'
        );
        strictEqual(
            html(ul, li, R.always(some)),
            '<ul><li>Some text</li></ul>'
        );
        strictEqual(
            list([some, some]),
            '<li>Some text</li><li>Some text</li>'
        );
        strictEqual(
            html(ul, R.always(list([some, some]))),
            '<ul><li>Some text</li><li>Some text</li></ul>'
        );

        var todo = [
            'Buy book',
            'Read book',
            'Practice new ideas'
        ];
        strictEqual(
            html(div, ul, R.always(list(todo))),
            '<div><ul><li>Buy book</li><li>Read book</li><li>Practice new ideas</li></ul></div>'
        );

    });

}());