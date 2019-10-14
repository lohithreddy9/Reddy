var a = 'gog';
var b = '';

for(let i=a.length-1; i>=0; i--)
    {
        b=b+a[i];
    }

if(a === b)
{
    console.log('The given string is a palindrome')
}
else{
    console.log('The enterd string is not a palindrome')
}