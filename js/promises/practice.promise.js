const p = Promise.resolve('Woah');

(async function () {
    try {
        let res = await p;
    } catch (e) {
        console.log(e);
    } finally {
        console.log('finally')
    }
})()


const myPromise = Promise.resolve(Promise.resolve('Promise'))

function funcOne() {
    setTimeout(() => console.log('Timeout 1'), 0);
    myPromise.then(res => res).then(res => console.log(`${res}1`))
    console.log('Last line 1');
};

async function funcTwo() {
    const res = await myPromise;
    console.log(`${res} 2`)
    setTimeout(() => console.log('Timeout2'), 0);
    console.log('Last line 2');
};

// funcOne();
funcTwo();