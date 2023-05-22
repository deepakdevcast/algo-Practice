import { readNumberInput } from "../input.js";

const inputNumberArray = async()=>{
    let a = [];
    const size = await readNumberInput('Size of Array: ');
    for(let i=0;i<size;i++){
        const element = await readNumberInput(`${i}th element of array: `);
        a.push(element);
    }
    return a;
}

export default inputNumberArray;