let usermail = '  Lco1234 '
let password = 'Good'

let userchecker = function(mystring){
    if(mystring.includes(123)&&(mystring.length>6)){
        return true
    }
    else{
        return false
    }
}

console.log(userchecker(usermail))

let userpswd = function(ystring){
    if(ystring.includes('oo')&&(ystring.length>3))
    {
        return true
    }
    else{
        return false
    }
}

console.log(userpswd(password));