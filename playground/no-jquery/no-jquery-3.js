test('No JQuery #3 (get item)', function() {

    // JQuery -----------------------------------------

    var jq_items = $('.list-item');

    // First item
    var jq_first = jq_items.first();
    var jq_first_1 = jq_items.eq(0);
    var jq_first_2 = jq_items.get(0);
    var jq_first_3 = jq_items[0];

    // Already wrapped
    ok(jq_first.text() === 'First item');
    ok(jq_first_1.text() === 'First item');

    // Not wrapped
    ok($(jq_first_2).text() === 'First item');
    ok($(jq_first_3).text() === 'First item');

    // Last item
    var jq_last = jq_items.last();
    var jq_last_1 = jq_items.eq(-1);
    var jq_last_2 = jq_items.get(-1);
    var jq_last_3 = jq_items[jq_items.length - 1];

    // Already wrapped
    ok(jq_last.text() === 'Third item');
    ok(jq_last_1.text() === 'Third item');

    // Not wrapped
    ok($(jq_last_2).text() === 'Third item');
    ok($(jq_last_3).text() === 'Third item');

    // No JQuery --------------------------------------

    var items = document.querySelectorAll('.list-item');

    // First item
    var first = document.querySelector('.list-item');
    var first_1 = items.item(0);
    var first_2 = items[0];

    ok(first.textContent === 'First item');
    ok(first_1.textContent === 'First item');
    ok(first_2.textContent === 'First item');

    // Last item
    var last = items[items.length - 1];

    ok(last.textContent === 'Third item');

});
