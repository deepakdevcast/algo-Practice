import inputNumberArray from "./input-array.js";


const reverseArray = (list)=>{
    const size = list.length;
    for(let i=0;i<parseInt(size/2);i++){
        let temp = list[i];
        list[i]=list[size-1-i]
        list[size-1-i] = temp
    }
    return list;
}

const run = async ()=>{
    let a = await inputNumberArray();
    console.log(reverseArray(a))
}
// await run();
// Approach 2
// console.log(a.reverse());