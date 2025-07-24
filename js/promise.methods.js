

let age = 17;
let result = new Promise((resolve,reject)=>{
        if(age >=18){
            resolve('You can vote');
        }else {
            reject('You cannot vote');
        }
});

result.then(console.log).catch(console.log)

const promise1 = Promise.resolve('Data fetched');
const promise2 = Promise.resolve('fetching price');
const promise3 = Promise.resolve('Computing third');

const resultAll = Promise.all([promise1,promise2,promise3]);

resultAll.then((response)=>{
    console.log('response',response);
}).catch(error=>{
    console.log('error',error);
})

const fetchFromCDN1 = () => Promise.reject("CDN1 failed");
const fetchFromCDN2 = () => Promise.resolve("CDN2 responded");
const fetchFromCDN3 = () => Promise.reject("CDN3 failed");

Promise.any([fetchFromCDN1(), fetchFromCDN2(), fetchFromCDN3()])
  .then((response) => {
    console.log("Fastest successful response:", response);
  })
  .catch((err) => {
    console.error("All CDN requests failed", err);
  });

  const updateUser = () => Promise.resolve("User updated");
const updateOrder = () => Promise.reject("Order failed");
const updateInventory = () => Promise.resolve("Inventory updated");

Promise.allSettled([updateUser(), updateOrder(), updateInventory()])
  .then((results) => {
    results.forEach((result, idx) => {
      if (result.status === "fulfilled") {
        console.log(`Operation ${idx + 1} success:`, result.value);
      } else {
        console.log(`Operation ${idx + 1} failed:`, result.reason);
      }
    });
  });

  const fetchData = () =>
  new Promise((resolve) => setTimeout(() => resolve("Data loaded"), 2000));

const timeout = new Promise((_, reject) =>
  setTimeout(() => reject("Timeout!"), 1000)
);

Promise.race([fetchData(), timeout])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
