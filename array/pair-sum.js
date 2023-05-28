import inputNumberArray from "./input-array.js";
import { readNumberInput } from "../input.js";

// https://www.codingninjas.com/codestudio/problems/pair-sum_697295
const pairSum = (a,sum)=>{
    let pairArr = []
    for(let i=0;i<a.length;i++){
        for(let j=i;j<a.length;j++){
            if((a[i]+a[j])==sum) {
                if(a[i]>=a[j]) pairArr.push([a[j],a[i]])
                else pairArr.push([a[i],a[j]])
            }
        }
    }
    for(let i=0;i<pairArr.length-1;i++){
        if(pairArr[i][0]>pairArr[i+1][0]){
            let temp = [...pairArr[i]]
            pairArr[i]=[...pairArr[i+1]]
            pairArr[i+1] = [...temp]
        }
    }
    return pairArr;
}
const run = async ()=>{
    let a =await inputNumberArray();
    let pair_sum = await readNumberInput("Enter sum of pair: ");
    console.log(pairSum(a,pair_sum))
}
// await run();