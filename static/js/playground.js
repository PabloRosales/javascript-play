(function($, R, hljs, window) {

    var P = {};

    hljs.initHighlightingOnLoad();

    function row() {
        return $("<div class='row'>");
    }

    function col(size, content, classes) {
        return $("<div class='col-md-" + size + "'>").addClass(classes).html(content);
    }

    function code(text) {
        return $("<pre>").text(text);
    }

    function result(text) {
        return code(text + '');
    }

    function comment(html) {
        return $("<small class='text-muted'>").html(html);
    }

    function run(e) {
        var $this = $(this);
        var r = $this.parent().parent().find('code,pre').eq(1);
        var actual_result = window.eval(R.replace('\n', ' ', $this.parent().parent().find('code,pre').eq(0).text()));
        var written_result = window.eval(R.replace('\n', ' ', r.text()));
        if (actual_result === written_result) {
            r.css('font-weight', 'bold');
            console.log(written_result + ' === ' + actual_result);
        }
        else {
            r.css('text-decoration', 'line-through');
            console.log('ERROR: ' + written_result + ' !== ' + actual_result)
        }
        e.preventDefault();
    }

    P.render = function($elem, data) {
        if ($elem.length <= 0) { return $elem; }
        $elem.each(function() {
            $elem.append(
                row()
                    .append(col(1, ''))
                    .append(col(6, 'CODE'))
                    .append(col(2, 'RESULT'))
                    .append(col(2, 'COMMENTS'))
            );
            R.forEach(function(value) {
                var r = row()
                    .append(col(1, $('<a href="#" class="eval" title="See console">').text('eval'), 'text-right'))
                    .append(col(6, code(value[0])))
                    .append(col(2, result(value[1])))
                    .append(col(2, comment(value[2])));
                $elem.append(r);
            }, data);
        });
        $('pre').each(function(__, block) {
            hljs.highlightBlock(block);
        });
        $('.eval').click(run);
        return $elem;
    };

    window.P = P;

}(jQuery, R, hljs, window));