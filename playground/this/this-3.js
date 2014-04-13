/**
 * Playing with "this" #3
 */

var pet = {
    talk: function(sound) {
        console.log(this + ' says ' + sound);
    }
};

// this is object pet
pet.talk('woof');

var talk_louder = function(sound) {
    console.log(this + ' says ' + sound + '!');
};

pet.talk = talk_louder;

// this is object pet
pet.talk('woof');

// this is window
talk_louder('popup');