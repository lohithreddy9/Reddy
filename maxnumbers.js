var a = [2,1,12,5,23,62,56,45];
var b = a[0];
var c = a[0];

for(let i=0; i<a.length;i++)
{
    if(a[i]>b)
    {
        b=a[i];
    }
}
for(let i = 0; i<a.length;i++)
{
    if((a[i]>c) && (a[i]<b))
    {
        c= a[i];
    }
}
console.log(`The maximum numbers among the array are ${b} and ${c}`);
