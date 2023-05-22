import inputNumberArray from "./input-array.js";
let a = await inputNumberArray();

const reverseArray = (list)=>{
    const size = list.length;
    for(let i=0;i<parseInt(size/2);i++){
        let temp = list[i];
        list[i]=list[size-1-i]
        list[size-1-i] = temp
    }
    return list;
}

console.log(reverseArray(a))
// Approach 2
// console.log(a.reverse());