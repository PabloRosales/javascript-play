(function($, CodeMirror, window) {

    CodeMirror.defaults.theme = 'material';
    CodeMirror.defaults.tabSize = 4;
    CodeMirror.defaults.lineNumbers = true;

    function log(data) {
        console.log(data);
    }

    function clear() {
        if (console.clear) {
            console.clear();
        }
    }

    function createRun($elem) {
        return function(e) {
            clear();
            e.preventDefault();
            window.eval($elem.val());
        }
    }

    window.snippet = function snippet(name) {
        $.get(name + '.js', function(data) {
            var ta = $('#' + name).val(data);
            CodeMirror.fromTextArea(document.getElementById(name), { mode: ta.data('lang')});
            $('a.' + name).click(createRun(ta)).trigger('click');
        }, 'text');
    };

    window.strictEqual = function strictEqual(v1, v2, message) {
        if (v1 === v2) {
            log('[SUCCESS ...] ' + v1 + ' === ' + v2 + ' ');
            log('[SUCCESS   ^] ' + message);
        }
        else {
            log('[ERROR ...] ' + v1 + ' and ' + v2 + ' are not equal!');
            log('[ERROR   ^] ' + message);
        }
        console.log('');
    };

    window.strictNotEqual = function strictEqual(v1, v2, message) {
        if (v1 !== v2) {
            log('[SUCCESS ...] ' + v1 + ' !== ' + v2 + ' ');
            log('[SUCCESS   ^] ' + message);
        }
        else {
            log('[ERROR ...] ' + v1 + ' and ' + v2 + ' are equal!');
            log('[ERROR   ^] for: ' + message);
        }
        console.log('');
    };

    window.throws = function throws(fn, regex, message) {

        var actual;

        try {
            fn();
        }
        catch (e) {
            actual = e;
        }

        if (actual && (regex.test(actual.name) || regex.test(actual.message))) {
            log('[SUCCESS ...] Did raise the expected exception: ' + regex);
            log('[SUCCESS   ^] ' + message);
        }
        else {
            log('[ERROR ...] Did not raise the expected exception: ' + regex);
            log('[ERROR   ^] for: ' + message);
        }

    }

}(jQuery, CodeMirror, window));