// var sayings = new Map();
// sayings.set('dog', 'woof');
// sayings.set('cat', 'meow');
// sayings.set('elephant', 'toot');
// sayings.size; 
// sayings.get('fox'); 
// sayings.has('bird');
// sayings.delete('dog');
// sayings.has('dog'); 

// for (var [key, value] of sayings) {
//   console.log(key + ' goes ' + value);
// }

// sayings.clear();
// sayings.size;






        //Exception Handling

// const rupee  = (dollar) => {
//     if(typeof dollar === 'number')
//     {
//         return dollar*72
//     }
//     else
//     {
//         throw Error('Amounts need to be in numbers')
//     }
// }

// try {
//     console.log(rupee('fwekj'))    
// }
//  catch (e) {
//     console.log(e)
// }

// console.log('I will not print if the no entered is string');






// let rupees = (dollar)=>{
//     if(typeof dollar === 'number')
//     {
//         return dollar*72
//     }
//     else{
//         throw Error('Please enter value in numbers')
// }

// try {
//     console.log(rupees(5))
// } catch (e) {
//     console.log(e);    
// }

//console.log('I will not run if it crashes');




function details(name, age)
{
   console.log(`Details are ${name} and ${age} :)`);
}
details('Lohith Reddy', 22)
