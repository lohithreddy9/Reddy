function promise(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const error = true;
            if(error){
                console.log('Promise has been resolved');
                resolve();
            }
            else{
                console.log('Promise is rejected');
                reject();
            }
        },5000);
    })
}

promise().then((a)=> console.log('All Set!!')).catch((b)=> console.log('All gone!'));