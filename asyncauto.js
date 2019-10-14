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
},
 function(err, results) {
    console.log('err = ', err);
    console.log('results = ', results);
});