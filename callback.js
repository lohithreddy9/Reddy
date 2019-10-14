function good(a)
{
    console.log('Im good and got 90 marks out of ' + a);
}
function boy(a,callback)
{
    callback(a);
}
boy(100,good);