var voxel = {x: 3.6, y: 7.4, z: 6.54};

// modern way to assign values

const { x : q, y : w, z : e } = voxel;
console.log(q);


// from array 
const [z, x, ,y] = [1,2,3,4,5,6];
console.log(z,x,y);

let a = 8, b = 6;
(() => {
    "use strict";
    [a,b] = [b,a]
})();
console.log(a);
console.log(b);

// destructuring assignmets to Pass an Obj as func params
const stats = {
    max: 56.78,
    average: 35.68,
    min: -0.75,
}

const half = (function() {

    return function half({max, min}){
        return (max + min) / 2.0
    }
})();
console.log(stats);
console.log(half(stats))