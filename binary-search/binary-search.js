import inputNumberArray from "../array/input-array.js";
import { readNumberInput } from "../input.js";
let a = await inputNumberArray();
let x = await readNumberInput("Enter number to find: ");

const binarySearch = (a,x)=>{
    let left = 0;
    let right = a.length - 1;
    let mid;
    while(left<=right){
        mid = parseInt(left + (right-left)/2)
        if(x===a[mid]) return mid;
        else if(x>a[mid]) left=mid+1
        else right = mid-1
    }
    return -1;
}

console.log(binarySearch(a,x));
