
 var obj1 =  {
    name: "Lohith",
    age: 19,
    gender: 'Male'
}
var obj2 = {
    name: "lohith",
    age: 19,
    gender: 'Male'
}
const s = (obj1, obj2)=> Object.keys(obj2).every(key => obj1.hasOwnProperty(key) && obj1[key]===obj2[key])
console.log(s(obj1, obj2))