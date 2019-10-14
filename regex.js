var email = 'lohithreddy414@gmail.com';
var regex = /^([a-z 0-9]+)@([a-z]+)\.([a-z]{2,8})(\.[a-z]{2,5})?$/g

if(regex.test(email) == true)
{
   console.log('It is valid')
}
else
{
    console.log('It is invalid')
}