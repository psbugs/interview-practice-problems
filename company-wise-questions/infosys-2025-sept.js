// Date : 06-September-2025 
// Day : Saturday

// Panel asked me what are the frameworks you have worked on : 
// He initiated with me by asking javascript hillarious output based questions.

// 1. Practice as much problems like this similar type of question was asked in Persistent systems
console.log(1 + +"2" + 3 + "4" + 6);

// 2. It was based on checking my internal indepth knowledge for hoisting, lexical scope, closures along with difference of arrow as well as traditional functions
const name = "Global";

const obj = {
    name: "Local",
    regular: function () {
        return function () {
            return this.name;
        };
    },
    arrow: function () {
        return () => {
            return this.name;
        };
    }
};

const regularFunc = obj.regular();
const arrowFunc = obj.arrow();

console.log("Regular:", regularFunc());
console.log("Arrow:", arrowFunc());


// 3. He give one array based on that array I have to do following
// - Remove duplicates from the array which consists of nested sub-arrays
// - Filter out the elements which were duplicates same is asked by by Impetus
const nums = [1, 2, [3, 3, 4, 5], 6[7, 8, 9]];

// 4. What are the various performance optimization techniques you have used so far in your previous organization projects?

// 5. He asked me have you worked in typescript as well as typescript based projects so far
// - What is the difference between types and interfaces?
// - What is type assertion in typescript.

// At last he want me to have advanced knowledge of Vue js , angular js and next js
// I simply said that I am having a hands on experience in react js from frontend and nowadays I have upgraded myself in those areas