test('No JQuery #4 (Is)', function() {

    if(Element && !Element.prototype.matches) {
        var proto = Element.prototype;
        proto.matches = proto.matchesSelector ||
            proto.mozMatchesSelector ||
            proto.msMatchesSelector ||
            proto.oMatchesSelector ||
            proto.webkitMatchesSelector;
    }

    ok($('#first-list-item').is('.list-item'));
    ok(document.getElementById('first-list-item').matches('.list-item'));

});
