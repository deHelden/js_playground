var myArray = [];

// while loop
var i = 0;
while(i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray);

// for loop 
for (var j = 5; j >= 0; j--) {
    myArray.push(j)
}

console.log(myArray);

// nested loops
function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length ; j++) {
            product *= arr[i][j]
        }
    }

    return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);

// do.. while
var anotherArray = [];
var i = 1;

do {
    anotherArray.push(i);
    i++;
} while (i < 5)

console.log(anotherArray)