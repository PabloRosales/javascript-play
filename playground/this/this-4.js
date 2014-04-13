/**
 * Playing with "this" #4
 */

var pet = {
    talk: function(sound) {
        console.log(this + ' says ' + sound);
    }
};

var talk = function(sound) {
    return pet.talk(sound);
};

// this is pet object
talk('woof');

var bound_talk = function(sound) {
    return pet.talk.call(pet, sound);
};

// this is pet object
bound_talk('woof');

// using a custom bind method
var bind = function(func, thisValue) {
    return function() {
        // arguments is an Array with all the arguments passed to the function
        return func.apply(thisValue, arguments);
    }
};

var bound_talk_2 = bind(pet.talk, pet);

// this is pet object
bound_talk_2('woof');

// using ES5 bind method
var bound_talk_3 = pet.talk.bind(pet);

// this is pet object
bound_talk_3('woof');