import inputNumberArray from "../array/input-array.js";
import { readNumberInput } from "../input.js";

let a = await inputNumberArray();
let x = await readNumberInput("Enter find element: ")

const firstLastOccurence = (a,x)=>{
    let left = 0
    let right = a.length - 1
    let mid;
    let lastOcc = -1;
    
    while(left<=right){
        mid = parseInt(left+(right-left)/2)
        if(x===a[mid]){
            lastOcc = mid;
            left = mid +1
        }
        else if(x>a[mid]) left=mid+1;
        else right=mid-1;
    }
    left = 0
    right = a.length - 1
    let firstOcc = -1;
    while(left<=right){
        mid = parseInt(left+(right-left)/2)
        if(x===a[mid]){
            firstOcc = mid;
            right = mid - 1
        }
        else if(x>a[mid]) left=mid+1;
        else right=mid-1;
    }
    return [firstOcc, lastOcc]
}

console.log(firstLastOccurence(a,x));