/**
 * Playing with "this" #5
 */

function say(sound) {
    console.log(this + ' says ' + sound);
}

var pet = {
    sound: 'woof'
};

with (pet) {
    // this will be window object
    say(sound);
}

with (pet) {
    // this will be pet object
    say.call(pet, sound);
}

pet.say = say;

with (pet) {
    // this will be pet object
    say('woof');
}