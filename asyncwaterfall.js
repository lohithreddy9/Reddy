
var async =  require('async');

async.waterfall([

  function task1(callback) {
    console.log('start!');
    setTimeout(function(){
    	console.log("T1 Complete"); 

    	callback(null, 'Value from task1',); 
     },5000);
     
  },
  function task2(t1Result, callback) {
    console.log(t1Result);
    setTimeout(function(){
    	console.log("T2 Complete");
    	callback(null,'Hello');
      },1000);
    
  },
  function task3 (task2Result, callback) {
    console.log(task2Result);
    setTimeout(function(){
    	console.log("T3 Complete");
        callback(null,'Async waterfall'); 
    },1000);
   
  }
],
function (err,result) {
  if (err) {
    throw new Error(err);
  } else {
    console.log(result);  
  }
});