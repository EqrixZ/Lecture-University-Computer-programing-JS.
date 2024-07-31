function promiseTimeout(ms) {
    return new Promise((resovle, reject) => {
        setTimeout(resovle, ms);
    });
}

async function run() {
    console.log('Start!');
    await promiseTimeout(2000);
    console.log('Stop!');
}

console.log('Before run');
run();
console.log('After run');