import { readNumberInput } from "./input.js";
// number of 1's in given two number

let a = await readNumberInput();
let b= await readNumberInput();

const numberOfbit = (n)=>{
    let count = 0
    while(n!=0){
        if(n&1) count+=1
        n=n>>1
    }
    return count;
}
console.log(`Number of bits in a: ${a} and b: ${b} is`,numberOfbit(a)+numberOfbit(b))