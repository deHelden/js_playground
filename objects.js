// define object
var ourDog = {
    "name": "Camper",
    "legs": 4,
    'tails': 1,
    "friends in world": ["everything!"],
    "like": [
        "bark",
        "swim",
        "walk",
    ]
};

var usualDog = ourDog;

console.log(usualDog.name);
console.log(usualDog["friends in world"]);

// update propherty
ourDog.name = "Happy Camper"
console.log(usualDog.name);

// add prop
ourDog.bark = "Awf!";
console.log(usualDog.bark);

// delete prop
delete ourDog.bark
