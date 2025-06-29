var x=23;

(function(){
    var x =43;
    (function random(){
        x++;
        // console.log('x inside random',x) // undefined++ -> NaN
        var x=21;
    })()
})();

let a = 3;
let b = new Number(3);

// console.log(typeof a, typeof b,a==b,a===b);

let arr1 = [1,2];
let arr2 = arr1;
// console.log(arr1 == arr2, arr1===arr2)

var p=1;

function data(){
    // console.log(p)
    if(!p){
        var p=10;
    }
    // console.log(p)
}

data();
// console.log('p',p)

function test(){
    // console.log(a);//undefined
    // console.log('foo()',foo());
    var a = 1;
    function foo(){
        return 2;
    }
}
test();

function getName1(){
    // console.log(this.name);
}
Object.prototype.getName2 = ()=>{
    // console.log(this.name);
};

let personObj = {
    name:'tony',
    print:getName1
}
personObj.print();
personObj.getName2()

let q =0;
let id = setInterval(()=>{
    // console.log(q++);
},10)

setTimeout(()=>{
    clearInterval(id)
},2000);

let output = (function(x){
    // console.log('x',x)
    delete x;
    return x
})(true);
// console.log('output',output)

for (var i=0;i<5;i++){
    setTimeout(()=>{
        // console.log(i)
    },i*1000)
};


getData1();
try{
    getData();
}catch(err){}


function getData1(){
    // console.log('getData1')
};

var getData = ()=>{
    // console.log('getData')
}


function xfunc(){
    var a = 10;
    function d(){
        console.log('a',a);

    }
    a= 500;
    return d
}

var z = xfunc();
z();

let str = 'abcde';
str[0] = 'f'
// console.log('str',str)