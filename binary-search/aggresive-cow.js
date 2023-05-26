import inputNumberArray from "../array/input-array.js";
import { readNumberInput } from "../input.js";

// https://www.codingninjas.com/codestudio/problems/aggressive-cows_1082559

let stalls = await inputNumberArray();
let aggrCows = await readNumberInput("Enter no. of aggressive Cow: ")

const isPossible = (stalls,aggrCows,mid)=>{
    stalls.sort();
    let slots = 1;
    let lastPos = stalls[0];
    for(let j=0;j<stalls.length;j++){
        if(stalls[j]-lastPos>=mid){
            slots+=1
            if(slots===aggrCows){
                return true
            }
            console.log('valid',mid)
        }else{
            console.log('not valid', mid)
        }
    }
    return false
}

const largestMinDist = (stalls,aggrCows) => {
    let left = 0
    let right = Math.max(...stalls) - Math.min(...stalls);
    let mid;
    let ans = -1;
    while(left<=right){
        mid = parseInt(left + (right-left)/2);
        console.log('mid:',mid)
        if(isPossible(stalls,aggrCows,mid)){
            left = mid + 1
            if(mid>=ans) ans = mid
            console.log('Accepted:', ans, left)
        }
        else{
            right = mid - 1
            console.log('Rejected: ', mid, left)
        }

    }
    return ans;
}

console.log(largestMinDist(stalls,aggrCows));
