test('No JQuery #2 (each)', function() {

    var expected = [
        'First item',
        'Second item',
        'Third item'
    ];

    // JQuery

    var jq_values = [];
    var jq_items = $('li.list-item');

    jq_items.each(function(i, v) {
        jq_values.push($(v).text());
    });

    ok(jq_values.length === expected.length, 'JQuery same length');
    ok(jq_values[1] === expected[1], 'JQuery same text');

    // No JQuery

    var values = [];
    var nodes = document.querySelectorAll('.list-item');

    [].forEach.call(nodes, function(v, i) {
        values.push(v.textContent);
    });

    ok(values.length === expected.length, 'No JQuery same length');
    ok(values[1] === expected[1], 'No JQuery same text');

});