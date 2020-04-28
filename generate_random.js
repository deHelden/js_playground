function randomFraction() {

    // between 0 and 1
    return Math.random();
}

console.log(randomFraction());


// whole number between 0 an 19
var randomNumberBetween0and19 = Math.floor(randomFraction() * 20);
console.log(randomNumberBetween0and19);

// * actually Math.random makes a good % wich can be evaluated

// random in range
function randomRangeNumber(ourMin, ourMax) {

    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
console.log(randomRangeNumber(1, 10));
