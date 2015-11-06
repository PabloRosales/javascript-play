test('No JQuery #1 (query selectors)', function() {

    var jq_list = $('#list');
    var list = document.getElementById('list');

    ok(jq_list[0].toString() === list.toString(), 'By id');

    var jq_first = $('.list-item');
    var list_items = document.querySelectorAll('.list-item');
    var first = document.querySelector('.list-item');

    ok(jq_first[0].toString() === list_items[0].toString(), 'By querySelectorAll');
    ok(jq_first[0].toString() === first.toString(), 'By querySelector');

});