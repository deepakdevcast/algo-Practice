import { readNumberInput } from "./input.js";
// nth term of AP=3*n+7;
const n=await readNumberInput();
const nthTermOfAP = (n)=>{
    let nthNum = 0;
    for(let i=1;i<=n;i++){
        nthNum+=3*i+7;
    }
    return nthNum;
}

console.log(nthTermOfAP(n));