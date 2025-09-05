async function fakeApiCall(name, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Done: ${name}`);
            resolve(name);
        }, delay);
    });
}

async function runSequential() {
    console.time("Sequential");

    const result1 = await fakeApiCall("Task 1", 1000);
    const result2 = await fakeApiCall("Task 2", 2000);
    const result3 = await fakeApiCall("Task 3", 1000);

    console.timeEnd("Sequential"); //4.08sec
    console.log("Results:", [result1, result2, result3]);
}


async function runParallel() {
    console.time("Parallel");

    const promises = [
        fakeApiCall("Task 1", 1000),
        fakeApiCall("Task 2", 2000),
        fakeApiCall("Task 3", 1000),
    ];

    const results = await Promise.all(promises);

    console.timeEnd("Parallel");
    console.log("Results:", results);
}


module.exports = { runParallel, runSequential }