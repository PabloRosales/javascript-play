;(function() {

    'use strict';

    test('HTML (playing to generate HTML)', function() {

        function exists(value) {
            return value != null;
        }

        function text(s) {
            if (exists(s)) return s;
            return '';
        }

        function div(str) {
            return '<div>' + text(str) + '</div>';
        }

        function br(str) {
            return '<br/>' + text(str);
        }

        function p(str) {
            return '<p>' + text(str) + '</p>';
        }

        function strong(str) {
            return '<strong>' + text(str) + '</strong>';
        }

        function ul(str) {
            return '<ul>' + text(str) + '</ul>';
        }

        function li(str) {
            return '<li>' + text(str) + '</li>';
        }

        function list(l) {
            var j = R.join('');
            return j(R.map(li, l));
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