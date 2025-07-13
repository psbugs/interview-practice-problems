function greet(){
    console.log('Inside greet');
};

function print(fn){
    console.log('Inside print');
    fn();
};

print(greet);