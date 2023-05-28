import { readNumberInput } from "../input.js";
import inputNumberArray from "./input-array.js";

// Linear Search
const linearSearch = (list,number)=>{
    for(let i=0;i<list.length;i++){
        if(list[i]===number) return i;
    }
    return -1;
}

const run = async ()=>{
    let a = await inputNumberArray();
    const number = await readNumberInput('Number to find: ');
    
    const index = linearSearch(a,number);

    // approach 2
    // const index = a.indexOf(number)

    if(index==-1) console.log('element not found!!')
    else console.log('find a number at index:',index)
}
// await run();