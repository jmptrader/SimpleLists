
var sl = require('..');

var list = [
    { id: 1, name: 'Adam', age: 800, gender: 'man' },
    { id: 2, name: 'Eve', age: 600, gender: 'woman' },
    { id: 3, name: 'Abel', age: 500, gender: 'man' },
    { id: 4, name: 'Caine', age: 400, gender: 'man' }
];

exports['where gender is man'] = function (test) {
    var result = sl.where(list, { gender: 'man' });
    
    test.ok(result);
    test.ok(Array.isArray(result));
    test.equal(result.length, 3);
    
    for (var k = 0; k < result.length; k++)
        test.equal(result[k].gender, 'man');
}

exports['where gender is woman'] = function (test) {
    var result = sl.where(list, { gender: 'woman' });
    
    test.ok(result);
    test.ok(Array.isArray(result));
    test.equal(result.length, 1);
    
    for (var k = 0; k < result.length; k++)
        test.equal(result[k].gender, 'woman');
}

exports['where id is five'] = function (test) {
    var result = sl.where(list, { id: 5 });
    
    test.ok(result);
    test.ok(Array.isArray(result));
    test.equal(result.length, 0);
}

exports['where id is three and gender is man'] = function (test) {
    var result = sl.where(list, { id: 3, gender: 'man' });
    
    test.ok(result);
    test.ok(Array.isArray(result));
    test.equal(result.length, 1);
    
    test.equal(result[0].id, 3);
    test.equal(result[0].gender, 'man');
}

exports['where with function'] = function (test) {
    var result = sl.where(list, function (item) {
        if (item.id % 2)
            return true;
        return false;
    });
    
    test.ok(result);
    test.ok(Array.isArray(result));
    test.equal(result.length, 2);
    
    test.equal(result[0].id, 1);
    test.equal(result[1].id, 3);
}

