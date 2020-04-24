function trulyBoolean() {
    return true;
}

function stupidBoolean(trulyBoolean) {
    if (trulyBoolean == false) {
        return "Hell yeah!"
    } 
    else if (trulyBoolean == true){
        return ":("
    }
    return ">("
}

console.log(stupidBoolean(trulyBoolean()))

/**  Strict equality (===) doing type conversion
 * 3 === '3' (false)
 * 3 === 3 (true)
 * 3 !== '3' (true)
*/