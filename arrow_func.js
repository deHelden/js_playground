const magicOld = function() {
     new Date()
};
// this is a same
const magicNew = () =>  new Date();

// arrow func with parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1,2], [3,4,5]));

// Higher order
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number
        .isInteger(num) && num > 0)
        .map(x => x * x);
    return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

// default value 
const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5,2));
console.log(increment(5));

// else we can use rest operater 
// this wa number of args is not limiter
// function sum(...args){}

// Spread operator is like Rest operator
// but it makes a copy
const arr1 = ['JAN', 'FEB', 'MAR', 'APR'];
let arr2;
(function() {
    arr2 = [...arr1];
    arr1[0] = 'potato';
})();
console.log(arr2)