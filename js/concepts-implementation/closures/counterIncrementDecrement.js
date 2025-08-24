function CreateCounter() {
    let counter = 0;
    return {
        increment() {
            counter++;
            return counter
        },
        decrement() {
            counter--;
            return counter
        },
        getCounter() {
            return counter
        }
    }
};

let counter = CreateCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log('counter item before incrementing', counter.getCounter())

counter.decrement();
counter.decrement();
counter.decrement();

console.log('counter item after incrementing', counter.getCounter())
