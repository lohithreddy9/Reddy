var a = 'THE SKY IS BLUE';
var b = a.split(' ');
var c = '';
for(let i=b.length-1;i>=0;i--)
{
  c=c+b[i]+' ';
}
function r(str){
  return str.split('').reverse().join('');
}
var n= r(c);
console.log(n);