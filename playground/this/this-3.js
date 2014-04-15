test('Playing with this #3', function() {

    var pet = {
        talk: function() {
            return this;
        }
    };

    ok('[object Object]' === pet.talk().toString(), 'Is object');

    var talk = function () {
        return this;
    };

    pet.talk = talk;

    ok('[object Object]' === pet.talk('woof').toString(), 'Is object');
    ok('[object Window]' === talk('popup').toString(), 'Is Window');

});