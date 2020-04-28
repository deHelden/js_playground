function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "a";
            break; // break helps to go out from switch statement
            // else it go to the next statement 
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer = "stuff";
            break;
    }

    return answer;
}

console.log(caseInSwitch("banana"));