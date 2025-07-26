function once(fn) {
  let isCalled = false;
  let result = null;

  return function (...args) {
    if (!isCalled) {
      try {
        result = fn.apply(this, args); 
      } catch (err) {
        isCalled = false;
      }
    }
    return result;
  };
}

// Example function
function demo() {
  console.log('hello I am hello');
}

const onceFuncRes = once(demo);

onceFuncRes(); // logs: hello I am hello
onceFuncRes(); // nothing logged