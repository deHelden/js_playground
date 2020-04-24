function worldBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = "";
    result += "The " + myAdjective +
              " " + myNoun +
              " " + myVerb +
              " " + "to the store " +
              myAdverb
    return result;
}

console.log(worldBlanks("pes", "big", "ran", "quickly"));
console.log(worldBlanks());