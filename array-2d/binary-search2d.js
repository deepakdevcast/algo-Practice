import { readNumberInput } from "../input.js";
import input2dArrayNumber from "./input-2darray.js";

const binaryearch2dArray = (arr, element) => {
    let row = arr.length;
    let col = arr[0].length;
    let i=0;
    let j = row - 1;
    let mid;
    while(i<=j){
        mid = parseInt(i + (j-i)/2)
        if(element==arr[mid][0]) return [mid,0]
        else if(element==arr[mid][col-1]) return [mid,col-1]
        else if(element>arr[mid][0] && element<arr[mid][col-1]){
            let i1=1
            let i2=col-2
            let mid2;
            while(i1<=i2){
                mid2= parseInt(i1 + (i2-i1)/2)
                if(element === arr[mid][mid2]) return [mid,mid2]
                else if(element< arr[mid][mid2]) i2=mid2-1
                else i1=mid+1
            }
        }
        else if(element<arr[mid][0]) j=mid-1
        else i=mid+1
    }
    return -1;
}

const run = async () => {
    const arr = await input2dArrayNumber();
    const element = await readNumberInput('Enter finding element: ');
    
    console.log(binaryearch2dArray(arr,element));
}

await run();