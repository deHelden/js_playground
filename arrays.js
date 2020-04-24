var array = ["John", 23];

var otherArray = ["Ivan", 1];

// Nested arrays

var nestedArray = [["the universe", 42], ["everything", 0100101]];

console.log(nestedArray[0][1]);

array.push("age");
attract(array);

array.pop();
attract(array);

array.shift();
attract(array);

array.unshift("Bitch");
attract(array);

function attract(param) {
    console.log(param);
}


