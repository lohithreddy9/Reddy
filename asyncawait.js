
function square(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Math.pow(x, 2));
      }, 5000);
    });
  }
  
  async function layer(x)
  {
    const value = await square(x);
    console.log(' value is '+ value);
  }
  
  layer(3);