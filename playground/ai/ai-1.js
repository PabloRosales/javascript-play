;(function() {

    'use strict';

    var db = new ForerunnerDB();
    var col = db.collection('brain-1');

    var connections = [
        [
            'apple',
            'fruit',
            'red',
            'sweet',
            'small'
        ],
        [
            'strawberry',
            'fruit',
            'red',
            'sweet',
            'small'
        ],
        [
            'blueberry',
            'fruit',
            'blue',
            'sour'
        ],
        [
            'potato',
            'vegetable',
            'brown'
        ],
        [
            'bee',
            'small',
            'insect',
            'honey'
        ],
        [
            'small',
            'size'
        ],
        [
            'medium',
            'size'
        ],
        [
            'fruit',
            'food'
        ],
        [
            'vegetable',
            'food'
        ],
        [
            'insect',
            'animal'
        ]
    ];

    R.forEach(function(v) {
        col.insert({
            name: v[0],
            relations: R.tail(v)
        })
    }, connections);

    function log(e) {
        console.log(e);
        return e;
    }

    function p(l, f) {
        var c = R.call(f, l);
        console.log(R.join(', ', l), R.map(function(v) { return v.name; }, c));
    }

    function relations(_relations) {
        return R.map(function(v) { return { relations: new RegExp(v) }; }, _relations);
    }

    function and(_relations) {
        return col.find({ $and: relations(_relations) });
    }

    function or(_relations) {
        return col.find({ $or: relations(_relations) });
    }

    var extract = R.curry(function(attr, v) {
        return v[attr];
    });

    function find_with_attribute(attr) {
        return R.compose(
            or,
            R.map(extract('name')),
            and
        )(attr);
    }

    p(['size'], and);
    p(['food'], and);
    p(['fruit', 'red'], and);
    p(['fruit', 'red', 'small'], and);
    p(['size'], find_with_attribute);
    p(['food'], find_with_attribute);
    p(['animal'], find_with_attribute);

}());