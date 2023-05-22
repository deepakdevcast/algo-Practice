import inputNumberArray from "./input-array.js";

let a = await inputNumberArray();
let b= await inputNumberArray();
const findIntersection = (a,b) => {
    let intersection = []
    for(let i=0;i<a.length;i++){
        for(let j=0;j<b.length;j++){
            if(a[i]===b[j]) intersection.push(a[i])
        }
    }
    return intersection;
}

console.log(findIntersection(a,b))