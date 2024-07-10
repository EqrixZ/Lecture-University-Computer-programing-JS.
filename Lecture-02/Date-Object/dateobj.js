const start = Date.now()
console.log('Starting timer...');

setTimeout(() =>{
    const millis = Date.now() - start;
    console.log(`seconds elaspsed = ${Math.floor(millis / 1000)}`);
}, 2000);