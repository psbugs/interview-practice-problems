function foo() {
	employeeId();
	var product = 'Car'; 
	return;
 
	function employeeId() {
		console.log(product);
	}
}

foo();  
 
// undefined
 
(function() {

    console.log(1);

    setTimeout(function() {
        console.log(3);
    }, 0);

    let promise = new Promise(function(resolve, reject) 
        resolve(5)
    }).then(x => console.log(x));

    setTimeout(function() {
        console.log(2);
    }, 1000);
    
    console.log(4);
    
})();
 
(function() {
	var objA = Object.create({
		foo: 'foo'
	});
	var objB = objA;
  console.log('obj1',objA)  
  console.log('objB',objB);
	objB.foo = 'bar';
	delete objA.foo;
	
	console.log(objA.foo);
	console.log(objB.foo);

}());
 
// 1
// 5
// 3
// 2
// 4
 
// undefined
// bar
 
var obj = {

  message: 'Hello',

  innerMessage: function () {

    (function () {

      console.log(this.message);

    }());

  }

};

console.log(obj.innerMessage());
 
 