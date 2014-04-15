test('Playing with this #4', function() {

    var pet = {
        talk: function() {
            return this;
        }
    };

    var talk = function () {
        return pet.talk();
    };

    ok('[object Object]' === talk('woof').toString(), 'Is Object');

    var bound_talk = function() {
        return pet.talk.call(pet);
    };

    ok('[object Object]' === bound_talk('woof').toString(), 'Is object');

    // using a custom bind method
    var bind = function (func, thisValue) {
        return function () {
            // arguments is an Array with all the arguments passed to the function
            return func.apply(thisValue, arguments);
        }
    };

    var bound_talk_2 = bind(pet.talk, pet);

    ok('[object Object]' === bound_talk_2('woof').toString(), 'Is object');

    // using ES5 bind method
    var bound_talk_3 = pet.talk.bind(pet);

    ok('[object Object]' === bound_talk_3('woof').toString(), 'Is object');

});