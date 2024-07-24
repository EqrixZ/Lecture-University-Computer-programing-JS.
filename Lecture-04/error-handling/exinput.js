const rl = requite('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your name: ', (name) => {
    rl.question('Enter your weight (in kg.): ', (weight) =>{
        rl.question('Enter your height (in m.): ', (height) => {
            
            let bml = weight / (height * height);

            console.log(`${name}, your BMI is ${bml.toFixed(2)}`)

            rl.close();
        });
    });
});