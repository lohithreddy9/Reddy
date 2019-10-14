var async =  require('async')
async.auto({
    a : function(callback) {
        console.log('Hello');
        callback(null, 'data', 'converted to array');
    },
    b : function(callback) {
        console.log('Hi');
        callback(null, 'folder');
    },
    c: ['a', 'b', function(results, callback) {
        console.log('from c', JSON.stringify(results));
        callback(null, 'filename');
    }],
    email_link: ['c', function(results, callback) {
        console.log('in email_link', JSON.stringify(results));
        callback(null, {'file':results.c, 'email':'user@example.com'});
    }]
}, function(err, results) {
    console.log('err = ', err);
    console.log('results = ', results);
});