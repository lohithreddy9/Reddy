var isVerified = false
var isPaid = true
var isGood = true
var isGuest = true

if(isVerified && isPaid && isGuest)
{
    console.log("greeting to come in")
}
else if (isVerified || isGuest)
{
    console.log("u r allowed to come")
}
else 
{
    console.log("Get out")
}