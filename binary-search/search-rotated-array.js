import inputNumberArray from "../array/input-array.js";
import { readNumberInput } from "../input.js";

let x = await inputNumberArray();
let a = await readNumberInput("Enter searching element: ");
const pivotRotatedArray = (x)=>{
    let left = 0
    let right = x.length - 1
    let mid;
    while(left<right){
        mid = parseInt(left+(right-left)/2)
        if(x[mid]>=x[0]) left=mid+1
        else right=mid
    }
    return left;
}
const searchRotatedArray = (x,a)=>{
    let pivotIndex = pivotRotatedArray(x);
    let left = 0
    let right = x.length - 1
    let mid;
    if(a>=x[pivotIndex] && a<=x[right]){
        let start = pivotIndex;
        let end = right;
        while(start<=end){
            mid = parseInt(start+(end-start)/2)
            if(x[mid]==a) return mid
            else if (x[mid]<a) start=mid+1
            else end=mid-1
        }
    }
    else{
        let start = left;
        let end = pivotIndex-1;
        while(start<=end){
            mid = parseInt(start+(end-start)/2)
            if(x[mid]==a) return mid
            else if (x[mid]<a) start=mid+1
            else end=mid-1
        }
    }
    return -1;
}
// console.log(pivotRotatedArray(x));
console.log(searchRotatedArray(x,a));