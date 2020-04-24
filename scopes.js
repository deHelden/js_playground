// this var has a global scope
var myGlobal = 10;

function fun1(){
    // var can be scoped in a function (be local)
    // if no var - it becomes global by auto
    ooopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal + "\n";
    }
    if  (typeof ooopsGlobal != "undefined") {
        output += "ooopsGlobal: " + ooopsGlobal + "\n";
    }
    console.log(output);
}
fun1();
fun2();

// ------------------------------------------------------
// local vars (stronger than)> global wars
var outWear = "T-Shirt";

function myOutfit() {
    var outWear = "sweater";

    return outWear;
}

console.log(myOutfit())
console.log(outWear)