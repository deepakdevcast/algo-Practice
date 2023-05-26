import inputNumberArray from "../array/input-array.js";

let x = await inputNumberArray();

const peekIndex = (x)=>{
    let left = 0
    let right = x.length - 1
    let mid;
    while(left<=right){
        mid = parseInt(left+(right-left)/2)
        if(x[mid-1]<=x[mid] && x[mid+1]<=x[mid]) return mid;
        else if(x[mid-1]>=x[mid]) right=mid-1
        else if(x[mid+1]>=x[mid]) left=mid+1
    }
    return -1
}
console.log(peekIndex(x));
