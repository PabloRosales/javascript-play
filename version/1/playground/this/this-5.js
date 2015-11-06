(function($, P) {

    'use strict';

    var code = [
        ["function say() { return this; }", undefined, ''],
        ["var pet = {}", undefined, ''],
        ["with (pet) { '[object Window]' === say().toString() }", true, '<code>this</code> still points to the window object. We do not have a <code>say</code> method in pet so our <code>say</code> function is getting used.'],
        ["with (pet) { '[object Object]' === say.call(pet).toString() }", true, 'Now <code>this</code> points to the pet object, since we forced the context.'],
        ["pet.say = say;", undefined, ''],
        ["with (pet) { '[object Object]' === say().toString() }", true, 'Now our <code>this</code> inside the <code>say</code> function points to the object. Since we are using <code>with (pet)</code> our <code>say</code> function is calling the <code>pet.say</code> method.']
    ];

    P.render($('.code'), code);

}(jQuery, P));