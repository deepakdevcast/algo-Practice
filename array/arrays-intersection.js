import inputNumberArray from "./input-array.js";
// given two sorted array, find the intersection of array
// https://www.codingninjas.com/codestudio/problems/intersection-of-2-arrays_1082149


// Two Pointer Approach
const findIntersection = (a,b) => {
    let intersection = []
    let pointer1 = 0;
    let pointer2 = 0;
    while(pointer1<a.length && pointer2<b.length){
        if(a[pointer1]===b[pointer2]){
            intersection.push(a[pointer1])
            pointer2+=1
        }
        pointer1+=1;
    }
    if(intersection.length === 0) return -1;
    return intersection;
}

const run = async ()=>{
    let a = await inputNumberArray();
    let b= await inputNumberArray();
    console.log(findIntersection(a,b))
}
// await run();