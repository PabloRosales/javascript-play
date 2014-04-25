test('No JQuery #3 (get item)', function() {

    // JQuery -----------------------------------------

    var jq_items = $('.list-item');
    var jq_first_1 = jq_items.eq(1);
    var jq_first_2 = jq_items.get(1);
    var jq_first_3 = jq_items[1];

    // Already wrapped
    ok(jq_first_1.text() === 'Second item');

    // Not wrapped
    ok($(jq_first_2).text() === 'Second item');
    ok($(jq_first_3).text() === 'Second item');

    // No JQuery --------------------------------------

    var items = document.querySelectorAll('.list-item');
    var first_1 = items.item(1);
    var first_2 = items[1];

    ok(first_1.innerText === 'Second item');
    ok(first_2.innerText === 'Second item');

});
