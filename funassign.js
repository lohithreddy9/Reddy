let mygrade = function(cur_marks, total_marks ){
    let mypercent =((cur_marks/total_marks) * 100)

    let mygrade = ''

    if(mypercent>= 90)
    {
        mygrade = 'A'
    }
    else if(mypercent>= 80)
    {
        mygrade = 'B'
    }
    else if(mypercent>=70)
    {
        mygrade = 'C'
    }
    else{
        mygrade = 'Fail'
    }
    return ('your grade is ' +mygrade + ' and percentage is ' + mypercent)

}

let result = mygrade(99,100)
console.log(result);