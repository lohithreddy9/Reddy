
var async =  require('async');

async.waterfall([

  function task1(callback) {
    console.log('start!');
    setTimeout(function(){
    	console.log("T1 Complete"); 

    	callback(null, 'Value from task1'); 
     },5000);
     
  },
  function task2(t1Result, callback) {
    console.log(t1Result);
    
    let b='Value from Task 2';
    let a=t1Result+b;
    setTimeout(function(){
    	console.log("T2 Complete");
    	callback(null,a );
      },1000);
    
  },
  function task3 (task2Result, callback) {
    console.log(task2Result);
    setTimeout(function(){
    	console.log("T3 Complete");
        callback(null,task2Result); 
    },1000);
   
  },
  function(err, results) {
    console.log('err = ', err);
    console.log('results = ', results);
],
function (err) {
  if (err) {
    throw new Error(err);
  } else {
    console.log('No error happened in any tasks, all tasks done!');  
  }
});