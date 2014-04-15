test('Playing with this #5', function() {

    function say() {
        return this;
    }

    var pet = {};

    with (pet) {
        ok('[object Window]' === say().toString(), 'Is window');
    }

    with (pet) {
        ok('[object Object]' === say.call(pet).toString(), 'Is object');
    }

    pet.say = say;

    with (pet) {
        ok('[object Object]' === say().toString(), 'Is Object');
    }

});