import inputNumberArray from '../array/input-array.js';
import { readNumberInput } from '../input.js';

const binarySearchrec = (arr,find,start,end)=>{
    if(start>end) return -1;
    let mid = parseInt(start+(end-start)/2)
    if(arr[mid]===find) return mid;
    else if(arr[mid]>find) return binarySearchrec(arr,find,start,mid-1,find)
    else  return binarySearchrec(arr,find,mid+1,end)
}

const run = async ()=>{
    const arr = await inputNumberArray();
    const find = await readNumberInput("Enter the finding number: ");
    console.log(binarySearchrec(arr,find,0,arr.length-1))
}

await run();
