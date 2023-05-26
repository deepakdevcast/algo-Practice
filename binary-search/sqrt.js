import { readNumberInput } from "../input.js";

// https://leetcode.com/problems/sqrtx/submissions/957721470/
let n = await readNumberInput("Enter Number: ")

const squareRoot = (x)=>{
    let left=0;
    let right=x;
    let mid;
    let midsq;
    let ans;
    while(left<=right){
        mid=parseInt(left+ (right-left)/2)
        midsq = mid*mid 
        if(midsq===x)   return mid;
        else if(midsq>x) right =  mid - 1; 
        else {
            ans = mid
            left = mid+1;
        }
    }
    return ans;
}

console.log(squareRoot(n))