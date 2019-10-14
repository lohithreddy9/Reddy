var n = 153;
var m = n.toString();
var s = m.split('');
var r = 0;
for(let i = 0;i<s.length;i++)
{ 
  var p=parseInt(s[i]);
   r = r+ Math.pow(s[i],s.length);
}
if(r === n)
{
    console.log('Yeah its an armstrong');
}
else{
    console.log('No, its not an armstrong');
}
