var a = [1,2,3,6,8,9];
var b = [];

for(let i=1; i<=a.length;i++)
{
    if((a[i+1]-a[i])>1)
    {
        b.push(a[i+1]-a[i])
    }
}
console.log(b);