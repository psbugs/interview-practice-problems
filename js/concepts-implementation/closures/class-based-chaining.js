class Chain {
    constructor(size) {
        this.size = size;
    }
    add(num) {
        this.size = this.size + num;
        return this;
    }
    sub(num) {
        this.size = this.size - num;
        return this;
    }
    multiply(num) {
        this.size = this.size * num;
        return this;
    }
    exec() {
        return this.size
    }

};
let size = 10;
let chain = new Chain(size);

console.log(chain.add(2).multiply(10));