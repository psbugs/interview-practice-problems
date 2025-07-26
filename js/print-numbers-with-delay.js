const numbers = [1, 2, 3, 4, 5];

// sequential vs multiple results of api in a container
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

 function logNumbers() {
  const response =  Promise.all(
    numbers.map(async (number) => {
      await delay(number * 1000); // simulate delay in seconds
      console.log(number); // log after delay
      return number;
    })
  );
  
  response.then((res)=> console.log('finalresponse',res))
};

logNumbers();