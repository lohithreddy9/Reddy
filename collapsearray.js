var a = [45, 4, 9, 16, 25];
var b = [2,3,4,5,6,7];
var c =[];
a.map(m=> {c.push(m);});
b.map(m=> {c.push(m);});

var l = c[Symbol.iterator]();
var index=0;

while(index<=c.length){
console.log(l.next());
index++;
}
